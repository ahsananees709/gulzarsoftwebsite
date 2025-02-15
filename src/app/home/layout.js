import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
