import Link from "next/link";

export default function NeoSOFT() {
  return (
    <div className="flex dark.bg-gray-900 flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg">
      <header className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
          Welcome to <span className="text-blue-600">NeoSOFT</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          This is the dummy <span className="font-medium">Next.js</span>{" "}
          application for NeoSOFT — built with TypeScript and Tailwind CSS.
        </p>
      </header>

      <section
        className="flex flex-col sm:flex-row gap-6 text-2xl sm:text-3xl font-semibold"
        aria-label="Product navigation links"
      >
        <Link
          href="/products1"
          className="text-blue-600 underline-offset-4 decoration-2  dark:text-white hover:underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
        >
          Check Product 1
        </Link>
        <Link
          href="/products2"
          className="text-blue-600 underline-offset-4 decoration-2  dark:text-white hover:underline hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
        >
          Check Product 2
        </Link>
      </section>
      <section
        className="gap-6 text-xl sm:text-3xl font-semibold pt-6"
        aria-label="Product navigation details"
      >
        <div className="pb-4 text-left  dark:text-gray-200"> Product 1 server side rendering</div>

        <div className="text-left  dark:text-gray-200">
          {" "}
          Product 2 server side rendering with a client side child component
        </div>
      </section>
    </div>
  );
}
