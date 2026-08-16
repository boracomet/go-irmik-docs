# Go-Irmik Documentation Site

Static documentation UI for [Go-Irmik](https://github.com/boracomet/go-irmik), served by an Irmik (Gin) app. The vanilla HTML/CSS/JS under `html/` is embedded into the binary.

## Run locally

```sh
go run .
```

Open [http://localhost:8080](http://localhost:8080).

Development mode (`irmik.yaml` / `IRMIK_ENV=development`) does not require a JWT secret.

## Run with Docker

Default `docker-compose.yml` only **exposes** port 8080 on the container network (Dokploy-safe). It does **not** bind host `8080`, so it will not fight with another process or proxy already using that port.

**Local access** (publish host port):

```sh
cp .env.example .env   # set IRMIK_JWT_SECRET (and optional SITE_URL)
cp docker-compose.override.example.yml docker-compose.override.yml
docker compose up --build -d
```

Or without an override file:

```sh
docker compose -f docker-compose.yml -f docker-compose.override.example.yml up --build -d
```

Open [http://localhost:8080](http://localhost:8080).

Compose sets `IRMIK_ENV=production`. **`IRMIK_JWT_SECRET` is required** outside development (Irmik rejects empty/demo secrets).
### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `IRMIK_JWT_SECRET` | Yes (production) | Long random secret; inject via Dokploy / `.env` |
| `IRMIK_ENV` | No | Defaults to `production` in the image |
| `IRMIK_HOST` / `IRMIK_PORT` | No | Defaults `0.0.0.0` / `8080` |
| `SITE_URL` or `PUBLIC_URL` | No | Public origin (e.g. `https://goirmik.org`). HTML defaults to absolute goirmik.org OG tags; when set, the server rewrites `og:url` / `og:image` / `twitter:image` for that domain |

`index.html` already includes absolute Open Graph URLs for `https://goirmik.org` (WhatsApp/Facebook need `https://...` image URLs). On Dokploy, still set `SITE_URL=https://goirmik.org` so rewrites match production if you fork or mirror the site elsewhere.

## Deploy on Dokploy

1. Create a **Docker Compose** (or Dockerfile) app pointing at this repo.
2. Set env: `IRMIK_JWT_SECRET` (secret), and `SITE_URL=https://goirmik.org` (recommended).
3. In the Dokploy UI, set the **container port to 8080**. Dokploy’s reverse proxy reaches the service on the Docker network — you do **not** need a host port publish (`ports:`). Host binds like `8080:8080` often fail with `port is already allocated`.
4. Attach your domain and deploy — image embeds `html/` (no source bind-mount). Healthcheck hits `http://127.0.0.1:8080/`.

## Layout

| Path | Role |
|------|------|
| `main.go` | Irmik app entry; embeds and serves `html/` |
| `html/` | Documentation UI (do not redesign) |
| `irmik.yaml` | App config (host/port, env) |
| `Dockerfile` | Multi-stage Go build → slim Alpine image |
| `docker-compose.yml` | Production compose (expose 8080; no host bind) |
| `docker-compose.override.example.yml` | Optional local `ports: 8080:8080` |
| `.env.example` | Required / optional env template |
