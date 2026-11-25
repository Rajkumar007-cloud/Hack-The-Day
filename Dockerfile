FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev --legacy-peer-deps

# Copy built frontend and backend
COPY dist ./dist
COPY index.mjs-prod.js ./
COPY sheetsService.mjs ./

# Runtime user
USER node

EXPOSE 4444

CMD ["node", "index.mjs-prod.js"]