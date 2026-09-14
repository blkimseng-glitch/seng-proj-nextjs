"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetailCardComponent from "@/components/product/ProductDetailCardComponent";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((rawProduct) => {
        if (!rawProduct || !rawProduct.id) {
          setError(true);
          return;
        }

        // Format ทិន្នន័យ
        setProduct({
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
        });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="p-16 text-center text-lg font-medium">Loading product...</div>;
  }

  if (error || !product) {
    return <div className="p-16 text-center text-lg font-medium text-red-500">Product not found</div>;
  }

  return (
    <div>
      <ProductDetailCardComponent product={product} />
    </div>
  );
}