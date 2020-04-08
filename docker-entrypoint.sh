#!/bin/sh
set -e
echo "DEPLOY_MODE = $1"

case "$1" in
NONE)
  echo "RUNNING DEV MODE..."
  exec yarn dev
  ;;
PRODUCTION | STAGING | DEVELOPMENT)
  echo "RUNNING STAGING OR PRODUCTION MODE OR DEVELOPMENT BUILDED..."
  exec yarn start
  ;;
*)
  exec $@
  ;;
esac
