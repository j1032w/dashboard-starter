# Dockerfile.lint
FROM node:20-alpine

WORKDIR /app


COPY ["package.json", "yarn.lock", ".yarn", "./"]

RUN yarn install


COPY /apps ./
COPY . ./


CMD ["yarn", "lint"]
