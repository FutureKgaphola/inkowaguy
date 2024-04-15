import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppNavbar } from "./components/Navbar";
import { FooterApp } from "./components/FooterApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iknowaguy",
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} !scroll-smooth`}>
        <AppNavbar/>
        {children}
        <FooterApp/>
        </body>
    </html>
  );
}
