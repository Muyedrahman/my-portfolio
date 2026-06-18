import SmoothScroll from "@/Components/SmoothScroll"; // 'c' বড় হাতের হবে
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}