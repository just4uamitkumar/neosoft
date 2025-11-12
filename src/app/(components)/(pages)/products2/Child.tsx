"use client";
import { useEffect, useState } from "react";
import ProductItem from "../products1/productItem";
import { ProductType } from "../products1/types";
import Loading from "../products1/loading";

const Child: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {products.length === 0 ? (
        <div className="flex items-center justify-center min-h-screen">
          <h2>{"Products are not available"}</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
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
      )}
    </div>
  );
};

export default Child;
