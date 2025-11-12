"use client";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Products error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl text-red-500 mb-4">Error loading products</div>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <p className="text-gray-600 mb-4 ">{"Reload page"}</p>
    </div>
  );
}
