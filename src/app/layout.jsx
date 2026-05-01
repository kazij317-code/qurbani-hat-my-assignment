import "./globals.css";
import Navbar from "@/components/Navbar";

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
          
          {children}
       
        </Providers>
      </body>
    </html>
  );
}