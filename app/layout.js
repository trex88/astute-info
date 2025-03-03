// import "./globals.css";

import Header from "./components/Header";

export const metadata = {
  title: "AstuteInfo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
