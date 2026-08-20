import ProductDetailCardComponent from "@/components/product/ProductDetailCardComponent";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string[] | string }>;
}) {
  const resolvedParams = await params;

  // Handle catch-all route array ([...id])
  const productId = Array.isArray(resolvedParams.id)
    ? resolvedParams.id[0]
    : resolvedParams.id;

  // 1. Fetch raw product
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  const rawProduct = await res.json();

  // 2. Transform FakeStore API data to match component expectations
  const formattedProduct = {
    id: rawProduct.id,
    title: rawProduct.title,
    description: rawProduct.description,
    brand: rawProduct.category,
    rating: rawProduct.rating?.rate ?? 0,
    reviewCount: rawProduct.rating?.count ?? 0,
    images: {
      main: rawProduct.image,
      details: [rawProduct.image, rawProduct.image],
    },
    sizes: [
      { name: "Standard", price: rawProduct.price, outOfStock: false },
    ],
    accordionInfo: [
      { title: "Description", content: rawProduct.description },
      { title: "Shipping Details", content: "Free standard delivery included." },
    ],
  };

  return (
    <div>
      <ProductDetailCardComponent product={formattedProduct} />
    </div>
  );
}