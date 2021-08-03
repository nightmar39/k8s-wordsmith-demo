FROM lambci/lambda:build-nodejs12.x as build-env

WORKDIR /app

COPY web /app/web

FROM nginx:latest

WORKDIR /app

COPY --from=build-env /app/build /app/build

