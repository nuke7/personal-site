import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Personal Page</Link>
        </div>
        <div className="links flex justify-center">
          <Link href="/about">About</Link>
          <Link href="/code">Code</Link>
        </div>
      </div>
    </header>
  );
};
