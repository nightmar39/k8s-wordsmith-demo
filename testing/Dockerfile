FROM lambci/lambda:build-nodejs12.x as build-env

FROM nginx:latest

COPY --from=build-env static /static


