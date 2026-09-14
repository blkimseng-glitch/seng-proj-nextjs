import ProductCardListComponent from "@/components/product/ProductCardListComponent";
import ErrorHandleNoDataFound from "@/components/errorhandl";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

// static metadata for product page
export const metadata: Metadata = {
  title: 'Products',
  description: "This is product page which list down many products from the website.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title:'Products',
     description: 'This is product page which list down many products from the website.',
     images: ['A1_Thumbnail_project.png']
  }
};


export default function ProductPage() {
  return (
    <main>
      <ProductCardListComponent />
    </main>
  );
}