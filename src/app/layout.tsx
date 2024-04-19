import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";
import { ToastContainer } from "./nextoast";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";
import Loader from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JAYX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
      <Loader/>
        <Header/>
        {children}
        <Footer/>
        <ToastContainer/>
        <ThemeSwitch/>
      </body>
    </html>
  );
}
