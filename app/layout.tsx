import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastContainer from "@/components/ToastContainer";
import { ToastProvider } from "@/lib/toast-context";

export const metadata: Metadata = {
  title: "NewtonBotics Store - 3D Prints, Laser Engraving & Electronics",
  description: "Shop for high-quality 3D printed items, laser engraved products, and basic electronics from NewtonBotics Robotics Lab",
  keywords: "robotics, 3D printing, laser engraving, electronics, Arduino, robot parts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className="antialiased bg-black text-white min-h-screen flex flex-col w-full">
        <ToastProvider>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  );
}
