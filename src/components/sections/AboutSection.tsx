import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, GraduationCap, Book } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const items = [
    {
      icon: <Brain className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "AI/ML Researcher",
      description: "Specialized in deep learning, computer vision, and natural language processing with a focus on practical applications.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Full-Stack Developer",
      description: "Experienced in building responsive web applications with modern frameworks and best practices.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Academic Excellence",
      description: "Master's program in Artificial Intelligence with research publications in renowned conferences.",
    },
    {
      icon: <Book className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and techniques to stay at the forefront of AI advancements.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate about leveraging AI to solve complex problems and create innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">My Journey</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              I'm currently pursuing a Master's degree in Artificial Intelligence, with a focus on machine learning algorithms and their real-world applications. My academic journey has equipped me with a strong foundation in mathematics, statistics, and programming.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Prior to my graduate studies, I worked as a software developer for two years, where I developed a passion for creating efficient, scalable solutions. This experience has been invaluable in my AI research, allowing me to bridge the gap between theoretical concepts and practical implementation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">My Approach</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              I believe in the power of AI to transform industries and improve lives. My approach combines rigorous academic research with practical implementation, ensuring that my work not only advances the field but also delivers tangible benefits.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              I'm particularly interested in explainable AI, ensuring that complex models remain interpretable and trustworthy. This focus has led me to develop novel techniques for model visualization and explanation, making AI more accessible to non-technical stakeholders.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 rounded-full bg-primary-100 dark:bg-primary-900/50">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-gradient-radial from-accent-400/20 to-transparent dark:from-accent-900/20 blur-3xl" />
    </section>
  );
};

export default AboutSection;