FROM lambci/lambda:build-nodejs12.x as test-env

COPY /web /app/web

WORKDIR /app

FROM test-env as build-env

RUN npm run build -S

RUN npm prune --production -S

FROM nginx:latest

WORKDIR /app

COPY --from=build-env /app/web /app/build

