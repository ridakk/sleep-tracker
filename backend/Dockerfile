# Stage for installing runtime dependencies
FROM node:20.8.1-alpine AS runtime-deps

COPY package*.json /build/
WORKDIR /build
RUN npm ci
COPY . .
RUN npm run build
RUN rm -rf node_modules
ENV NODE_ENV=production
RUN npm ci

# Stage for running application
FROM node:20.8.1-alpine AS runtime-env
WORKDIR /app

ENV NODE_ENV=production
ENV TZ=UTC

COPY --chown=node:node --from=runtime-deps /build/dist /app
COPY --chown=node:node --from=runtime-deps /build/node_modules /app/node_modules

USER node
EXPOSE 8000

CMD [ "node", "server.js" ]
