FROM mhart/alpine-node:8.11.4

WORKDIR /web

COPY package*.json /web/

RUN yarn install

COPY . /web/

EXPOSE 8081

CMD ["yarn", "start"]
