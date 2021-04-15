import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

export default function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SearchHeader */}
      <SearchHeader />

      {/* SearchResults */}
    </div>
  );
}
