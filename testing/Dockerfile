FROM lambci/lambda:build-nodejs12.x as build-env

COPY k8s-wordsmith-demo/web /app/web

WORKDIR /app

FROM nginx:latest

WORKDIR /app

COPY --from=build-env /app/build /app/build

