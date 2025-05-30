import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-md">
              Creating innovative digital experiences with a focus on modern
              design and exceptional user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/lA12-coder/"
                className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lidet-admassu/"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="lidetadmassu217@outlook.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
