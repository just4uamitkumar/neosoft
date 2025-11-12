import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg">
      <h1 className="text-6xl font-bold mb-6 text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
