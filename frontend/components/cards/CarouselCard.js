import React from "react";
import { formatCurrency } from "../../utils/number";

export default function CarouselCard({ product, index }) {
  return (
    <a
      className={
        index === 0 ? "relative row-span-2 col-span-2" : "relative row-span-1"
      }
      key={product.name}
      href={`/products/${product.id}`}
    >
      <span className="absolute top-0 left-0 p-1 bg-white font-extrabold">
        {product.name}
      </span>
      <img
        className="w-full h-full"
        src={product.image}
      />
      <span className="absolute bottom-0 left-0 p-1 bg-white font-extrabold">
        {formatCurrency(product.price, "£")}
      </span>
    </a>
  );
}
