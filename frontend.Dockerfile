FROM node:14.8.0-alpine as base

FROM base as build
RUN apk add --no-cache ca-certificates build-base gcc autoconf automake libtool zlib-dev libpng-dev nasm

WORKDIR /app
COPY frontend/package.json .
RUN yarn install

COPY frontend .
RUN yarn build

FROM base as exec
ENV NODE_ENV production
WORKDIR /app
COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=build /app .
EXPOSE 3000
CMD ["yarn", "start"]