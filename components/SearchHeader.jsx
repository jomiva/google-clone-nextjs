import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import SearchPageInput from "./SearchPageInput";

export default function SearchHeader() {
  const searchInputRef = useRef(null);

  return (
    <header className="sticky top-0 bg-white">
      {/* Top header */}
      <div className="flex w-full p-6 items-center">
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

        {/* Avatar */}

        <Avatar
          className="ml-auto"
          url="https://lh3.googleusercontent.com/ogw/ADGmqu9Twr2Q1roLQ7aEFDqsdOuUZDqxuTMybjrJ9UZd2w=s32-c-mo"
        />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}
