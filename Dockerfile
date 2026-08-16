# Build stage
FROM golang:1.26-bookworm AS builder

WORKDIR /src

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/docs .

# Runtime stage
FROM alpine:3.20

RUN apk add --no-cache ca-certificates tzdata \
  && adduser -D -H -u 10001 appuser

WORKDIR /app

COPY --from=builder /out/docs /app/docs
COPY irmik.yaml /app/irmik.yaml

USER appuser

EXPOSE 8080

ENV IRMIK_ENV=production
ENV IRMIK_HOST=0.0.0.0
ENV IRMIK_PORT=8080

ENTRYPOINT ["/app/docs"]
