# Hack-The-Day — Deploy Ready

## Quick Start (Docker)

```bash
# 1. Configure
cp .env.example .env
cp sheets_creds.json.example sheets_creds.json
# Edit both files with real values

# 2. Deploy
docker compose up -d --build

# App: http://localhost:4444
```

## Manual (Local)

```bash
# 1. Configure
cp .env.example .env
cp sheets_creds.json.example sheets_creds.json
# Edit both files

# 2. Build
npm run build

# 3. Start (requires Node 20 + MongoDB running)
fnm use 20
node index.mjs-prod.js
```

## Required Configuration

### `.env`
| Variable | Description |
|----------|-------------|
| `mongodb_uri` | MongoDB connection string (e.g. `mongodb://localhost:27017`) |
| `mongodb_collection` | Database name (e.g. `hacktank`) |
| `sheetsId` | Google Sheets ID from URL |

### `sheets_creds.json`
Google Service Account JSON with **Sheets API** access.
1. Create project in [Google Cloud Console](https://console.cloud.google.com)
2. Enable **Google Sheets API**
3. Create **Service Account** → Download JSON
4. Share your Google Sheet with the service account email

## MongoDB Setup

**Local (Docker):**
```bash
docker run -d --name mongo -p 27017:27017 mongo:7
```

**Atlas (Cloud):**
Use connection string in `.env`:
```
mongodb_uri=mongodb+srv://user:pass@cluster.mongodb.net
```

## CORS Domain

Edit `index.mjs-prod.js:21`:
```js
origin: ["https://your-domain.com"],
```

## Production Checklist

- [ ] `.env` with production values
- [ ] `sheets_creds.json` with service account
- [ ] MongoDB with `qr-details` collection
- [ ] CORS domain updated
- [ ] HTTPS (use nginx/Caddy reverse proxy)
- [ ] Domain DNS pointing to server

## Files Structure

```
Hack-The-Day/
├── dist/                    # Built frontend (generated)
├── .env                     # Your config (create from .env.example)
├── sheets_creds.json        # Google Sheets creds (create from example)
├── index.mjs-prod.js        # Production server
├── sheetsService.mjs        # Sheets integration
├── Dockerfile               # Container build
├── docker-compose.yml       # Full stack (app + mongo)
├── deploy.sh                # Deploy helper
├── .env.example             # Template
├── sheets_creds.json.example # Template
└── .dockerignore
```