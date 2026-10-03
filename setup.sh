#!/usr/bin/env bash
set -e
printf '\nSetting up Fathom Agribusinesses...\n\n'
cd "$(dirname "$0")"

if ! command -v python3 >/dev/null; then echo "Python 3 is required."; exit 1; fi
if ! command -v npm >/dev/null; then echo "Node.js/npm is required."; exit 1; fi

cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
[ -f .env ] || cp .env.example .env
python manage.py migrate
python manage.py seed_fathom
python manage.py shell -c "from django.contrib.auth import get_user_model; U=get_user_model(); U.objects.filter(username='admin').exists() or U.objects.create_superuser('admin','admin@localhost','ChangeMe123!')"
cd ../frontend
npm install
[ -f .env.local ] || cp .env.example .env.local
printf '\nSetup complete. Run ./run.sh from the project root.\n'
