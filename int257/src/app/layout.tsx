
import "./globals.css";
import type { ReactNode } from "react";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
    >
      <body>
         {/* <Navbar/> */}
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
