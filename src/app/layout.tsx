import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event0",
  description: "Find events near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-950 text-white overflow-y-scroll`}
      >
        <div className="max-w-7xl mx-auto border-x border-white/10 bg-white/[2%]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
