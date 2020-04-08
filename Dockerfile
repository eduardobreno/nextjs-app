FROM node:lts-alpine3.11
WORKDIR /app

ARG BUILD_MODE="NONE"
ENV DEPLOY_MODE=$BUILD_MODE

#COPY . .
COPY [^n]* ./
RUN chmod +x ./docker-entrypoint.sh
RUN yarn install

RUN if [ "${BUILD_MODE}" = "DEVELOPMENT" ] ; then npm run build:dev ; fi
RUN if [ "${BUILD_MODE}" = "STAGING" ] ; then npm run build:staging ; fi
RUN if [ "${BUILD_MODE}" = "PRODUCTION" ] ; then npm run build:production ; fi

ENTRYPOINT ./docker-entrypoint.sh ${DEPLOY_MODE}
