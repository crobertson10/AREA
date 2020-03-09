FROM node:latest

WORKDIR /web

COPY package*.json /web/
COPY yarn.lock /web/

RUN yarn install

COPY . /web/

EXPOSE 8081

CMD ["yarn", "start"]
