FROM lambci/lambda:build-nodejs12.x as test-env

COPY /web /app/web

WORKDIR /app

FROM test-env as build-env

FROM nginx:latest

WORKDIR /app

COPY --from=build-env /app/web /app/build

