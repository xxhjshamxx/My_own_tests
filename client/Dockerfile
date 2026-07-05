# ===============================
# Stage 1: Dependencies
# ===============================
FROM node:16-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# ===============================
# Stage 2: Builder
# ===============================
FROM node:16-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ===============================
# Stage 3: Runner (Production)
# ===============================
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY package*.json ./

USER appuser

EXPOSE 3000

CMD ["npm", "start"]