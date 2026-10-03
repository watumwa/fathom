#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
cleanup(){ kill "$BACK_PID" 2>/dev/null || true; }
trap cleanup EXIT INT TERM
(
 cd backend
 source .venv/bin/activate
 python manage.py runserver 127.0.0.1:8000
) &
BACK_PID=$!
cd frontend
npm run dev
