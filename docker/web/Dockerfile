FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm@8.6.0

WORKDIR /app

COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY turbo.json ./
COPY tsconfig.json ./
COPY .npmrc ./

# Copy all package.json files
COPY apps/web/package.json ./apps/web/package.json
COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY packages/types/package.json ./packages/types/package.json

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "dev", "--filter", "web"] 