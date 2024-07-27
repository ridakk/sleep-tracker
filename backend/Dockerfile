# we need to use -alpine image for both stages as bcrypt modules throws segmentation fault
# if it is built and run with different node images

# Stage for installing runtime dependencies
FROM node:20.8.1-alpine AS runtime-deps
# bcrypt dependencies for alpine linux based images
# https://github.com/kelektiv/node.bcrypt.js/wiki/Installation-Instructions#alpine-linux-based-images
RUN apk --no-cache add --virtual builds-deps build-base
RUN apk --no-cache add --virtual .gyp python3 make g++
LABEL maintainer="kadirgoktas"
COPY package*.json /build/
WORKDIR /build
RUN npm ci

# Stage for running application
FROM node:20.8.1-alpine AS runtime-env
WORKDIR /app

COPY --chown=node:node --from=runtime-deps /build/node_modules /app/node_modules
COPY --chown=node:node . .

USER node
EXPOSE 8000

CMD ["node", "entrypoint.js"]
