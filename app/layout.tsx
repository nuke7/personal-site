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
      <body className="bg-slate-100 dark:bg-slate-800 h-max">
        <Header />
        {children}
      </body>
    </html>
  );
}

