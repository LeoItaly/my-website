import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Target, Code, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: GraduationCap, label: 'Years in AI/ML', value: '3+', color: 'text-purple-400' },
    { icon: Code, label: 'Projects Completed', value: '25+', color: 'text-blue-400' },
    { icon: Award, label: 'Certifications', value: '8+', color: 'text-green-400' },
    { icon: BookOpen, label: 'Research Papers', value: '5+', color: 'text-pink-400' },
  ];

  const journey = [
    {
      year: '2023-Present',
      title: 'Master\'s in AI/ML',
      description: 'Advanced studies in machine learning, deep learning, and artificial intelligence.',
      icon: GraduationCap,
      color: 'from-purple-500 to-blue-500'
    },
    {
      year: '2022-2023',
      title: 'AI Research Intern',
      description: 'Contributed to cutting-edge research in neural networks and computer vision.',
      icon: Target,
      color: 'from-blue-500 to-green-500'
    },
    {
      year: '2021-2022',
      title: 'Full-Stack Developer',
      description: 'Built scalable web applications with modern technologies and frameworks.',
      icon: Code,
      color: 'from-green-500 to-purple-500'
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              About Me
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
          >
            Shaping the Future with AI
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm passionate about leveraging artificial intelligence to solve real-world problems. 
            Currently pursuing my Master's degree, I combine academic rigor with practical 
            experience to push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                My fascination with AI began during my undergraduate studies when I realized 
                the transformative potential of machine learning. Since then, I've been on 
                a mission to master this field and contribute to the AI revolution.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From developing neural networks that can recognize patterns in complex datasets 
                to building full-stack applications that integrate AI capabilities, I'm constantly 
                exploring new frontiers in technology.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8 text-center lg:text-left"
            >
              Professional Timeline
            </motion.h3>
            
            {journey.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center border-2 border-white/20`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    {index < journey.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-white/30 to-transparent" />
                    )}
                  </div>
                  
                  <motion.div
                    className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-sm text-purple-400 font-semibold mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore My Work
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;