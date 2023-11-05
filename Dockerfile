# Base image
FROM node:alpine

RUN export npm_config_cache=./cache
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]