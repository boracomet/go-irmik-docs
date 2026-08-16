package main

import (
	"context"
	"embed"
	"fmt"
	"io/fs"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"strings"
	"syscall"

	"github.com/gin-gonic/gin"

	"github.com/boracomet/go-irmik/irmik"
	"github.com/boracomet/go-irmik/irmik/config"
)

//go:embed html
var htmlFS embed.FS

func main() {
	cfg, err := config.Load("irmik.yaml")
	if err != nil {
		fatal(err)
	}

	app, err := irmik.New(cfg)
	if err != nil {
		fatal(err)
	}

	site, err := fs.Sub(htmlFS, "html")
	if err != nil {
		fatal(err)
	}

	fileServer := http.FileServer(http.FS(site))

	app.Engine.NoRoute(func(c *gin.Context) {
		path := c.Request.URL.Path
		if path == "/" || path == "/index.html" {
			serveIndex(c, site)
			return
		}
		// Block path traversal; FileServer still applies its own checks.
		if strings.Contains(path, "..") {
			c.Status(http.StatusNotFound)
			return
		}
		fileServer.ServeHTTP(c.Writer, c.Request)
	})

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	fmt.Printf("Go-Irmik docs listening on http://%s\n", cfg.Addr())
	if err := app.Run(ctx); err != nil {
		fatal(err)
	}
}

const defaultOGImageURL = "https://goirmik.org/assets/og.png"
const defaultOGPageURL = "https://goirmik.org/"

func serveIndex(c *gin.Context, site fs.FS) {
	data, err := fs.ReadFile(site, "index.html")
	if err != nil {
		c.Status(http.StatusNotFound)
		return
	}
	if origin := siteOrigin(); origin != "" {
		html := string(data)
		absImage := origin + "/assets/og.png"
		absPage := origin + "/"
		// Rewrite hardcoded production defaults (and any relative fallback) for other domains.
		html = strings.ReplaceAll(html, `content="`+defaultOGImageURL+`"`, `content="`+absImage+`"`)
		html = strings.ReplaceAll(html, `content="/assets/og.png"`, `content="`+absImage+`"`)
		html = strings.ReplaceAll(html, `content="`+defaultOGPageURL+`"`, `content="`+absPage+`"`)
		data = []byte(html)
	}
	c.Data(http.StatusOK, "text/html; charset=utf-8", data)
}

// siteOrigin returns SITE_URL or PUBLIC_URL as a scheme://host[/path] origin
// (no trailing slash) when set to a valid http(s) URL.
func siteOrigin() string {
	raw := strings.TrimSpace(os.Getenv("SITE_URL"))
	if raw == "" {
		raw = strings.TrimSpace(os.Getenv("PUBLIC_URL"))
	}
	if raw == "" {
		return ""
	}
	u, err := url.Parse(strings.TrimRight(raw, "/"))
	if err != nil || (u.Scheme != "http" && u.Scheme != "https") || u.Host == "" {
		return ""
	}
	return u.Scheme + "://" + u.Host + strings.TrimSuffix(u.Path, "/")
}

func fatal(err error) {
	fmt.Fprintf(os.Stderr, "docs: %v\n", err)
	os.Exit(1)
}
