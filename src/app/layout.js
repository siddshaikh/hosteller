import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Provider";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Hosteller",
  description: "India's largest backpacker hostel chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
