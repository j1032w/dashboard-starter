# Dockerfile.test
FROM node:20-alpine

WORKDIR /app


COPY ["package.json", "yarn.lock", ".yarn", "./"]

RUN yarn install --ignore-scripts


COPY apps ./
COPY . ./


CMD ["yarn", "test"]

