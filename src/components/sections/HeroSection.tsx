import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, File } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300">
              AI/ML Specialist
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            John Doe
          </motion.h1>

          <motion.div
            className="max-w-2xl mx-auto mb-8 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap overflow-hidden border-r-4 border-primary-500 dark:border-primary-400 animate-typewriter pr-1 animate-blink">
              Exploring the frontiers of artificial intelligence
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Master's student in AI/ML with a passion for developing intelligent systems that solve real-world problems. Full-stack developer with experience in building scalable applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="flex space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Resume"
            >
              <File className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-8"
          >
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-300/30 to-secondary-300/30 dark:from-primary-900/30 dark:to-secondary-900/30 blur-3xl" />
    </section>
  );
};

export default HeroSection;