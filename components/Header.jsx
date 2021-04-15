import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      {/* Left  */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right  */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}

        {/* Avatar */}
        <Avatar />
      </div>
    </header>
  );
}
