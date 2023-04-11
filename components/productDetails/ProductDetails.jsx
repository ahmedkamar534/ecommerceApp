import Image from "next/image";
import React from "react";

export default function ProductDetails({ product }) {
  const { category, title, price, id, image, description } = product;
  const pr = price.toFixed(2);
  return (
    <div className="details text-center py-5">
      <Image src={image} alt={title} width="200" height="200" priority={true} />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>${pr}</p>
      <p>{description}</p>
    </div>
  );
}
