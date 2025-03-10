import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Marton's Page",
  description: "Personal developer website",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className={`${nunito.className} bg-slate-100 dark:bg-slate-800 w-screen overflow-x-hidden transition-colors duration-300`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

