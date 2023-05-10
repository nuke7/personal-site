import { Header } from "./components/Header";

import "./globals.css";

export const metadata = {
  title: "Personal Page",
  description: "Personal developer website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body id="main">
        <Header />
        {children}
      </body>
    </html>
  );
}

