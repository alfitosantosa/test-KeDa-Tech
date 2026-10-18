import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invenstory — Know what you own. Know what you earn.",
  description:
    "Invenstory gives growing shops one clear view of the goods coming in, the goods going out, and the profit left at the end of the day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(inter.variable, poppins.variable)}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
