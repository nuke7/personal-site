import Link from "next/link";

export const metadata = {
  title: "About Page",
};

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 sm:px-24 my-4">
      <h1 className="text-3xl dark:text-slate-200 my-10">this is the about page</h1>
      <Link
        href="/"
        className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 mb-4 hover:bg-blue-700"
      >
        Back to home
      </Link>
      <p className="dark:text-gray-200 mt-5">Javascript</p>
      <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-600 mt-2">
        <div
          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
          style={{ width: "55%" }}
        ></div>
      </div>
    </div>
  );
}
