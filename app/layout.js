import "./globals.css";
import NavBar from "./_navBar/NavBar";
import { Roboto } from "next/font/google";
import Footer from "./_components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "AstuteInfo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="grid">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
