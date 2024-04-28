import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Buddy App",
  description: "An app for  interacting with books, perfect for a library or reading app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <body className={inter.className}>

        <NavBar/>
        {children}
        <Footer/>
    </body>

</html>
)
    ;
}
