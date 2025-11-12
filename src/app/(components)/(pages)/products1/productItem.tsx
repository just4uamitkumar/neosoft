"use client";
import Image from "next/image";
import StarRating from "./star";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductItemProps {
  image: string;
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({
  image,
  title,
  description,
  rating,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const viewMore = () => {
    console.log("View more clicked for:", title);
  };

  const addToCart = () => {
    console.log("Add to cart clicked for:", title);
  };

  return (
    <div
      className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900"
      aria-labelledby={`product-title-${title.replace(/\s+/g, "-")}`}
      aria-describedby={`product-desc-${title.replace(/\s+/g, "-")}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-60 mb-4 flex justify-center items-center bg-gray-50 rounded overflow-hidden"
        role="img"
        aria-label={`Product image for ${title}`}
      >
        {!imageLoaded && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
            aria-hidden="true"
          />
        )}
        <Image
          src={image}
          alt={`${title} - Product image`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          quality={85}
          aria-describedby={`image-loading-${title.replace(/\s+/g, "-")}`}
        />
      </motion.div>

      <h2
        className="text-lg font-semibold line-clamp-1 text-center py-1 dark:text-gray-200"
        tabIndex={0}
      >
        {title}
      </h2>
      <p
        id={`product-desc-${title.replace(/\s+/g, "-")}`}
        className="text-gray-600 text-sm line-clamp-3 py-1 dark:text-gray-200"
      >
        {description}
      </p>
      <div className="flex justify-between items-center py-3">
        <div
          className="flex flex-col"
          role="img"
          aria-label={`Rated ${rating.rate} out of 5 stars based on ${rating.count} reviews`}
        >
          <StarRating rate={rating.rate} />
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1d4ed8", // darker blue
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium min-w-[120px]"
            onClick={addToCart}
            aria-label={`Add ${title} to cart`}
            aria-describedby={`product-title-${title.replace(/\s+/g, "-")}`}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center mt-auto border-t pt-3">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "#16a34a", // darker green
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="w-full px-6 py-2 bg-green-600 text-white rounded-lg font-medium"
          onClick={viewMore}
          aria-label={`View more details about ${title}`}
          aria-describedby={`product-title-${title.replace(
            /\s+/g,
            "-"
          )} product-desc-${title.replace(/\s+/g, "-")}`}
        >
          View More
        </motion.button>
      </div>
    </div>
  );
};

export default ProductItem;
