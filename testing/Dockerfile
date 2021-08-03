FROM lambci/lambda:build-nodejs12.x as build-env

FROM nginx:latest

COPY --from=build-env /app/build /app/build

