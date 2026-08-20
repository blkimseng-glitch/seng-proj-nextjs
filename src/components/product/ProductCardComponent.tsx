"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  title: string;
  category: string;
  reviews?: number;
  price: number;
  image: string;
  description: string;
  oldPrice?: number;
  rating?: {
    rate: number;
    count: number;
  };
}

type ProductCategoryProps = {
  product?: Product;
};

const defaultProduct: Product = {
  id: 1,
  title: "Apple Watch S9",
  category: "Electronics",
  reviews: 105,
  price: 684,
  image:
    "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-1.webp",
  description: "Premium smartwatch built for everyday performance.",
  oldPrice: 799,
  rating: {
    rate: 4.8,
    count: 128,
  },
};

const ProductCardComponent = ({
  product = defaultProduct,
}: ProductCategoryProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="!p-0 gap-0 overflow-hidden border border-border bg-card rounded-2xl w-full">
      <div className="relative rounded-t-2xl h-56 overflow-hidden flex items-center justify-center">
        
        
        <Link href={`/products/${product.id}`} className="w-full h-full block cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>

        <Button
          variant="secondary"
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); 
            setIsWishlisted((prev) => !prev);
          }}
          className={cn(
            "absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all z-10 cursor-pointer",
            isWishlisted && "text-destructive"
          )}
        >
          <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
        </Button>
      </div>

      <CardContent className="p-5 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-normal text-muted-foreground">
            {product.category}
          </p>

          
          <Link href={`/products/${product.id}`}>
            <p className="text-lg font-medium text-foreground line-clamp-1 hover:underline cursor-pointer">
              {product.title}
            </p>
          </Link>

          <div className="flex items-baseline gap-2">
            <span className="text-lg font-medium text-foreground">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-lg font-medium text-muted-foreground line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>
        <Button variant="outline" className="w-full h-10 rounded-lg font-medium">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCardComponent;