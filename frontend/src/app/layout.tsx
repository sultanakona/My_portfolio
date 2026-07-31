import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium UI/UX Designer Portfolio",
  description: "Working globally, based in India. Specialized in UI/UX Design, Framer Development, and creating meaningful digital experiences.",
  keywords: ["UI/UX", "Product Designer", "Framer", "Web Development", "Portfolio"],
  openGraph: {
    title: "Premium UI/UX Designer Portfolio",
    description: "Specialized in UI/UX Design, Framer Development, and creating meaningful digital experiences.",
    url: "https://yourportfolio.com",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium UI/UX Designer Portfolio",
    description: "Specialized in UI/UX Design, Framer Development, and creating meaningful digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen relative overflow-x-hidden`}>
        
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
