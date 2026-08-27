/* ------------------------------------------------------------------ */
/* Go-Irmik docs — vanilla JS (i18n, theme, view, GitHub, docs)        */
/* ------------------------------------------------------------------ */

const copy = {
  tr: {
    nav: { docs: "Dokümanlar", guide: "Rehber", api: "API", examples: "Örnekler", blog: "Blog" },
    search: "Dokümanlarda ara...",
    hero: {
      badge: "{v} · Go 1.25",
      title: "Go için hızlı, yenilikçi",
      titleAccent: "Web çatısı.",
      sub: "Go-İrmik, Gin üzerine kurulu bir meta-çatı: dosya tabanlı rotalar, SSR/SSG/ISR ve isteğe bağlı admin yardımcıları. Megakit değil.",
      primary: "Dokümanlar",
      secondary: "GitHub",
      installed: "kuruldu",
    },
    stats: [
      { k: "Go", v: "1.25" },
      { k: "MIT", v: "lisans" },
      { k: "…", v: "GitHub yıldızı" },
      { k: "Gin", v: "tabanlı çekirdek" },
    ],
    logoRest: "-İrmik",
    brand: "Go-İrmik",
    featuresTitle: "Çekirdek ve katalog",
    featuresSub: "Dosya rotaları, render modları ve güvenlik odaklı admin yardımcıları. Katalog paketleri opt-in ve dondurulmuş.",
    features: [
      { icon: "·", t: "Gin tabanlı ince çekirdek", d: "irmik.New etrafında meta-çatı. Ağır sürücüler çekirdeğe gömülmez." },
      { icon: "·", t: "Dosya tabanlı rotalar", d: "app/ keşfi sayfaları URL’lere eşler; dinamik parçalar ve layout zinciri." },
      { icon: "·", t: "SSR / SSG / ISR", d: "Aynı uygulamada sunucu render, statik üretim ve ISR. Arka plan revalidate aynı loader yolunu çalıştırır." },
      { icon: "·", t: "HTMX ve React islands", d: "Kısmi HTMX yanıtları; Vite ile hydrate edilen React adacıkları." },
      { icon: "·", t: "Markdown ve SEO", d: "İçerik koleksiyonları, OG/JSON-LD, sitemap ve robots." },
      { icon: "·", t: "Oturum ve CSRF", d: "Çerez oturumları (bellek/Redis) ve CSRF, isteğe bağlı admin yardımcıları." },
      { icon: "·", t: "Güvenlik varsayılanları", d: "Üretimde zayıf JWT sırları reddedilir; fail-closed başlıklar. Router 500 yanıtı genel kalır." },
      { icon: "·", t: "HTMX Admin", d: "Flash↔HX, CRUD şablonları ve listeler için examples/admin." },
      { icon: "·", t: "Auth ve RBAC", d: "JWT/şifre akışları, roller, Can kontrolleri, Gin guard’ları." },
      { icon: "·", t: "SSE ve WebSocket", d: "Opt-in irmik/sse ve irmik/ws. SSE yazma deadline’ını temizler; ~30s WriteTimeout akışı kesmez." },
      { icon: "·", t: "irmik CLI", d: "irmik new, dev, routes, build. irmik new, go-irmik v0.2.0 pinler; kardeş replace yok." },
      { icon: "·", t: "Import ile linking", d: "Çekirdek go get AWS, GORM, OTel SDK, gRPC ve asynq indirmez. Ağır katalog iç içe modüllerdir; SQL/Redis/migrate kökte kalır, yalnızca import edilirse linklenir." },
    ],
    codeTitle: "Idiomatik Go API",
    codeSub: "Gin benzeri yönlendirici; az soyutlama, net yüzey.",
    tabs: { basic: "Merhaba Dünya", routing: "Yönlendirme", middleware: "Ara katman" },
    startTitle: "Hızlı başlangıç",
    steps: [
      { t: "Kur", d: "Modüle ekleyin: go get github.com/boracomet/go-irmik@v0.2.0" },
      { t: "Yaz", d: "irmik.New ile uygulama oluşturun; Gin rotası kaydedin." },
      { t: "Çalıştır", d: "go run main.go, varsayılan :8080" },
    ],
    ctaTitle: "Gündelik iş için Go-İrmik",
    ctaSub: "Admin panelleri, dahili araçlar ve sunucu tarafı render siteler.",
    ctaBtn: "Dokümanları oku",
    showcaseTitle: "İrmik kullanan projeler",
    showcaseSub: "İlk örnek: bu doküman sitesi. Diğerleri eklendikçe burada listelenecek.",
    projectTag: "Bu site",
    projectName: "Go-İrmik Docs",
    projectDesc: "İki dilli doküman sitesi; sürüm ve GitHub yıldız sayısı canlı çekilir. İrmik ile servis edilir.",
    projectCta: "Proje ekle →",
    ecosystem: "Ekosistem",
    footerTagline: "Gin meta-çatısı: dosya rotaları, render modları, isteğe bağlı admin yardımcıları.",
    madeWith: "Bu websitesi İrmik ile build edildi",
    copyright: "© 2026 Go-İrmik. MIT License.",
    sidebar: "Başlarken",
    pageTitle: "Go-İrmik: Go için hızlı, yenilikçi web çatısı",
    cookie: {
      title: "Kurabiye mi? İrmik sütü tercih eder, ama tercihler için bir kırıntı yeter.",
      body: "Dil ve tema tercihlerinizi yerel depolamada (ve gerekirse çerezlerde) tutuyoruz. Takip yok.",
      accept: "Kabul et",
      decline: "Reddet",
      aria: "Çerez ve tercih onayı",
    },
  },
  en: {
    nav: { docs: "Docs", guide: "Guide", api: "API", examples: "Examples", blog: "Blog" },
    search: "Search the docs...",
    hero: {
      badge: "{v} · Go 1.25",
      title: "Fast, innovative",
      titleAccent: "web framework for Go.",
      sub: "Go-Irmik is a Gin meta-framework: file routes, SSR/SSG/ISR, and opt-in admin helpers. Not a megakit.",
      primary: "Docs",
      secondary: "GitHub",
      installed: "installed",
    },
    stats: [
      { k: "Go", v: "1.25" },
      { k: "MIT", v: "license" },
      { k: "…", v: "GitHub stars" },
      { k: "Gin", v: "based core" },
    ],
    logoRest: "-Irmik",
    brand: "Go-Irmik",
    featuresTitle: "Core and catalog",
    featuresSub: "File routes, render modes, and security-minded admin helpers. Catalog packages stay opt-in and frozen.",
    features: [
      { icon: "·", t: "Gin-based thin core", d: "Meta-framework around irmik.New. Heavy drivers stay out of the core." },
      { icon: "·", t: "File-based routes", d: "app/ discovery maps pages to URLs, including dynamic segments and layouts." },
      { icon: "·", t: "SSR / SSG / ISR", d: "Server render, static generation, and ISR cache in the same app. Background revalidate runs the same loader path." },
      { icon: "·", t: "HTMX and React islands", d: "Partial HTMX responses; Vite-hydrated React islands." },
      { icon: "·", t: "Markdown and SEO", d: "Content collections, OG/JSON-LD, sitemap, and robots." },
      { icon: "·", t: "Sessions and CSRF", d: "Cookie sessions (memory/Redis) and CSRF as opt-in admin helpers." },
      { icon: "·", t: "Security defaults", d: "Weak JWT secrets rejected in production; fail-closed headers. Router 500s return a generic body." },
      { icon: "·", t: "HTMX Admin", d: "Flash↔HX, CRUD templates, and lists; see examples/admin." },
      { icon: "·", t: "Auth and RBAC", d: "JWT/password flows, roles, Can checks, Gin guards." },
      { icon: "·", t: "SSE and WebSocket", d: "Opt-in irmik/sse and irmik/ws. SSE clears the write deadline so WriteTimeout (~30s) does not kill streams." },
      { icon: "·", t: "irmik CLI", d: "irmik new, dev, routes, build: scaffold, HMR, diagnostics. irmik new pins go-irmik v0.2.0." },
      { icon: "·", t: "Import-opt-in linking", d: "Core go get does not download AWS, GORM, the OTel SDK, gRPC, or asynq. Catalog heavies are nested modules; SQL/Redis/migrate stay in the root and link only if imported." },
    ],
    codeTitle: "Idiomatic Go API",
    codeSub: "Gin-like router; little abstraction, clear surface.",
    tabs: { basic: "Hello World", routing: "Routing", middleware: "Middleware" },
    startTitle: "Quick start",
    steps: [
      { t: "Install", d: "Add to your module: go get github.com/boracomet/go-irmik@v0.2.0" },
      { t: "Write", d: "Create an app with irmik.New; register a Gin route." },
      { t: "Run", d: "go run main.go, default :8080" },
    ],
    ctaTitle: "Go-Irmik for day-to-day work",
    ctaSub: "Admin panels, internal tools, and server-rendered sites.",
    ctaBtn: "Read the docs",
    showcaseTitle: "Projects using Irmik",
    showcaseSub: "First example: this docs site. Others will be listed here as they appear.",
    projectTag: "This site",
    projectName: "Go-Irmik Docs",
    projectDesc: "Bilingual docs site; release tag and star count fetched live. Served with Irmik.",
    projectCta: "Add a project →",
    ecosystem: "Ecosystem",
    footerTagline: "Gin meta-framework: file routes, render modes, opt-in admin helpers.",
    madeWith: "This website is built with Irmik",
    copyright: "© 2026 Go-Irmik. MIT License.",
    sidebar: "Getting Started",
    pageTitle: "Go-Irmik: Fast, innovative web framework for Go",
    cookie: {
      title: "Cookies? We prefer milk, but Irmik will take a crumb for prefs.",
      body: "We use local storage (and cookies if needed) only for language and theme. No tracking crumbs.",
      accept: "Accept",
      decline: "Decline",
      aria: "Cookie and preference consent",
    },
  },
};

function helloMessage(l) {
  return l === "tr" ? "Merhaba, İrmik" : "Hello, Irmik";
}

function getSamples(l) {
  const hi = helloMessage(l);
  return {
    basic: `package main

import (
    "context"

    "github.com/gin-gonic/gin"
    "github.com/boracomet/go-irmik/irmik"
    "github.com/boracomet/go-irmik/irmik/config"
)

func main() {
    cfg := config.Default()
    app, err := irmik.New(cfg)
    if err != nil {
        panic(err)
    }

    app.Engine.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "${hi}",
        })
    })

    _ = app.Run(context.Background())
}`,
    routing: `cfg := config.Default()
app, err := irmik.New(cfg)
if err != nil {
    panic(err)
}

// Path params (Gin)
app.Engine.GET("/users/:id", getUser)
app.Engine.GET("/files/*path", serveFile)

// Route groups
api := app.Engine.Group("/api/v1")
api.GET("/posts", listPosts)
api.POST("/posts", createPost)
api.DELETE("/posts/:id", deletePost)

_ = app.Run(context.Background())`,
    middleware: `cfg := config.Default()
app, err := irmik.New(cfg)
if err != nil {
    panic(err)
}

// Recovery, request id, security headers: mounted in New
app.EnableSecureDefaults() // opt-in global rate limit

// Per-group auth (your middleware)
admin := app.Engine.Group("/admin")
admin.Use(requireSession)
admin.GET("/stats", dashboard)

_ = app.Run(context.Background())`,
  };
}

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

const LANG_KEY = "irmik-lang";
const THEME_KEY = "irmik-theme";
const COOKIE_KEY = "irmik-cookie-consent";

function readStoredLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "tr" || saved === "en" ? saved : "en";
  } catch {
    return "en";
  }
}

function hasStoredTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "dark" || saved === "light";
  } catch {
    return false;
  }
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readInitialDark() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {
    /* ignore */
  }
  return systemPrefersDark();
}

let lang = readStoredLang();
let dark = readInitialDark();
let view = "home";
let tab = "basic";
let version = "v0.2.0";
let stars = null;
let docsActive = "overview";
let docsQuery = "";
let docsSpy = null;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function lookup(path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), copy[lang]);
}

function formatStars(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

function escapeHtml(line) {
  return line.replace(/(&|<|>)/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[m]));
}

function highlightHome(code) {
  const keywords = /\b(package|import|func|return|app|api|admin)\b/g;
  return code
    .split("\n")
    .map((line, i) => {
      const html = escapeHtml(line)
        .replace(/(".*?")/g, '<span class="tok-str">$1</span>')
        .replace(/(\/\/.*)$/g, '<span class="tok-com">$1</span>')
        .replace(keywords, '<span class="tok-kw">$1</span>')
        .replace(/\b(GET|POST|DELETE|PUT|Use|Group|JSON|New|Run|Engine|Default|EnableSecureDefaults)\b/g, '<span class="tok-fn">$1</span>');
      return `<div class="code-row"><span class="code-ln">${i + 1}</span><span class="code-line">${html || " "}</span></div>`;
    })
    .join("");
}

function highlightDocs(code) {
  const kw = /\b(package|import|func|return|type|struct|go|if|else|range|var|const)\b/g;
  return code
    .split("\n")
    .map((line) => {
      const html = escapeHtml(line)
        .replace(/(".*?"|`.*?`)/g, '<span class="tok-str">$1</span>')
        .replace(/(#.*|\/\/.*)$/g, '<span class="tok-com">$1</span>')
        .replace(kw, '<span class="tok-kw">$1</span>')
        .replace(/\b(GET|POST|PUT|DELETE|Use|Group|JSON|New|Run|Engine|Render|Bind)\b/g, '<span class="tok-fn">$1</span>');
      return `<div class="docs-code-line">${html || " "}</div>`;
    })
    .join("");
}

function inline(text) {
  return `<code class="docs-inline">${text}</code>`;
}

function strong(text) {
  return `<strong class="text-foreground">${text}</strong>`;
}

function p(html) {
  return `<p class="docs-p">${html}</p>`;
}

function ul(items) {
  return `<ul class="docs-ul">${items
    .map((it) => `<li class="docs-li"><span class="docs-bullet"></span><span class="docs-li-text">${it}</span></li>`)
    .join("")}</ul>`;
}

function callout(html, tone) {
  const cls = tone === "warn" ? "docs-callout docs-callout-warn" : "docs-callout";
  return `<div class="${cls}">${html}</div>`;
}

function codeBlock(code, file) {
  const fileBar = file ? `<div class="docs-code-file">${file}</div>` : "";
  return `<div class="docs-code">${fileBar}<div class="docs-code-body">${highlightDocs(code)}</div></div>`;
}

function badges() {
  return `<div class="docs-badges">
    <span class="badge"><span class="badge-label">Go</span><span class="badge-value">1.25</span></span>
    <span class="badge"><span class="badge-label">License</span><span class="badge-value">MIT</span></span>
    <span class="badge"><span class="badge-label">release</span><span class="badge-value">v0.2.0</span></span>
    <span class="badge"><span class="badge-label">build</span><span class="badge-value badge-value-ok">passing</span></span>
  </div>`;
}

function catalogGrid(items) {
  return `<div class="catalog-grid">${items
    .map(
      ([pkg, desc]) =>
        `<div class="catalog-card"><code>${pkg}</code><p>${desc}</p></div>`,
    )
    .join("")}</div>`;
}

/* ------------------------------------------------------------------ */
/* Docs sections                                                       */
/* ------------------------------------------------------------------ */

const sections = [
  {
    id: "overview",
    title: { tr: "Genel bakış", en: "Overview" },
    body: (l) =>
      badges() +
      p(
        l === "tr"
          ? `${strong("İrmik")}, Go için Gin tabanlı bir meta-çatı. ${strong("Çekirdek sözü")}: dosya tabanlı ${inline("app/")} rotaları, SSR/SSG/ISR render modları ve güvenlik odaklı admin yardımcıları (isteğe bağlı oturum/CSRF/RBAC/HTMX). Megakit değil.`
          : `${strong("Irmik")} is a Gin-based meta-framework for Go. ${strong("Core promise:")} file-based ${inline("app/")} routes, SSR/SSG/ISR render modes, and security-minded admin helpers (opt-in session/CSRF/RBAC/HTMX). Not a megakit.`,
      ) +
      p(
        l === "tr"
          ? `Admin / dahili araçlar ve sunucu render siteler için. Birincil örnek yol: ${inline("examples/admin")} (oturum + HTMX arayüz + JSON API). SPA istemcileriyle de kullanılabilir.`
          : `For admin / internal tools and server-rendered sites. Primary example path: ${inline("examples/admin")} (session + HTMX UI + JSON API). Usable with SPA clients as well.`,
      ),
  },
  {
    id: "whats-new",
    title: { tr: "v0.2.0'da neler var", en: "What's new in v0.2.0" },
    body: (l) =>
      p(
        l === "tr"
          ? `Güncel sürüm ${inline("v0.2.0")} (2026-08-27). Katalog dondurulmuş; yeni paket yok. ${inline("v0.1.1")} imagex + geliştirme overlay’i olarak duruyor (overlay ${inline("development")} dışında monte edilmez).`
          : `Current release is ${inline("v0.2.0")} (2026-08-27). The catalog is frozen; no new packages. ${inline("v0.1.1")} remains imagex + the development overlay (the overlay is not mounted outside ${inline("development")}).`,
      ) +
      p(
        l === "tr"
          ? `${strong("0.1.1’e göre kırıcı")} — bu yüzden 0.2.0:`
          : `${strong("Breaking vs 0.1.1")} — why this is 0.2.0:`,
      ) +
      ul(
        l === "tr"
          ? [
              `${inline("Context.MustUser")} kullanıcı yoksa panic eder. 401 için ${inline("auth.RequireAuth")} kullanın; anonim istekte ${inline("User()")} bakın.`,
              `${inline("GitHubStub")} / ${inline("GoogleStub")}: ${inline("Exchange")} her zaman ${inline("ErrOAuthNotImplemented")} döner. Sahte GitHub/Google istemcisi yok.`,
              `${inline("cache.New")} bilinmeyen sürücüde hata döner.`,
            ]
          : [
              `${inline("Context.MustUser")} panics if no user is present. Use ${inline("auth.RequireAuth")} for 401; use ${inline("User()")} when the request may be anonymous.`,
              `${inline("GitHubStub")} / ${inline("GoogleStub")}: ${inline("Exchange")} always returns ${inline("ErrOAuthNotImplemented")}. No fake GitHub/Google client.`,
              `${inline("cache.New")} errors on unknown drivers.`,
            ],
      ) +
      p(
        l === "tr"
          ? `${strong("İç içe modüller")} (katalog ağırlıkları kök ${inline("go get")} dışında):`
          : `${strong("Nested modules")} (catalog heavies stay out of the root ${inline("go get")}):`,
      ) +
      ul(
        l === "tr"
          ? [
              `Çekirdek ${inline("go get github.com/boracomet/go-irmik")} AWS, GORM, OTel SDK, gRPC ve asynq ${strong("indirmez")}.`,
              `Ağır katalog paketleri iç içe modüllerdir; import yolları değişmedi. İç içe yolu ${inline("go get")} edin ve pinleyin, örn. ${inline("github.com/boracomet/go-irmik/irmik/db/gormx@v0.2.0")}.`,
              `SQL sürücüleri / Redis / migrate hâlâ kök modülle gelir; yalnızca import edilirse linklenir.`,
              `Dürüst kalan: küçük ${inline("otel/trace")} ve ${inline("otelhttp")} golang-migrate üzerinden kökte ${strong("indirect")} görünebilir; bu OTel SDK değildir.`,
              `Katalog API’leri dondurulmuş (yeni gormx özellikleri yok).`,
            ]
          : [
              `Core ${inline("go get github.com/boracomet/go-irmik")} does ${strong("not")} download AWS, GORM, the OTel SDK, gRPC, or asynq.`,
              `Catalog heavies are nested modules with unchanged import paths. ${inline("go get")} the nested path and pin, e.g. ${inline("github.com/boracomet/go-irmik/irmik/db/gormx@v0.2.0")}.`,
              `SQL drivers / Redis / migrate still come with the root module; they are linked only if imported.`,
              `Honest leftover: tiny ${inline("otel/trace")} and ${inline("otelhttp")} may appear as ${strong("indirect")} root deps via golang-migrate; that is not the OTel SDK.`,
              `Catalog APIs remain frozen (no new gormx features).`,
            ],
      ) +
      p(
        l === "tr"
          ? `${strong("v0.2.0’da ayrıca")} (önceki dokümanlara göre yeni veya netleşen):`
          : `${strong("Also in v0.2.0")} (new or clarified vs previous docs):`,
      ) +
      ul(
        l === "tr"
          ? [
              `${inline("EnableSecureHeaders")} ${inline("New")}’ın başlık yapılandırmasının ${strong("yerine geçer")}; ikinci bir middleware yığmaz. ${inline("Skip")} gerçekten varsayılanları düşürür.`,
              `${strong("WS Hub")}: ${inline("ServeHTTP")} döngüyü tembel başlatır (${inline("Start")} / ${inline("Run")}). Unutulan ${inline("Start()")} HTTP goroutine’ini kilitlemez.`,
              `${inline("irmik new")} ${inline("github.com/boracomet/go-irmik v0.2.0")} pinler, kardeş ${inline("replace")} yok, ${inline("GET /health")} iki kez kaydedilmez.`,
            ]
          : [
              `${inline("EnableSecureHeaders")} ${strong("replaces")} the header config mounted in ${inline("New")}; it does not stack a second middleware. ${inline("Skip")} actually drops defaults.`,
              `${strong("WS Hub")}: ${inline("ServeHTTP")} lazy-starts the loop (${inline("Start")} / ${inline("Run")}). A forgotten ${inline("Start()")} does not deadlock the HTTP goroutine.`,
              `${inline("irmik new")} pins ${inline("github.com/boracomet/go-irmik v0.2.0")}, no sibling ${inline("replace")}, and does not double-register ${inline("GET /health")}.`,
            ],
      ) +
      p(
        l === "tr"
          ? `${strong("Hâlâ doğru")} (Wave 1; gerileme yok):`
          : `${strong("Still true")} (Wave 1; do not regress):`,
      ) +
      ul(
        l === "tr"
          ? [
              `${strong("SSR şablon önbelleği")}: ${inline("render.Engine")} ${inline("page.html")} ve layout’ları bir kez derler (${inline("{{define}}")} / ${inline("{{block}}")} için Clone yalıtımı). Önbellek ${inline("Reload")} / ${inline("SetFuncs")} / ${inline("SetIslandFunc")} ile düşer. Disk düzenlemeleri yalnızca ${inline("Reload")} sonrası görünür (${inline("irmik dev")} zaten yeniler). İlk istek hâlâ parse eder — ${inline("MountPages")} ısınması yok.`,
              `Parse ve eksik-dosya hataları test edilir; başarısız ${inline("Reload")} son iyi partials’ı korur.`,
              `${strong("ISR revalidate")}: arka plan yenileme, istekle aynı loader yolunu çalıştırır (ayrılmış ${inline("gin.Context")} üzerinde klonlanmış GET). Kullanıcıya özel ISR yok; loader’lar canlı ${inline("ResponseWriter")}’a bağlanmamalı.`,
              `${strong("SSE")}: bağlantı yazma deadline’ını temizler; sunucu ${inline("WriteTimeout")} (~30s) akışı kesmez. ${inline("IdleTimeout")} varsayılanı 60s.`,
              `${strong("Router 500")}: gövde genel ${inline("internal server error")}; ayrıntılar istek kimliğiyle loglanır.`,
              `${strong("JWT refresh")}: ${inline("RefreshStore")} arayüzü. Varsayılan ${inline("MemoryRefreshStore")} süreç-yerel TTL/GC — çok kopyalı değil, Redis RefreshStore yok. Bellek içi rotasyonu üretim JWT’si olarak öğretmeyin.`,
              `JWT erişim jetonları bir ${inline("jti")} içerir; bu bir erişim-jetonu denylist’i değildir.`,
            ]
          : [
              `${strong("SSR template cache")}: ${inline("render.Engine")} compiles ${inline("page.html")} and layouts once (Clone isolation for ${inline("{{define}}")} / ${inline("{{block}}")}). Cache drops on ${inline("Reload")} / ${inline("SetFuncs")} / ${inline("SetIslandFunc")}. Disk edits show after ${inline("Reload")} (${inline("irmik dev")} already reloads). First request still parses — no ${inline("MountPages")} warmup.`,
              `Parse and missing-file failures are tested; a failed ${inline("Reload")} keeps the last good partials.`,
              `${strong("ISR revalidate")} runs the same loader path as the request (cloned GET on a detached ${inline("gin.Context")}). Per-user ISR is unsupported; loaders must not depend on the live ${inline("ResponseWriter")}.`,
              `${strong("SSE")} clears the write deadline so Server ${inline("WriteTimeout")} (~30s) does not kill streams. ${inline("IdleTimeout")} default is 60s.`,
              `Router ${strong("500s")} return a generic ${inline("internal server error")} body; details are logged with request id.`,
              `${strong("JWT refresh")}: ${inline("RefreshStore")} interface. Default ${inline("MemoryRefreshStore")} is process-local with TTL/GC — not multi-replica, no Redis RefreshStore. Do not treat in-memory rotation as production JWT.`,
              `JWT access tokens include a ${inline("jti")}; it is not an access-token denylist.`,
            ],
      ) +
      codeBlock(
        `go get github.com/boracomet/go-irmik@v0.2.0
go install github.com/boracomet/go-irmik/cmd/irmik@v0.2.0`,
        "terminal",
      ),
  },
  {
    id: "who-for",
    title: { tr: "Kimler için?", en: "Who is this for?" },
    body: (l) =>
      ul(
        l === "tr"
          ? [
              "Gin bilen, üstüne yapı ve keşfedilebilirlik isteyen Go ekipleri.",
              "Admin panelleri, dahili araçlar ve SSR ağırlıklı ürünler kuranlar.",
              "Bağımlılığı import ile ekleyenler — ağır katalog (AWS/GORM/OTel SDK/gRPC/asynq) için iç içe modülü ayrıca go get edenler.",
            ]
          : [
              "Go teams who know Gin and want structure and discoverability on top.",
              "Builders of admin panels, internal tools and SSR-heavy products.",
              "People who opt in via import — and go get nested modules for catalog heavies (AWS/GORM/OTel SDK/gRPC/asynq).",
            ],
      ),
  },
  {
    id: "who-not-for",
    title: { tr: "Kimler için değil?", en: "Who is this NOT for?" },
    body: (l) =>
      ul(
        l === "tr"
          ? [
              'Her şeyi tek pakette isteyen "batteries-included" mega-çatı arayanlar.',
              "Gin soyutlamasından tamamen kaçınmak isteyen projeler.",
              "Sıfır yapılandırmayla dev SPA'ler kuran, sunucu istemeyen ekipler.",
            ]
          : [
              "Teams wanting a batteries-included megaframework with everything in one package.",
              "Projects that want to avoid the Gin abstraction entirely.",
              "Teams building giant SPAs with zero config and no server at all.",
            ],
      ),
  },
  {
    id: "why-irmik",
    title: { tr: "Neden İrmik?", en: "Why Irmik" },
    body: (l) =>
      p(
        l === "tr"
          ? "İrmik çekirdeği dosya rotaları, render modları ve güvenlik odaklı admin yardımcılarıdır. Auth, cache, WebSocket gibi katalog paketlerini yalnızca ihtiyaç duydukça import edersiniz."
          : "Irmik’s core is file routes, render modes, and security-minded admin helpers. You import catalog packages such as auth, cache, or WebSocket only when you need them.",
      ) +
      ul(
        l === "tr"
          ? [
              `${strong("Import ile linking:")} Kullanmadığın paket ikiliye girmez. Çekirdek ${inline("go get")} AWS/GORM/OTel SDK/gRPC/asynq indirmez.`,
              `${strong("Keşfedilebilir:")} ${inline("irmik")} CLI ile rotaları ve modülleri listele.`,
              `${strong("Güvenli varsayılanlar:")} Üretimde zayıf sırlar reddedilir.`,
            ]
          : [
              `${strong("Import-opt-in linking:")} a package you don't import never enters the binary. Core ${inline("go get")} does not download AWS/GORM/OTel SDK/gRPC/asynq.`,
              `${strong("Discoverable:")} list routes and modules with the ${inline("irmik")} CLI.`,
              `${strong("Safe defaults:")} weak secrets are rejected in production.`,
            ],
      ),
  },
  {
    id: "quick-start",
    title: { tr: "Hızlı başlangıç", en: "Quick start" },
    body: (l) =>
      p(l === "tr" ? "Üç adımda çalışan bir sunucu:" : "A running server in three steps:") +
      codeBlock(
        `# 1: ${l === "tr" ? "kur" : "install"}
go install github.com/boracomet/go-irmik/cmd/irmik@v0.2.0

# 2: ${l === "tr" ? "yeni proje (v0.2.0 pin; kardeş replace yok)" : "new project (pins v0.2.0; no sibling replace)"}
irmik new my-app && cd my-app

# 3: ${l === "tr" ? "çalıştır" : "run"}
irmik dev   # http://localhost:8080`,
        "terminal",
      ) +
      codeBlock(
        `package main

import (
    "context"

    "github.com/gin-gonic/gin"
    "github.com/boracomet/go-irmik/irmik"
    "github.com/boracomet/go-irmik/irmik/config"
)

func main() {
    cfg := config.Default()
    app, err := irmik.New(cfg)
    if err != nil {
        panic(err)
    }
    app.EnableSecureDefaults()
    app.Engine.GET("/", func(c *gin.Context) {
        c.String(200, "${helloMessage(l)}")
    })
    if err := app.Run(context.Background()); err != nil {
        panic(err)
    }
}`,
        "main.go",
      ) +
      callout(
        l === "tr"
          ? `${inline("irmik new")} ${inline("GET /health")} rotasını iki kez kaydetmez. Çekirdek ${inline("go get github.com/boracomet/go-irmik@v0.2.0")} AWS, GORM, OTel SDK, gRPC ve asynq indirmez.`
          : `${inline("irmik new")} does not double-register ${inline("GET /health")}. Core ${inline("go get github.com/boracomet/go-irmik@v0.2.0")} does not download AWS, GORM, the OTel SDK, gRPC, or asynq.`,
      ),
  },
  {
    id: "rendering",
    title: { tr: "Render modları", en: "Rendering modes" },
    body: (l) =>
      p(
        l === "tr"
          ? "İrmik aynı uygulamada üç render modunu destekler; her rota kendi modunu seçebilir."
          : "Irmik supports three rendering modes in the same app; each route can pick its own.",
      ) +
      ul(
        l === "tr"
          ? [
              `${strong("SSR")}: her istekte sunucuda render. ${inline("render.Engine")} ${inline("page.html")} ve layout’ları ilk kullanımda derler (${inline("MountPages")} ısınması yok), sonra parse edilmiş ağacı yeniden kullanır.`,
              `${strong("SSG")}: derleme sırasında statik HTML.`,
              `${strong("ISR")}: önbellek + arka planda yeniden doğrulama.`,
              `${strong("HTMX / islands")}: kısmi yanıtlar ve Vite ile hydrate adacıklar.`,
            ]
          : [
              `${strong("SSR")}: rendered on the server per request. ${inline("render.Engine")} compiles ${inline("page.html")} and layouts on first use (no ${inline("MountPages")} warmup), then reuses the parsed tree.`,
              `${strong("SSG")}: static HTML at build time.`,
              `${strong("ISR")}: cache with background revalidation.`,
              `${strong("HTMX / islands")}: partials and Vite-hydrated islands.`,
            ],
      ) +
      p(
        l === "tr"
          ? `Paylaşılan partials her dosya için Clone edilir; böylece ${inline("{{define}}")} / ${inline("{{block}}")} adları çarpışmaz. Disk düzenlemeleri ${inline("Reload")} sonrası görünür (${inline("irmik dev")} zaten yeniler; ${inline("SetFuncs")} / ${inline("SetIslandFunc")} da önbelleği düşürür). Parse ve eksik-dosya hataları test edilir; başarısız ${inline("Reload")} son iyi partials’ı korur.`
          : `Shared partials are Clone'd per file so ${inline("{{define}}")} / ${inline("{{block}}")} names cannot collide. Disk edits are visible after ${inline("Reload")} (${inline("irmik dev")} already reloads; ${inline("SetFuncs")} / ${inline("SetIslandFunc")} also drop the cache). Parse and missing-file failures are tested; a failed ${inline("Reload")} keeps the last good partials.`,
      ) +
      p(
        l === "tr"
          ? `ISR arka plan revalidate, istekle aynı loader yolunu çalıştırır: yol, sorgu, başlıklar ve params ayrılmış bir ${inline("gin.Context")} üzerine klonlanır. Kullanıcıya özel ISR desteklenmez. Loader’lar canlı ${inline("ResponseWriter")}’a veya oturum/auth anahtarlarına bağımlı olmamalı; eksik anahtarlar anonim sayılır.`
          : `ISR background revalidate runs the same loader path as the request: path, query, headers, and params are cloned onto a detached ${inline("gin.Context")}. Per-user ISR is unsupported. Loaders must not depend on the live ${inline("ResponseWriter")} or on session/auth keys; missing keys are treated as anonymous.`,
      ) +
      codeBlock(
        `# app/dashboard/_meta.yaml
mode: isr
revalidate: 60s`,
        "app/dashboard/_meta.yaml",
      ),
  },
  {
    id: "routing",
    title: { tr: "Dosya tabanlı yönlendirme", en: "File-based routing" },
    body: (l) =>
      p(
        l === "tr"
          ? `${inline("app/")} altındaki dosyalar URL’lere eşlenir. Dinamik parçalar için köşeli parantez kullanılır.`
          : `Files under ${inline("app/")} map to URLs. Use brackets for dynamic segments.`,
      ) +
      codeBlock(`app/
├── page.html              →  /
├── layout.html
├── about/
│   └── page.html          →  /about
└── blog/
    ├── page.html          →  /blog
    └── [slug]/
        └── page.html      →  /blog/:slug`),
  },
  {
    id: "security",
    title: { tr: "Güvenlik", en: "Security" },
    body: (l) =>
      p(
        l === "tr"
          ? "Güvenlik varsayılan olarak açıktır. Üretim uygulamaları boş, bilinen demo ve 32 karakterden kısa JWT sırlarını dinlemeden önce reddeder."
          : "Security is on by default. Production apps reject empty, known demo, and shorter-than-32-character JWT secrets before they listen.",
      ) +
      ul(
        l === "tr"
          ? [
              `JWT erişim jetonları bir ${inline("jti")} içerir; bu bir erişim-jetonu denylist’i değildir.`,
              `${inline("RefreshStore")} ile yenileme/iptal. Varsayılan ${inline("MemoryRefreshStore")} süreç-yerel TTL/GC’dir; kopyalar arası paylaşılmaz. Redis RefreshStore yok. Bellek içi rotasyonu üretim JWT’si sanmayın.`,
              'WebSocket, CORS, proxy ve upload varsayılanları "fail-closed" çalışır.',
              `${inline("MiddlewareJWT")} geçersiz bir jetonu yetkisiz sayar.`,
              `Router 500 yanıtı genel ${inline("internal server error")} gövdesidir; ayrıntılar istek kimliğiyle loglanır.`,
              `${inline("Context.MustUser")} kullanıcı yoksa panic eder. 401 için ${inline("auth.RequireAuth")} kullanın; anonim istekte ${inline("User()")}.`,
              `${inline("EnableSecureHeaders")} ${inline("New")}’ın başlık yapılandırmasının yerine geçer; ikinci middleware yığmaz. ${inline("Skip")} varsayılanları gerçekten düşürür.`,
            ]
          : [
              `JWT access tokens include a ${inline("jti")}; it is not an access-token denylist.`,
              `Refresh/revoke uses a ${inline("RefreshStore")}. Default ${inline("MemoryRefreshStore")} is process-local TTL/GC, not shared across replicas. There is no Redis RefreshStore. Do not treat in-memory rotation as production JWT.`,
              "WebSocket, CORS, proxy and upload defaults fail closed.",
              `${inline("MiddlewareJWT")} treats a present invalid token as unauthorized.`,
              `Router 500s return a generic ${inline("internal server error")} body; details are logged with request id.`,
              `${inline("Context.MustUser")} panics if no user is present. Use ${inline("auth.RequireAuth")} for 401; use ${inline("User()")} when the request may be anonymous.`,
              `${inline("EnableSecureHeaders")} replaces the header config mounted in ${inline("New")}; it does not stack a second middleware. ${inline("Skip")} actually drops defaults.`,
            ],
      ) +
      callout(
        l === "tr"
          ? 'Güvensiz bir davranışa gerçekten ihtiyacınız varsa, onu açık bir "unsafe" seçeneğiyle etkinleştirmeniz gerekir.'
          : 'If you truly need an unsafe behaviour, you must enable it with an explicit "unsafe" option.',
        "warn",
      ) +
      codeBlock(
        `app.EnableSecureHeaders(middleware.SecureHeadersConfig{
    FrameAncestors:   "'none'",
    FrameOptionsSkip: true, // drops New's X-Frame-Options DENY
})`,
        "main.go",
      ),
  },
  {
    id: "realtime",
    title: { tr: "Gerçek zamanlı", en: "Realtime" },
    body: (l) =>
      p(
        l === "tr"
          ? `Gerçek zamanlı özellikler opt-in paketlerdir: ${inline("irmik/sse")} ve ${inline("irmik/ws")}. ${inline("irmik.New")} bunları otomatik monte etmez.`
          : `Realtime is opt-in: ${inline("irmik/sse")} and ${inline("irmik/ws")}. ${inline("irmik.New")} does not auto-mount them.`,
      ) +
      p(
        l === "tr"
          ? `${inline("http.Server.WriteTimeout")} varsayılanı ~30s. SSE, bağlantının yazma deadline’ını temizler; bu süre açık akışı kesmemeli. ${inline("IdleTimeout")} varsayılanı 60s (keep-alive; aktif SSE yazımını sınırlamaz).`
          : `Default ${inline("http.Server.WriteTimeout")} is ~30s. SSE clears the per-connection write deadline so that timeout should not kill an open stream. ${inline("IdleTimeout")} defaults to 60s (keep-alive; it does not bound an active SSE write).`,
      ) +
      p(
        l === "tr"
          ? `${inline("ws.Hub.ServeHTTP")} döngüyü tembel başlatır (${inline("Start")} / ${inline("Run")}). Unutulan ${inline("Start()")} HTTP goroutine’ini kilitlemez. ${inline("Start()")} hâlâ geçerlidir.`
          : `${inline("ws.Hub.ServeHTTP")} lazy-starts the event loop (${inline("Start")} / ${inline("Run")}). A forgotten ${inline("Start()")} does not deadlock the HTTP goroutine. ${inline("Start()")} is still valid.`,
      ) +
      codeBlock(`app.Engine.GET("/events", sse.Handler(sse.Options{
    Heartbeat: 15 * time.Second,
}, func(s *sse.Stream) error {
    return s.Event("hello", gin.H{"ok": true})
}))

hub := ws.NewHub(opts)
app.Engine.GET("/ws/chat", hub.ServeHTTP) // starts the loop if Start was skipped`),
  },
  {
    id: "cli",
    title: { tr: "CLI", en: "CLI" },
    body: (l) =>
      p(
        l === "tr"
          ? "irmik CLI proje iskeleti, geliştirme sunucusu ve tanılama sağlar."
          : "The irmik CLI provides project scaffolding, a dev server and diagnostics.",
      ) +
      codeBlock(
        `irmik new my-app     # ${l === "tr" ? "v0.2.0 pin; kardeş replace yok" : "pins v0.2.0; no sibling replace"}
irmik dev            # ${l === "tr" ? "sıcak yeniden yükleme" : "hot reload"}
irmik routes         # ${l === "tr" ? "tüm rotaları listele" : "list every route"}
irmik build          # ${l === "tr" ? "üretim ikilisi / SSG" : "production binary / SSG"}`,
        "terminal",
      ),
  },
  {
    id: "ecosystem",
    title: { tr: "Opt-in katalog", en: "Opt-in catalog" },
    body: (l) =>
      p(
        l === "tr"
          ? `İhtiyaç duydukça import edin. Katalog ${strong("dondurulmuş")}: ince sarmalayıcılar yeni ürün gibi sunulmaz. Yeni gormx özellikleri yok.`
          : `Import what you need. The catalog is ${strong("frozen")}: thin wrappers are not advertised as new product. No new gormx features.`,
      ) +
      p(
        l === "tr"
          ? `Çekirdek ${inline("go get github.com/boracomet/go-irmik")} AWS, GORM, OTel SDK, gRPC ve asynq ${strong("indirmez")}. Katalog ağırlıkları iç içe modüllerdir; import yolları aynı. İç içe yolu ${inline("go get")} edin ve pinleyin, örn. ${inline("github.com/boracomet/go-irmik/irmik/db/gormx@v0.2.0")}. SQL sürücüleri / Redis / migrate kök modülle gelir; yalnızca import edilirse linklenir. Küçük ${inline("otel/trace")} ve ${inline("otelhttp")} golang-migrate üzerinden kökte indirect görünebilir — bu OTel SDK değildir.`
          : `Core ${inline("go get github.com/boracomet/go-irmik")} does ${strong("not")} download AWS, GORM, the OTel SDK, gRPC, or asynq. Catalog heavies are nested modules with unchanged import paths. ${inline("go get")} the nested path and pin, e.g. ${inline("github.com/boracomet/go-irmik/irmik/db/gormx@v0.2.0")}. SQL drivers / Redis / migrate still come with the root module; they are linked only if imported. Tiny ${inline("otel/trace")} and ${inline("otelhttp")} may appear as indirect root deps via golang-migrate — that is not the OTel SDK.`,
      ) +
      catalogGrid([
        ["irmik/auth", l === "tr" ? "JWT / oturum yardımcıları (OAuth istemcisi değil)" : "JWT / session helpers (not an OAuth client)"],
        ["irmik/rbac", l === "tr" ? "Rol tabanlı erişim" : "Role-based access"],
        ["irmik/paginate", l === "tr" ? "Sayfalama yardımcıları" : "Pagination helpers"],
        ["irmik/sse · ws", "SSE & WebSocket"],
        ["irmik/cache", l === "tr" ? "Önbellek; cache.New bilinmeyen sürücüde hata verir" : "Cache; cache.New errors on unknown drivers"],
        ["irmik/openapi", l === "tr" ? "Deneysel OpenAPI (Swagger UI CDN)" : "Experimental OpenAPI (Swagger UI via CDN)"],
        ["irmik/db", l === "tr" ? "SQL sürücüleri kökte; import ile link" : "SQL drivers in root; link if imported"],
        ["irmik/db/gormx", l === "tr" ? "İç içe modül; @v0.2.0 pin (yeni API yok)" : "Nested module; pin @v0.2.0 (no new APIs)"],
        ["s3x · otelx · grpcx · asynqx", l === "tr" ? "İç içe modüller; kök go get bunları indirmez" : "Nested modules; root go get does not download them"],
        ["irmik/admin · htmx", l === "tr" ? "Admin UI yardımcıları" : "Admin UI helpers"],
      ]),
  },
  {
    id: "status",
    title: { tr: "Durum", en: "Status" },
    body: (l) =>
      p(
        l === "tr"
          ? `Güncel etiket ${inline("v0.2.0")} (2026-08-27). Katalog dondurulmuş. CI, ${inline("main")} üzerinde yarış (race) testleri, linting ve güvenlik açığı taramaları çalıştırır. API 1.0'a kadar değişebilir.`
          : `Current tag is ${inline("v0.2.0")} (2026-08-27). The catalog is frozen. CI runs race tests, linting and vulnerability checks on ${inline("main")}. The API may change until 1.0.`,
      ),
  },
  {
    id: "contributing",
    title: { tr: "Katkıda bulunma", en: "Contributing" },
    body: (l) =>
      p(
        l === "tr"
          ? `Katkılar memnuniyetle karşılanır. Bir konu açın veya PR gönderin; testleri ${inline("go test -race ./...")} ile çalıştırın ve linter'ı geçtiğinizden emin olun.`
          : `Contributions are welcome. Open an issue or send a PR; run tests with ${inline("go test -race ./...")} and make sure the linter passes.`,
      ),
  },
  {
    id: "license",
    title: { tr: "Lisans", en: "License" },
    body: (l) =>
      p(
        l === "tr"
          ? "MIT Lisansı altında dağıtılır. © 2026 Go-İrmik katkıcıları."
          : "Distributed under the MIT License. © 2026 the Go-Irmik contributors.",
      ),
  },
];

/* ------------------------------------------------------------------ */
/* i18n paint                                                          */
/* ------------------------------------------------------------------ */

function applyI18n() {
  document.documentElement.lang = lang;
  document.title = copy[lang].pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = lookup(el.dataset.i18n);
    if (val != null) el.textContent = val;
  });
  document.getElementById("header-search").placeholder = copy[lang].search;

  document.getElementById("hero-title-lead").textContent = copy[lang].hero.title;
  document.getElementById("hero-title-accent").textContent = copy[lang].hero.titleAccent;
  document.getElementById("hero-badge-text").textContent = copy[lang].hero.badge.replace("{v}", version);
  const mascot = document.getElementById("hero-mascot-img");
  if (mascot) mascot.alt = `${copy[lang].brand} mascot`;
  const docsMascot = document.querySelector(".docs-banner-img");
  if (docsMascot) docsMascot.alt = lang === "tr" ? "İrmik maskot" : "Irmik mascot";

  const starsEl = document.getElementById("stat-stars");
  starsEl.textContent = stars !== null ? formatStars(stars) : copy[lang].stats[2].k;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  paintFeatures();
  renderCode();
  paintDocs();
  paintCookieBanner();
}

const NAV_DOCS = {
  docs: "overview",
  guide: "quick-start",
  api: "routing",
};

const API_SECTIONS = new Set(["routing", "rendering", "cli"]);

function navKeyForSection(id) {
  if (id === "quick-start") return "guide";
  if (API_SECTIONS.has(id)) return "api";
  return "docs";
}

function paintNavActive() {
  const activeKey =
    view === "home" ? "blog" : view === "docs" ? navKeyForSection(docsActive) : null;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.nav === activeKey);
  });
}

/* ------------------------------------------------------------------ */
/* Theme / view                                                        */
/* ------------------------------------------------------------------ */

function setDark(next, persist) {
  dark = next;
  document.documentElement.classList.toggle("dark", dark);
  const sun = document.querySelector(".icon-sun");
  const moon = document.querySelector(".icon-moon");
  if (sun) sun.classList.toggle("is-hidden", !dark);
  if (moon) moon.classList.toggle("is-hidden", dark);
  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }
}

function setLang(next) {
  lang = next === "tr" ? "tr" : "en";
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* ignore */
  }
  applyI18n();
}

/* ------------------------------------------------------------------ */
/* Cookie banner                                                       */
/* ------------------------------------------------------------------ */

function cookieConsentValue() {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch {
    return null;
  }
}

function paintCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  const c = copy[lang].cookie;
  banner.setAttribute("aria-label", c.aria);
  document.getElementById("cookie-title").textContent = c.title;
  document.getElementById("cookie-body").textContent = c.body;
  const accept = document.getElementById("cookie-accept");
  const decline = document.getElementById("cookie-decline");
  accept.textContent = c.accept;
  decline.textContent = c.decline;
  accept.setAttribute("aria-label", c.accept);
  decline.setAttribute("aria-label", c.decline);
}

function showCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  paintCookieBanner();
  banner.hidden = false;
  banner.classList.remove("is-hidden");
}

function hideCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  banner.classList.add("is-hidden");
  banner.hidden = true;
}

function setCookieConsent(value) {
  try {
    localStorage.setItem(COOKIE_KEY, value);
  } catch {
    /* ignore */
  }
  hideCookieBanner();
}

function initCookieBanner() {
  const consent = cookieConsentValue();
  if (consent === "accepted" || consent === "declined") {
    hideCookieBanner();
    return;
  }
  showCookieBanner();
  document.getElementById("cookie-accept").addEventListener("click", () => setCookieConsent("accepted"));
  document.getElementById("cookie-decline").addEventListener("click", () => setCookieConsent("declined"));
}

function go(next) {
  view = next;
  document.getElementById("view-home").classList.toggle("is-hidden", view !== "home");
  document.getElementById("view-docs").classList.toggle("is-hidden", view !== "docs");
  paintNavActive();
  window.scrollTo({ top: 0 });
  if (view === "docs") {
    bindDocsSpy();
  } else {
    observeReveals();
  }
}

function goDocs(sectionId) {
  docsActive = sectionId || NAV_DOCS.docs;
  go("docs");
  paintDocsNav();
  requestAnimationFrame(() => {
    const el = document.getElementById(docsActive);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

/* ------------------------------------------------------------------ */
/* Code tabs                                                           */
/* ------------------------------------------------------------------ */

function renderCode() {
  document.getElementById("code-table").innerHTML = highlightHome(getSamples(lang)[tab]);
  document.querySelectorAll(".code-tab").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.tab === tab);
  });
}

function paintFeatures() {
  const root = document.getElementById("features-grid");
  if (!root) return;
  root.innerHTML = copy[lang].features
    .map(
      (f, i) =>
        `<article class="feature-card reveal" style="animation-delay: ${i * 40}ms">
          <div class="feature-blob"></div>
          <span class="feature-mark" aria-hidden="true"></span>
          <h3 class="feature-title">${f.t}</h3>
          <p class="feature-desc">${f.d}</p>
        </article>`,
    )
    .join("");
  if (view === "home") observeReveals();
}

/* ------------------------------------------------------------------ */
/* Reveal                                                              */
/* ------------------------------------------------------------------ */

const revealed = new WeakSet();
let revealIo = null;

function observeReveals() {
  if (!revealIo) {
    revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            revealed.add(e.target);
            e.target.classList.add("in");
            revealIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
  }
  document.querySelectorAll(".reveal").forEach((el) => {
    if (revealed.has(el)) {
      el.classList.add("in");
    } else {
      revealIo.observe(el);
    }
  });
}

/* ------------------------------------------------------------------ */
/* Docs paint / filter / scrollspy                                     */
/* ------------------------------------------------------------------ */

function filteredSections() {
  const locale = lang === "tr" ? "tr-TR" : "en-US";
  const q = docsQuery.trim().toLocaleLowerCase(locale);
  if (!q) return sections;
  return sections.filter((s) => {
    const searchable = `${s.title[lang]} ${s.body(lang).replace(/<[^>]*>/g, " ")}`;
    return searchable.toLocaleLowerCase(locale).includes(q);
  });
}

function paintDocsNav() {
  const nav = document.getElementById("docs-nav");
  nav.innerHTML = filteredSections()
    .map((s) => {
      const active = s.id === docsActive ? " is-active" : "";
      return `<a class="docs-nav-link${active}" href="#${s.id}" data-docs-id="${s.id}">${s.title[lang]}</a>`;
    })
    .join("");
  nav.querySelectorAll("[data-docs-id]").forEach((a) => {
    a.addEventListener("click", () => {
      docsActive = a.dataset.docsId;
      paintDocsNav();
    });
  });
}

function paintDocsContent() {
  const root = document.getElementById("docs-sections");
  const matches = filteredSections();
  root.innerHTML = matches.length
    ? matches
    .map(
      (s) =>
        `<section class="docs-section">
          <h2 id="${s.id}" class="docs-h2">
            <a href="#${s.id}">${s.title[lang]}<span class="pilcrow">¶</span></a>
          </h2>
          ${s.body(lang)}
        </section>`,
    )
    .join("")
    : `<p class="docs-p">${lang === "tr" ? "Eşleşen doküman bölümü bulunamadı." : "No matching documentation sections found."}</p>`;

  document.getElementById("docs-banner-sub").textContent =
    lang === "tr"
      ? "Gin meta-çatısı: dosya rotaları, render modları, isteğe bağlı admin yardımcıları."
      : "Gin meta-framework: file routes, render modes, opt-in admin helpers.";
  document.getElementById("docs-edit-prompt").textContent = lang === "tr" ? "Bir hata mı buldunuz?" : "Found a mistake?";
  document.getElementById("docs-edit-link").textContent = lang === "tr" ? "GitHub’da düzenle →" : "Edit on GitHub →";
  document.getElementById("docs-search").placeholder = lang === "tr" ? "Bölüme atla…" : "Jump to…";
}

function bindDocsSpy() {
  if (docsSpy) docsSpy.disconnect();
  docsSpy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) {
        docsActive = visible[0].target.id;
        paintDocsNav();
        paintNavActive();
      }
    },
    { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
  );
  sections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el) docsSpy.observe(el);
  });
}

function paintDocs() {
  paintDocsContent();
  paintDocsNav();
  if (view === "docs") bindDocsSpy();
}

function setDocsQuery(value) {
  docsQuery = value;
  document.getElementById("header-search").value = value;
  document.getElementById("docs-search").value = value;

  const matches = filteredSections();
  if (matches.length && !matches.some((section) => section.id === docsActive)) {
    docsActive = matches[0].id;
  }

  paintDocs();
}

/* ------------------------------------------------------------------ */
/* GitHub                                                              */
/* ------------------------------------------------------------------ */

function fetchGitHub() {
  const repo = "boracomet/go-irmik";
  fetch(`https://api.github.com/repos/${repo}/releases/latest`)
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => {
      if (d && d.tag_name) {
        version = d.tag_name;
        document.getElementById("hero-badge-text").textContent = copy[lang].hero.badge.replace("{v}", version);
      }
    })
    .catch(() => {});
  fetch(`https://api.github.com/repos/${repo}`)
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => {
      if (d && typeof d.stargazers_count === "number") {
        stars = d.stargazers_count;
        document.getElementById("stat-stars").textContent = formatStars(stars);
      }
    })
    .catch(() => {});
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

function boot() {
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.tagName === "A") e.preventDefault();
      go(el.dataset.go);
    });
  });

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = btn.dataset.nav;
      if (key === "examples") return;
      if (key === "blog") {
        e.preventDefault();
        go("home");
        const top = document.getElementById("top");
        if (top) top.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (NAV_DOCS[key]) {
        e.preventDefault();
        goDocs(NAV_DOCS[key]);
      }
    });
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
    });
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    setDark(!dark, true);
  });

  const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onSchemeChange = (e) => {
    if (!hasStoredTheme()) setDark(e.matches, false);
  };
  if (schemeQuery.addEventListener) {
    schemeQuery.addEventListener("change", onSchemeChange);
  } else if (schemeQuery.addListener) {
    schemeQuery.addListener(onSchemeChange);
  }

  document.querySelectorAll(".code-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      tab = btn.dataset.tab;
      renderCode();
    });
  });

  const headerSearch = document.getElementById("header-search");
  headerSearch.addEventListener("focus", () => {
    if (view !== "docs") go("docs");
  });
  headerSearch.addEventListener("input", (e) => {
    if (view !== "docs") go("docs");
    setDocsQuery(e.target.value);
  });

  document.getElementById("docs-search").addEventListener("input", (e) => {
    setDocsQuery(e.target.value);
  });

  window.addEventListener("scroll", () => {
    document.getElementById("site-header").classList.toggle("is-scrolled", window.scrollY > 12);
  });

  setDark(dark, false);
  paintNavActive();
  applyI18n();
  renderCode();
  observeReveals();
  fetchGitHub();
  initCookieBanner();
}

document.addEventListener("DOMContentLoaded", boot);
