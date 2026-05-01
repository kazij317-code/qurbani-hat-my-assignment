import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";



export const metadata = {
  title: "Qurbani Hat",
  description: "Best Livestock Booking Platform in Bangladesh",
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gradient-to-br from-green-50 to-green-200">
        <Providers>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}