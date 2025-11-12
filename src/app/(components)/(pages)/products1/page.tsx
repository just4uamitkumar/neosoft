import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductType } from "./types";
import ProductItem from "./productItem";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "NeoSoft | Products",
  description: "NeoSoft | Products",
};

async function ProductsList() {
  try {
    const productsData = await fetch("https://fakestoreapi.com/products" , {
      cache: "no-store", // prevents prerender caching
    });

    // Check if the response is OK
    if (!productsData.ok) {
      return null;
    }

    const products: ProductType[] = await productsData.json();

    // Check if products array is empty
    if (!products || products.length === 0) {
      throw new Error("No products found");
    }

    return (
      <div>
        <div>
          <h1
            id="main-heading"
            className="text-3xl font-bold text-gray-900 mt-6 mb-2 text-center focus:outline-none dark:text-gray-200"
            tabIndex={0} // Make focusable for screen readers
          >
            Product List
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    // Re-throw the error to trigger error.tsx
    throw error;
  }
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsList />
    </Suspense>
  );
}
