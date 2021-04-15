import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-6">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <a>
            <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
              <ChevronLeftIcon className="h-5" />
              <p>Previous</p>
            </div>
          </a>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <a>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
