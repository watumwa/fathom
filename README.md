# Fathom Agribusinesses Limited

Premium corporate website built as two independent applications:

- `frontend/` — Next.js + TypeScript
- `backend/` — Django + Django REST Framework

The project includes the supplied Fathom brand visuals, a responsive corporate frontend, editable services and insights, Django Admin, enquiry capture, WhatsApp/call actions, SEO metadata, and PostgreSQL-ready configuration.

## Quick start (Ubuntu/Linux/macOS)

Prerequisites: Python 3.11+ and Node.js 20+.

```bash
chmod +x setup.sh run.sh
./setup.sh
./run.sh
```

Then open:
- Website: http://localhost:3000
- Django API: http://127.0.0.1:8000/api/
- Django Admin: http://127.0.0.1:8000/admin/

The setup creates a local admin account for development:
- username: `admin`
- password: `ChangeMe123!`

Change this password immediately if the project is used beyond local development.

## Manual setup

### Backend
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py seed_fathom
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## Production

The backend defaults to SQLite locally so the project runs immediately. Set `DATABASE_URL` to PostgreSQL in production. Set `DEBUG=False`, a strong `SECRET_KEY`, correct `ALLOWED_HOSTS`, and `CORS_ALLOWED_ORIGINS`.

The frontend reads `NEXT_PUBLIC_API_URL`; point it to the deployed Django `/api` URL.

## Content management

Use Django Admin to manage services, articles, enquiries, and company contact/site settings. Stable layout and brand messaging remain in Next.js for performance and design consistency.

## Premium brand system refresh
The frontend now includes a Fathom-specific visual system derived from the supplied brand materials: forest/deep greens, coffee browns, warm cream, harvest-gold accents, editorial serif display typography, refined rounded components, image-led service cards, a responsive sticky navigation system, premium CTA/footer treatment, and dedicated mobile navigation. The styling is centralized in `frontend/app/globals.css` so the visual language remains consistent across all pages.
