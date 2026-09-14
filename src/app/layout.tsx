import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/NavbarComponent";
import { FooterComponent } from "@/components/FooterComponent";
import AudioFrqCard from "@/components/shadcn-space/card/card-07";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import NetworkStatusProvider from "@/components/NetworkStatusProvider";
import StyledComponentsRegistry from "@/StyleComponentRegistry";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// static 
export const metadata: Metadata = {
  title:{
template: '%s | BlockCommerce',
default: 'BlockCommerce'
  } ,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <NavbarComponent />
          
        <StyledComponentsRegistry>
          <NetworkStatusProvider>
               {children}

          </NetworkStatusProvider>
       
        </StyledComponentsRegistry>
        <FooterComponent />
      </body>
    </html>
  );
}
