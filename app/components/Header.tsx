import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
export const Header = () => {
  return (
    <header className="header sticky top-0 z-50">
      <div className="w-11/12 flex flex-col sm:flex-row items-center justify-between">
        <div className="logo">
          <Link href="/">Personal Page</Link>
        </div>
        <div className="links flex justify-center">
          <Link href="/about">About</Link>
          <Link href="/code">Repositories</Link>
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};
