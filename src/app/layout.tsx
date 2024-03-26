import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar/Navbar";

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
          <div className=" font-bold font-reddit_mono tracking-tighter leading-12 hidden md:flex md:flex-col">
            <h1 className="font-reddit_mono text-9xl text-[#FF7433]">Cacl</h1>
            <h1 className="flex gap-3 text-5xl">
              <span>Place</span>
              <span>Where</span>
            </h1>
            <h1 className="flex gap-3 items-center   text-3xl ">
              <span className="mt-2">You</span>
              <span className="mt-2">Can</span>
              <span className="text-[#FF7433] text-6xl">Calculate.</span>
            </h1>
            <h1>
              <span className="text-[#FF7433] text-7xl">Convert.</span>
            </h1>
            <div className="flex gap-4 text-xl">
              <span>Std.</span>
              <span>Scientific</span>
              <span>Volume</span>
              <span>...many more</span>
            </div>
          </div>
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
