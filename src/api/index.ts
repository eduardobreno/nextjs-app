declare var process: {
  env: {
    APP: any;
  };
};

export const fetchData = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(process.env.APP.BASE_URL);
    }, 1000);
  });
