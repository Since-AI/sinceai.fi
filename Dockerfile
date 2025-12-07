FROM node:20.14.0-bullseye-slim

WORKDIR /app

# Install dependencies (use legacy-peer-deps to match current project scripts)
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
