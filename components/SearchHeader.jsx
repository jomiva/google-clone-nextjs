import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import SearchPageInput from "./SearchPageInput";

export default function SearchHeader() {
  const searchInputRef = useRef(null);

  return (
    <header>
      {/* Logo */}
      <Link href="/">
        <a>
          <Image
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
          />
        </a>
      </Link>

      {/* Search Input */}
      <SearchPageInput ref={searchInputRef} />
    </header>
  );
}
