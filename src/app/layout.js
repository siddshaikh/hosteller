import { Mulish } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Provider";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "The Hosteller",
  description: "India's largest backpacker hostel chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className}antialiased`}>
        <Providers>
          <NavBar />
          <HeroSection />
          {children}
        </Providers>
      </body>
    </html>
  );
}
