import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../response";

export default function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SearchHeader */}
      <SearchHeader />

      {/* SearchResults */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useStaticData = false;
  const startIndex = context.query.start || 0;

  const data = useStaticData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((resp) => resp.json());

  return {
    props: {
      results: data,
    },
  };
}
