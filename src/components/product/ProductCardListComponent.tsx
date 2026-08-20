"use client";

import { useEffect, useState } from "react";
import ProductCardComponent from "./ProductCardComponent";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  reviews?: number;
  oldPrice?: number;
}

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Grid wraps ALL items here */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
