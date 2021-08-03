FROM nightmar39/k8s-wordsmith-demo as build-env

FROM nginx:latest

COPY --from=build-env static /static


