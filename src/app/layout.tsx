import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdminPanel | User Management System",
  description: "Secure enterprise-level user management and audit logging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}>
        {/* Providers should wrap everything to give Navbar and Children access to useSession */}
        <Providers>
          {/* We render the Navbar here. 
               Inside the Navbar component, we will check the path 
               to decide if we show the 'Public' version or the 'Admin' version.
            */}
          <Navbar />

          <div className="min-h-screen">
            {children}
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}