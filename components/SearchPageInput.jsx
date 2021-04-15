import React from "react";
import { XIcon } from "@heroicons/react/solid";

const SearchPageInput = React.forwardRef((props, ref) => {
  return (
    <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
      <input
        className="flex-grow w-full focus:outline-none"
        ref={ref}
        type="text"
      />
      <XIcon className="h-5" />
    </form>
  );
});

export default SearchPageInput;
