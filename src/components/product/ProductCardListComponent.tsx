

"use client";

import { useEffect, useState } from "react";
import ErrorHandleNoDataFound from "@/components/errorhandl";
import ProductCardComponent from "./ProductCardComponent";

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  if (!products || products.length === 0) {
    return <ErrorHandleNoDataFound />;
  }

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
