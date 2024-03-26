import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/landing/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calci: Calculation App",
  description: "Created By Vaidik Singh Nirwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`w-full font-reddit_mono  text-white min-h-screen flex justify-center gap-24 items-center `}>
          <Hero/>
          <div className="sm:w-[350px] w-full sm:rounded-lg shadow-2xl bg-black  min-h-screen sm:min-h-fit flex flex-col justify-between ">
            <div className="px-3 pt-1">
              <Navbar/>
            </div>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
