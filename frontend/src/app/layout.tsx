import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sultana Parvin Kona | Backend Developer & AI Engineer",
  description: "Portfolio of Sultana Parvin Kona - Senior Backend Developer & AI Engineer specializing in Python, Django, REST APIs, and Scalable Backend Systems.",
  keywords: ["Sultana Parvin Kona", "Sultana Parvin", "Kona", "Backend Developer", "AI Engineer", "Django Developer", "Python Developer", "Portfolio"],
  openGraph: {
    title: "Sultana Parvin Kona | Backend Developer & AI Engineer",
    description: "Portfolio of Sultana Parvin Kona - Senior Backend Developer & AI Engineer specializing in Python, Django, REST APIs, and Scalable Backend Systems.",
    siteName: "Sultana Parvin Kona",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sultana Parvin Kona | Backend Developer & AI Engineer",
    description: "Portfolio of Sultana Parvin Kona - Senior Backend Developer & AI Engineer specializing in Python, Django, REST APIs, and Scalable Backend Systems.",
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
