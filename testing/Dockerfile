FROM nightmar39/k8s-wordsmith-demo:master as build-env

FROM nginx:latest

COPY --from=build-env static /static


