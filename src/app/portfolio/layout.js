import Nav from "../components/nav";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../globals.css";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Nav />
        <ToastContainer/>
              {children}
      </body>
      
    </html>
  );
}
