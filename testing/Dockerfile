FROM lambci/lambda:build-nodejs12.x as test-env

COPY /web /app/web

FROM test-env as build-env

WORKDIR /app

RUN npm run build web -S

RUN npm prune --production -S

FROM nginx:latest

WORKDIR /app

COPY --from=build-env /app/web /app/build

