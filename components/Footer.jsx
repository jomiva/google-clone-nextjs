export default function Footer() {
  return (
    <footer className="grid w-full divide-y divide-gray-300 bg-gray-100 text-xs text-gray-500 mt-3">
      {/* First Grid */}
      <div className="px-8 py-3">
        <p>Venezuela</p>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 px-8 py-3">
        <div className="hidden sm:inline-flex justify-center space-x-8 whitespace-nowrap md:justify-start">
          <p className="link">About</p>
          <p className="link">Advertising</p>
          <p className="link">Businesss</p>
          <p className="link">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}
