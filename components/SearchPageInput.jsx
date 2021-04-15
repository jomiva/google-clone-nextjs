import React from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

const SearchPageInput = React.forwardRef((props, ref) => {
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = ref.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex border border-gray-200 rounded-full shadow-lg flex-grow max-w-3xl items-center px-6 py-3 ml-5 mr-5">
      <input
        className="flex-grow w-full focus:outline-none"
        ref={ref}
        type="text"
      />
      <XIcon
        className="h-5 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
        onClick={() => {
          ref.current.value = "";
          ref.current.focus();
        }}
      />
      <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500  border-l-2 pl-4 border-gray-300" />
      <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
      <button hidden type="submit" onClick={search} />
    </form>
  );
});

export default SearchPageInput;
