FROM node:20-alpine3.16

RUN apk add --no-cache bash \
&& npm i -g --ignore-scripts @nestjs/cli typescript ts-node

WORKDIR /tmp/app
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . /usr/src/app
RUN cp -a /tmp/app/node_modules /usr/src/app
COPY ./wait-for-it.sh /opt/wait-for-it.sh
COPY ./startup.ci.sh /opt/startup.ci.sh

RUN sed -i 's/\r//g' /opt/wait-for-it.sh \
&& sed -i 's/\r//g' /opt/startup.ci.sh

WORKDIR /usr/src/app
RUN cp env-example .env \
&& npm run build

CMD ["/opt/startup.ci.sh"]
