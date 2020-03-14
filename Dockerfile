FROM node:carbon

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start" ]