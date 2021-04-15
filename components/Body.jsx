import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchInput from "./SearchInput";

export default function Body() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-28 flex-grow w-4/5">
      {/* Google Logo */}
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />

      {/* Search input */}
      <SearchInput ref={searchInputRef} />

      {/* Buttons */}
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={search} className="btn">
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
}
