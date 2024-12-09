# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build Next.js application
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy Next.js static files
COPY --from=builder /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder /app/public /usr/share/nginx/html/public

# Copy standalone build
COPY --from=builder /app/.next/standalone /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]