FROM mhart/alpine-node:8.11.4

WORKDIR /api

COPY package*.json /api/

RUN yarn install

COPY . /api/

EXPOSE 8081

CMD ["yarn", "start"]