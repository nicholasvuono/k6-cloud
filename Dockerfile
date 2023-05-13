FROM grafana/k6:latest
USER root

RUN apk update && apk add --no-cache chromium

ENV K6_BROWSER_ENABLED=true

USER 12345