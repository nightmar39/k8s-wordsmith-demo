FROM lambci/lambda:build-nodejs12 as build-env

FROM hobsons/samcli

COPY --from=build-env static /static


