import Link from "next/link";

export const metadata = {
  title: "About Page",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl">this is the about page</h1>
      <Link
        href="/"
        className="text-xl active:text-sky-400 hover:bg-sky-700"
      >
        Back to home
      </Link>
    </>
  );
}
