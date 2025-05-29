import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Showcasing my journey in AI/ML and software development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Contact Me</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 dark:text-slate-400">
                contact@example.com
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                +1 (234) 567-890
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                San Francisco, California
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <motion.p
            className="text-slate-600 dark:text-slate-400 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Portfolio. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse-slow" />
            and React.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;