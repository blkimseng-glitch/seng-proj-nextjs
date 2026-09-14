import ProductDetailCardComponent from "@/components/product/ProductDetailCardComponent";
import React from "react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch ផ្ទាល់ទៅ API
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  const rawProduct = await res.json();

  if (!rawProduct || !rawProduct.id) {
    return <div className="p-8 text-center">Product not found</div>;
  }

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