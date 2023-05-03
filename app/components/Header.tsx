import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="header sticky top-0 z-50">
      <div className="container">
        <div className="logo">
          <Link href="/">Personal Page</Link>
        </div>
        <div className="links flex justify-center">
          <Link href="/about">About</Link>
          <Link href="/code">Repositories</Link>
        </div>
      </div>
    </header>
  );
};
