const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const path = require("path");

const nextConfig = {};

module.exports = (phase) => {
  console.log("=====> PHASE", phase);
  console.log("=====> process.env.DEV", process.env.DEV);
  console.log("=====> process.env.STAGING", process.env.STAGING);
  console.log("=====> process.env.PRODUCTION", process.env.PRODUCTION);

  const isDev = phase === PHASE_DEVELOPMENT_SERVER || process.env.DEV === "YES";
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.PRODUCTION === "YES";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "YES";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    BASE_URL: (() => {
      if (isDev) return "URL_DEV";
      if (isProd) return "URL_PROD";
      if (isStaging) return "URL_STAGING";
      return "BASE_URL:not (isDev, isProd, isStaging)";
    })(),
    MODE: (() => {
      return { isDev, isProd, isStaging };
    })(),
  };

  return {
    nextConfig,
    env,
  };
};
