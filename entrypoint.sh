#!/bin/sh
set -e

if [ -n "$SHARED_PUBLIC_DIR" ] && [ -d "$SHARED_PUBLIC_DIR" ]; then
  echo "[entrypoint] syncing /app/public -> $SHARED_PUBLIC_DIR"
  rm -rf "${SHARED_PUBLIC_DIR:?}/"* 2>/dev/null || true
  cp -a /app/public/. "$SHARED_PUBLIC_DIR"/ 2>/dev/null || true
  chmod -R a+rX "$SHARED_PUBLIC_DIR" 2>/dev/null || true
fi

exec "$@"