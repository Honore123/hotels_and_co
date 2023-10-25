import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/lib/Provider";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotels & Co",
  description: "Accommodation at fingertips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={nunito.className}>
          <Navbar />
          <div className="mt-20">{children}</div>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
