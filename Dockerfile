FROM node:24-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Set working directory
WORKDIR /opt

# Enable corepack (yarn managed by corepack)
RUN corepack enable

# Copy root definitions
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ .yarn/

# Copy Strapi workspace package.json only (to optimize yarn focus)
COPY apps/strapi/package.json ./app/strapi/

# Install only strapi workspace deps
RUN yarn workspaces focus @react-strapi-monorepo-template/strapi

# Copy the full repo (only after deps are installed for cache optimization)
COPY . .

WORKDIR /opt/app/strapi

# Build Strapi
RUN yarn build

EXPOSE 1337

# Start Strapi in development mode (or change to start for production)
CMD ["yarn", "develop"]