import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
export const Header = () => {
  return (
    <header className="bg-blue-800 p-4 border-b-4 border-white sticky top-0 z-50 w-screen">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between items-center">
        <div className="mb-2 text-center">
          <Link
            href="/"
            className="text-center text-4xl font-bold bg-gradient-to-r from-slate-200 via-blue-300 to-slate-400 bg-clip-text text-transparent"
          >
            Personal Page
          </Link>
        </div>
        <div className="links flex justify-center sm:gap-8 gap-4">
          <Link
            href="https://www.dropbox.com/scl/fi/5gu8htjejw7hhvj38aiwj/CV_Marton_Gombos.pdf?rlkey=xd0p8p880i02o8a9vanhlri9i&st=7v87u3u8&dl=0"
            target="_blank"
            className="text-slate-200 sm:border-2 sm:border-slate-200 rounded-md sm:px-4 px-1 flex items-center pb-1 hover:bg-slate-200 hover:text-slate-900 active:text-blue-300 active:bg-slate-700 transition-all duration-200"
          >
            CV
          </Link>
          <Link
            href="/about"
            className="text-slate-200 sm:border-2 sm:border-slate-200 rounded-md sm:px-4 px-1 flex items-center pb-1 hover:bg-slate-200 hover:text-slate-900 active:text-blue-300 active:bg-slate-700 transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="/code"
            className="text-slate-200 sm:border-2 sm:border-slate-200 rounded-md sm:px-4 px-1 flex items-center pb-1 hover:bg-slate-200 hover:text-slate-900 active:text-blue-300 active:bg-slate-700 transition-all duration-200"
          >
            Repositories
          </Link>
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};
