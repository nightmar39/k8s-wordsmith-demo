FROM lambci/lambda:build-nodejs12.x as build-env

COPY /web /app/web

WORKDIR /app

FROM nginx:latest

WORKDIR /app

COPY --from=build-env /app/web /app/build

