import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body  */}

      {/* Footer */}
    </div>
  );
}
