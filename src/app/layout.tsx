import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukwuma Benjamin Izummuo",
  description: "This is my Full Stack Web Developer Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/IMG-20180122-WA0075-_1_.svg?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={cn(
          " bg-slate-50 dark:bg-slate-900 w-full text-slate-900 dark:text-slate-300 ",
          inter.className
        )}
      >
        <Toaster />
        <Navbar />
        <div className="max-w-7xl mx-auto px-2 py-10 h-full bg-slate-50 dark:bg-slate-900 w-full text-slate-900 dark:text-slate-300 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
