import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 border-b-2 border-white/20 sticky top-0 z-50 w-screen shadow-md">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-2 text-center">
          <Link
            href="/"
            className="text-center text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Personal Page
          </Link>
        </div>
        <nav className="links flex justify-center sm:gap-8 gap-4">
          <NavLink href="https://www.dropbox.com/scl/fi/5gu8htjejw7hhvj38aiwj/CV_Marton_Gombos.pdf?rlkey=xd0p8p880i02o8a9vanhlri9i&st=7v87u3u8&dl=0" target="_blank">
            CV
          </NavLink>
          <NavLink href="/about">
            About
          </NavLink>
          <NavLink href="/code">
            Repositories
          </NavLink>
          <DarkModeButton />
        </nav>
      </div>
    </header>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) => (
  <Link
    href={href}
    target={target}
    className="text-slate-200 border border-slate-200/60 rounded-md sm:px-4 px-2 flex items-center py-1 hover:bg-white/10 hover:text-white active:text-blue-300 active:bg-slate-700 transition-all duration-200"
  >
    {children}
  </Link>
);