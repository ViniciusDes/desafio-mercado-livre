import Head from "next/head";
import Main from "./main";

export default function Home() {
  return (
    <div className="container-main">
      <Head>
        <title>Mercado livre</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <Main />
    </div>
  );
}