# ── Stage 1: dependencies ─────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

# ── Stage 2: dev (hot reload via astro dev) ───────────────────
FROM node:20-alpine AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ── Stage 3: build ────────────────────────────────────────────
FROM deps AS builder
COPY . .
RUN npm run build

# ── Stage 4: prod (serve pre-built static output) ─────────────
FROM node:20-alpine AS prod
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 4321
CMD ["serve", "-s", "dist", "-l", "4321"]
