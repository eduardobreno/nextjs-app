FROM node:lts-alpine3.11
WORKDIR /app

ARG SERVER="NONE"
ENV DEPLOY_MODE=$SERVER

#COPY . .
COPY [^n]* ./
RUN chmod +x ./docker-entrypoint.sh
RUN yarn install

RUN if [ "${SERVER}" = "DEVELOP" ] ; then npm run build:dev ; fi
RUN if [ "${SERVER}" = "STAGING" ] ; then npm run build:staging ; fi
RUN if [ "${SERVER}" = "PRODUCTION" ] ; then npm run build:production ; fi

ENTRYPOINT ./docker-entrypoint.sh ${DEPLOY_MODE}
