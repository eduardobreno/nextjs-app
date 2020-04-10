const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const nextConfig = {};

module.exports = (phase) => {
  if (phase !== PHASE_PRODUCTION_SERVER) {
    console.log(
      "\n=====> PHASE =",
      phase,
      "| process.env.SERVER = ",
      process.env.SERVER,
      "\n"
    );
  }
  const env = {
    APP: {
      BASE_URL: undefined,
      MODE: undefined,
    },
  };

  if ([PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD].includes(phase)) {
    switch (process.env.SERVER) {
      case "DEVELOP":
        env.APP.BASE_URL = "URL_DEV";
        env.APP.MODE = process.env.SERVER;
        break;
      case "STAGING":
        env.APP.BASE_URL = "URL_STAGING";
        env.APP.MODE = process.env.SERVER;
        break;
      case "PRODUCTION":
        env.APP.BASE_URL = "URL_PRODUCTION";
        env.APP.MODE = process.env.SERVER;
        break;

      default:
        throw new Error(
          "SERVER param not defined, please set SERVER to DEVELOP|STAGING|PRODUCTION"
        );
        break;
    }
    console.log(env.APP, "\n");
    if (env.APP.BASE_URL === undefined || env.APP.MODE === undefined) {
      throw new Error(
        "APP.BASE_URL AND APP.MODE are not defined, please check build configuration"
      );
    }
  }

  return {
    nextConfig,
    env,
  };
};
