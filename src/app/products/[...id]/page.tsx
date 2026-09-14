import ProductDetailCardComponent from "@/components/product/ProductDetailCardComponent";
import React from "react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string[] | string }>;
}) {
  const resolvedParams = await params;

  // Handle catch-all route array ([...id])
  const productId = Array.isArray(resolvedParams.id)
    ? resolvedParams.id[0]
    : resolvedParams.id;

  // 1. បង្កើត API URL ដោយសុវត្ថិភាព (ការពារស្ទួន /products ឬបាត់ /products)
  const envUrl = process.env.NEXT_PUBLIC_FAKE_API || "https://fakestoreapi.com";
  const cleanBaseUrl = envUrl.replace(/\/products\/?$/, "").replace(/\/$/, "");
  const fetchUrl = `${cleanBaseUrl}/products/${productId}`;

  // 2. Fetch ជាមួយនឹង { cache: "no-store" } ដើម្បីកុំឱ្យជាប់ Cache 404 ចាស់
  const res = await fetch(fetchUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  const rawProduct = await res.json();

  if (!rawProduct || !rawProduct.id) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  // 3. Transform Data
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