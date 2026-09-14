import AudioFrqCard from "@/components/shadcn-space/card/card-07";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

// static metadata for product page
export const metadata: Metadata = {
  title:'Homepage',
  description: "Block Commerce is a decentralized e-commerce platform that allows users to buy and sell products using blockchain technology.",
keywords: 'Product, Clothes for men, Clothes for Women, E-commerce Website',

openGraph:{
  title:{
template: '%s | BlockCommerce',
default: 'BlockCommerce'
  } ,
  description:'Block Commerce is a decentralized e-commerce platform that allows users to buy and sell products using blockchain technology.',
  images:['public/Thumbnail_A1.png']
}
};

export default function Home() {
  return (
<AudioFrqCard/>

  );
}
