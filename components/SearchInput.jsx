import React from "react";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

const SearchInput = React.forwardRef((props, ref) => {
  return (
    <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <input ref={ref} type="text" className="flex-grow focus:outline-none" />
      <MicrophoneIcon className="h-5 text-gray-500" />
    </div>
  );
});

export default SearchInput;
