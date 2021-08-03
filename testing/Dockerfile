FROM lambci/lambda:build-nodejs12 as build-env

FROM nginx:latest

COPY --from=build-env static /static


