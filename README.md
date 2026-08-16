# Go-Irmik Documentation Site

Static documentation UI for [Go-Irmik](https://github.com/boracomet/go-irmik), served by an Irmik (Gin) app. The vanilla HTML/CSS/JS under `html/` is embedded into the binary.

## Run locally

```sh
go run .
```

Open [http://localhost:8080](http://localhost:8080).

Development mode (`irmik.yaml` / `IRMIK_ENV=development`) does not require a JWT secret.

## Run with Docker

```sh
cp .env.example .env   # set IRMIK_JWT_SECRET (and optional SITE_URL)
docker compose up --build -d
```

Open [http://localhost:8080](http://localhost:8080).

Compose sets `IRMIK_ENV=production`. **`IRMIK_JWT_SECRET` is required** outside development (Irmik rejects empty/demo secrets).

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `IRMIK_JWT_SECRET` | Yes (production) | Long random secret; inject via Dokploy / `.env` |
| `IRMIK_ENV` | No | Defaults to `production` in the image |
| `IRMIK_HOST` / `IRMIK_PORT` | No | Defaults `0.0.0.0` / `8080` |
| `SITE_URL` or `PUBLIC_URL` | No | Public origin (e.g. `https://docs.example.com`) so `og:image` / `twitter:image` become absolute |

Social previews need an absolute image URL. Set `SITE_URL` (or `PUBLIC_URL`) to your public domain; the server rewrites `/assets/og.png` in the HTML head when serving `/`.

## Deploy on Dokploy

1. Create a **Docker Compose** (or Dockerfile) app pointing at this repo.
2. Set env: `IRMIK_JWT_SECRET` (secret), optionally `SITE_URL=https://your-domain`.
3. Map / proxy container port **8080**; attach your domain.
4. Deploy — image embeds `html/` (no source bind-mount). Healthcheck hits `http://127.0.0.1:8080/`.

## Layout

| Path | Role |
|------|------|
| `main.go` | Irmik app entry; embeds and serves `html/` |
| `html/` | Documentation UI (do not redesign) |
| `irmik.yaml` | App config (host/port, env) |
| `Dockerfile` | Multi-stage Go build → slim Alpine image |
| `docker-compose.yml` | Production compose (Dokploy-friendly) |
| `.env.example` | Required / optional env template |
