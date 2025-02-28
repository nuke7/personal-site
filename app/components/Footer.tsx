// Create new component: app/components/Footer.tsx
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Marton Gombos</p>
            <p className="text-sm text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <SocialIcon href="https://www.linkedin.com/in/martongombos/" icon={<FaLinkedinIn />} label="LinkedIn" />
            <SocialIcon href="https://github.com/nuke7" icon={<FaGithub />} label="GitHub" />
            <SocialIcon href="https://twitter.com/nuke7official" icon={<FaTwitter />} label="Twitter" />
          </div>
          
          <div className="text-sm text-gray-400">
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link 
    href={href} 
    target="_blank"
    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </Link>
);