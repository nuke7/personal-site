/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { ProfilePic } from "@/app/components/ProfilePic";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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

  return (
    <div className="mx-auto px-4 sm:px-24 max-w-7xl pb-5 bg-slate-200 dark:bg-slate-800">
      <h1 className="text-4xl dark:text-slate-200 mb-2 pt-4 text-center">About me</h1>
      <p className="dark:text-gray-200 mt-2 italic text-center">
        Frontend Developer with 4+ years of remote work experience focusing on UX and product consulting.
      </p>
      <ProfilePic />
      <section className="flex justify-center mb-5 items-center gap-10">
        <Link
          href="https://www.linkedin.com/in/martongombos/"
          target="_blank"
        >
          <FaLinkedinIn
            className="text-blue-700 dark:text-slate-200 mx-2 my-2 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            size={30}
          />
        </Link>
        <Link
          href="https://github.com/nuke7"
          target="_blank"
        >
          <FaGithub
            className="text-blue-700 dark:text-slate-200 mx-2 my-2 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            size={30}
          />
        </Link>
        <Link
          href="https://twitter.com/nuke7official"
          target="_blank"
        >
          <FaTwitter
            className="text-blue-700 dark:text-slate-200 mx-2 my-2 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
            size={30}
          />
        </Link>
      </section>
      <div id="docsbot-chat"></div>
      <Script
        id="docsbot-script"
        strategy="afterInteractive"
      >{`
        window.DocsBotAI=window.DocsBotAI||{};
        window.DocsBotAI.init = function(options) {
          const iframe = document.createElement('iframe');
          iframe.src = 'https://docsbot.ai/iframe/lEbh6kZfSt1WpahkZDjA/UlNRzRBYbLXCQ1jEuNKp';
          iframe.style.border = 'none';
          iframe.style.position = 'fixed';
          iframe.style.bottom = '20px';
          iframe.style.right = '20px';
          iframe.style.width = '300px';
          iframe.style.height = '400px';
          iframe.style.backgroundColor = 'transparent';
          
          const container = document.getElementById('docsbot-chat');
          if (container) {
            container.appendChild(iframe);
          }
        };

        // Initialize the widget
        window.DocsBotAI.init({
          id: 'lEbh6kZfSt1WpahkZDjA'
        });
      `}</Script>
      <section className="flex flex-col lg:grid lg:grid-cols-2 lg:mx-auto lg:max-w-[66%]">
        <p className="dark:text-gray-200 mt-5 font-bold lg:text-center">
          My favorite technology is:
        </p>
        <p className="dark:text-gray-200 mt-2 mb-10 lg:mt-5">
          JavaScript, Typescript, SASS and frontend frameworks because you can use them to
          create unique, functional and aesthetic user interfaces and great user
          experience.
        </p>
        <p className="dark:text-gray-200 mt-5 font-bold lg:text-center">
          I like to work with people:
        </p>
        <p className="dark:text-gray-200 mt-2 mb-10 lg:mt-5">
          who are intelligent, patient and easy-going.
        </p>
        <p className="dark:text-gray-200 mt-5 font-bold lg:text-center">
          Outside of work:
        </p>
        <p className="dark:text-gray-200 mt-2 mb-10 lg:mt-5">
          I spend time with active regeneration - boardgames, computer games, maybe even
          tabletop role playing games, ball games (tennis, squash and table tennis
          mostly). I also like to watch movies and series.
        </p>
      </section>

      <section id="skills">
        <div className="flex justify-center items-center">
          <form action="/about#skills">
            <button
              type="submit"
              className="bg-blue-500 dark:bg-blue-300 hover:bg-blue-400 dark:hover:bg-blue-200 text-white text-2xl font-bold py-2 px-4 rounded-full mt-10 mr-4"
            >
              <Image
                src="/images/refresh.svg"
                alt="refresh icon"
                width={33}
                height={33}
              />
            </button>
          </form>
          <h2 className="dark:text-gray-200 text-3xl mt-10 text-center">
            Progress Bars for Technical Skills 😜***
          </h2>
        </div>
        {technical.map((tech: progressBarType) => (
          <div key={tech.id}>
            <p className="dark:text-gray-200 mt-5">{tech.title}</p>
            <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-600 mt-2">
              <div
                className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                style={{ width: `${Math.ceil(Math.random() * 95)}%` }}
              ></div>
            </div>
          </div>
        ))}
        <p className="text-gray-400 italic text-xl font-semibold my-4">
          *** Randomly generated values
        </p>
      </section>

      <section>
        <h2 className="dark:text-gray-200 text-3xl mt-10 text-center">
          Spoken Languages...🫠
        </h2>
        {languages.map((languages: progressBarType) => (
          <div key={languages.id}>
            <p className="dark:text-gray-200 mt-5">{languages.title}</p>
            <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-600 mt-2">
              <div
                className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                style={{ width: languages.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="dark:text-gray-200 text-3xl mt-10 text-center">
          Latest work experiences
        </h2>
        {experience.map((company: company) => (
          <div key={company.id}>
            <p className="dark:text-gray-200 mt-5 text-xl font-bold">{company.name}</p>
            <p className="dark:text-gray-200 my-2">
              {company.from} - {company.to}
            </p>
            <p className="dark:text-gray-200 my-2 font-bold">{company.role}</p>
            <p className="dark:text-gray-200 mt-2 mb-10">{company.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2 className="dark:text-gray-200 text-3xl mt-10 text-center">Education</h2>
        <p className="dark:text-gray-200 mt-5 font-bold lg:text-center">
          CodeCool - Sep 2020 - Apr 2021
        </p>
        <p className="dark:text-gray-200 mt-2 mb-10 lg:text-center">
          Junior Frontend Developer - UI Engineer
        </p>
        <p className="dark:text-gray-200 mt-5 font-bold lg:text-center">
          BGE - Sep 2010 - Apr 2015
        </p>
        <p className="dark:text-gray-200 mt-2 mb-10 lg:text-center">
          Commerce and Marketing - B.Sc.
        </p>
        <p className="dark:text-gray-200 mt-5 font-bold lg:text-center">
          BME - Sep 2008 - May 2010
        </p>
        <p className="dark:text-gray-200 mt-2 mb-10 lg:text-center">
          Software Engineering - Unfinished
        </p>
      </section>
      <Link
        href="/"
        className="bg-gray-700 rounded-lg text-gray-200 font-bold p-3 pt-2 mt-2 mb-4 hover:bg-blue-700"
      >
        Back to home
      </Link>
    </div>
  );
}

