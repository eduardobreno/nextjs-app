import react, { useEffect, useState } from "react";
import Head from "next/head";
import { fetchData } from "../api";

declare var process: {
  env: {
    APP: any;
  };
};

const Home = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const result = await fetchData();
      console.log(result);
      setUrl(result);
    };
    fetch();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Oi, estou rodando em {JSON.stringify(process.env.APP)}</h1>
        <h3>fetch: {url}</h3>
      </main>
    </div>
  );
};

export default Home;
