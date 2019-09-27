FROM node:alpine

RUN apk --no-cache add ca-certificates
WORKDIR /usr/src/app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn run build

ENV NODE_ENV production
EXPOSE 3000
CMD ["yarn", "start"]
