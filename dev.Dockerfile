FROM node:20-alpine3.20 as builder

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node


WORKDIR /app

# To use docker layer caching, we copy the package.json and install the dependencies first
COPY ["package.json", ".yarn", "./"]
RUN yarn install

# This Dockderfile is used for development, in the docker-compose.dev.yml file, volumes are mounted
# and start command is specified.
