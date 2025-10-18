import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "C5M",
  description: "Continent 5 Media Group (C5M) is a technology-driven ecosystem transforming how consumers and retailers connect. By integrating media, commerce, rewards, and entertainment, we leverage innovative platforms, creative content, and cutting-edge fintech solutions. Our mission is to Wow the World by creating unparalleled opportunities for engagement, growth, and innovation, empowering users and businesses to thrive across a connected digital landscape that spans all continents. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        <main className="pt-20 z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
