/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { ProfilePic } from "@/app/components/ProfilePic";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaSyncAlt } from "react-icons/fa";
import experience from "../../data/experience.json";
import languages from "../../data/languages.json";
import technical from "../../data/technical.json";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "About Page",
};

type progressBarType = {
  id: number;
  title: string;
  percentage: string;
};

type company = {
  id: number;
  name: string;
  role: string;
  description: string;
  from: string;
  to: string;
};

export default async function AboutPage() {
  const SocialLink = ({
    href,
    icon,
  }: {
    href: string;
    icon: React.ReactNode;
  }) => (
    <Link
      href={href}
      target="_blank"
      className="p-3 bg-blue-700/80 dark:bg-blue-600/30 rounded-full text-white hover:bg-blue-500 dark:hover:bg-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {icon}
    </Link>
  );

  const BioCard = ({ title, content }: { title: string; content: string }) => (
    <div className="bg-white/70 dark:bg-slate-700/70 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="dark:text-gray-200 font-bold text-xl mb-3">{title}</h3>
      <p className="dark:text-gray-300">{content}</p>
    </div>
  );

  const SkillsSection = ({
    technical,
    languages,
  }: {
    technical: progressBarType[];
    languages: progressBarType[];
  }) => (
    <section id="skills" className="mb-12">
      <h2 className="dark:text-gray-200 text-3xl mb-8 text-center font-bold">
        Technical Skills*
      </h2>
      <form action="/about#skills">
        <button type="submit" className="p-3 bg-blue-700/80 dark:bg-blue-600/30 rounded-full text-white hover:bg-blue-500 dark:hover:bg-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <FaSyncAlt size={20} />
        </button>
      </form>
      <span className="text-gray-500 mb-8 text-center italic text-sm">
        *randomly generated values
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {technical.map((tech: progressBarType) => {
          const randomPercentage = Math.ceil(Math.random() * 95) + "%";
          return (
            <div key={tech.id} className="mb-4">
              <div className="flex justify-between mb-1">
                <p className="dark:text-gray-200 font-medium">{tech.title}</p>
                <p className="dark:text-gray-300 text-sm">{randomPercentage}</p>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-600">
                <div
                  className="bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: randomPercentage }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="dark:text-gray-200 text-3xl mt-12 mb-8 text-center font-bold">
        Language Proficiency
      </h2>

      {languages.map((language: progressBarType) => (
        <div key={language.id} className="mb-6">
          <div className="flex justify-between mb-1">
            <p className="dark:text-gray-200 font-medium">{language.title}</p>
            <p className="dark:text-gray-300 text-sm">{language.percentage}</p>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-600">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 h-2.5 rounded-full"
              style={{ width: language.percentage }}
            ></div>
          </div>
        </div>
      ))}

      <p className="text-gray-500 italic text-sm mt-2">
        * Technical skill values are randomly generated for demonstration
        purposes
      </p>
    </section>
  );

  return (
    <div className="mx-auto px-4 sm:px-8 lg:px-24 max-w-7xl pb-10 bg-slate-200 dark:bg-slate-800">
      <h1 className="text-4xl dark:text-slate-200 mb-4 pt-6 text-center font-bold">
        About me
      </h1>
      <p className="dark:text-gray-200 mt-2 italic text-center text-lg max-w-2xl mx-auto">
        Frontend Developer with 4+ years of remote work experience focusing on
        UX and product consulting.
      </p>

      <div className="max-w-4xl mx-auto mt-8">
        <ProfilePic />

        <section className="flex justify-center mb-8 items-center gap-6">
          <SocialLink
            href="https://www.linkedin.com/in/martongombos/"
            icon={<FaLinkedinIn size={30} />}
          />
          <SocialLink
            href="https://github.com/nuke7"
            icon={<FaGithub size={30} />}
          />
          <SocialLink
            href="https://twitter.com/nuke7official"
            icon={<FaTwitter size={30} />}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <BioCard
            title="My favorite technology is:"
            content="JavaScript, Typescript, SASS and frontend frameworks because you can use them to create unique, functional and aesthetic user interfaces and great user experience."
          />
          <BioCard
            title="I like to work with people:"
            content="who are intelligent, patient and easy-going."
          />
          <BioCard
            title="Outside of work:"
            content="I spend time with active regeneration - boardgames, computer games, maybe even tabletop role playing games, ball games (tennis, squash and table tennis mostly). I also like to watch movies and series."
          />
        </section>

        <SkillsSection technical={technical} languages={languages} />
        <Link
        href="/"
        className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 mb-4 hover:bg-blue-700"
      >
        Back to home
      </Link>
      </div>
    </div>
  );
}
