#!/bin/bash
# Deploy script for Hack-The-Day
# Usage: ./deploy.sh [local|docker|pm2]

set -e

MODE=${1:-local}

echo "🚀 Deploying Hack-The-Day ($MODE mode)..."

# Check required files
if [ ! -f .env ]; then
    echo "❌ .env not found. Copy .env.example and fill in values:"
    echo "   cp .env.example .env"
    exit 1
fi

if [ ! -f sheets_creds.json ]; then
    echo "❌ sheets_creds.json not found. Copy sheets_creds.json.example and fill in values:"
    echo "   cp sheets_creds.json.example sheets_creds.json"
    exit 1
fi

# Build frontend
echo "📦 Building frontend..."
npm run build

case $MODE in
    local)
        echo "🔧 Starting locally with Node 20..."
        export FNM_PATH="/home/raj/.local/share/fnm"
        export PATH="$FNM_PATH:$PATH"
        eval "$(fnm env --shell bash)"
        fnm use 20
        node index.mjs-prod.js
        ;;
    docker)
        echo "🐳 Building and starting Docker..."
        docker compose up -d --build
        ;;
    pm2)
        echo "⚡ Starting with PM2..."
        pm2 start index.mjs-prod.js --name hack-the-day
        pm2 save
        ;;
    *)
        echo "Unknown mode: $MODE"
        echo "Usage: ./deploy.sh [local|docker|pm2]"
        exit 1
        ;;
esac