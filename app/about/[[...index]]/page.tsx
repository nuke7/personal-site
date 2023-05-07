import Link from "next/link";

export const metadata = {
  title: "About Page",
};

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 sm:px-24 my-4">
      <h1 className="text-3xl my-10">this is the about page</h1>
      <Link
        href="/"
        className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 hover:bg-blue-700"
      >
        Back to home
      </Link>
    </div>
  );
}
