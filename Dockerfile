FROM grafana/k6:latest
USER USER 12345

RUN apk update && apk add --no-cache chromium

ENV K6_BROWSER_ENABLED=true