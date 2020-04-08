import react, { useEffect, useState } from "react";
import Head from "next/head";

declare var process: {
  env: {
    NODE_ENV: string;
    MODE: any;
  };
};

const Home = () => {
  const [url, setUrl] = useState("");
  // useEffect(() => {
  //   const fetch = async () => {
  //     const result = await fetchData();
  //     setUrl(result);
  //   };
  //   fetch();
  // }, []);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Oi, estou rodando em modo {process.env.MODE.isDev && "DEV"}{" "}
          {process.env.MODE.isProd && "PRODUCTION"}{" "}
          {process.env.MODE.isStaging && "Staging"}{" "}
        </h1>
        <h3>URL: {url}</h3>
      </main>
    </div>
  );
};

export default Home;
