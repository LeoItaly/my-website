import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Skill categories and items
const categories = [
  { id: 'all', name: 'All Skills' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'programming', name: 'Programming' },
  { id: 'web', name: 'Web Development' },
  { id: 'tools', name: 'Tools & Platforms' },
];

const skills = [
  { name: 'Machine Learning', level: 90, category: 'ai' },
  { name: 'Deep Learning', level: 85, category: 'ai' },
  { name: 'Computer Vision', level: 80, category: 'ai' },
  { name: 'Natural Language Processing', level: 75, category: 'ai' },
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'TensorFlow', level: 85, category: 'ai' },
  { name: 'PyTorch', level: 80, category: 'ai' },
  { name: 'Scikit-learn', level: 90, category: 'ai' },
  { name: 'JavaScript', level: 85, category: 'programming' },
  { name: 'TypeScript', level: 80, category: 'programming' },
  { name: 'React', level: 90, category: 'web' },
  { name: 'Node.js', level: 75, category: 'web' },
  { name: 'SQL', level: 80, category: 'programming' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'TailwindCSS', level: 90, category: 'web' },
  { name: 'Data Visualization', level: 85, category: 'ai' },
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white dark:bg-primary-700'
                  : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass-card p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;