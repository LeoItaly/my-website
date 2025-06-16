import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Code,
  Database,
  Layers,
  Filter,
  Zap,
  TrendingUp,
} from "lucide-react";

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skillCategories = [
    {
      id: "all",
      label: "All Skills",
      icon: Layers,
      color: "from-purple-500 to-blue-500",
    },
    {
      id: "ai-ml",
      label: "AI/ML & Vision",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "programming",
      label: "Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "data",
      label: "Data & UX",
      icon: Database,
      color: "from-green-500 to-teal-500",
    },
    {
      id: "tools",
      label: "Research Tools",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const skills = [
    // Computer Vision & AI Skills
    {
      name: "Computer Vision & Deep Learning",
      level: 94,
      category: "ai-ml",
      color: "from-purple-400 to-blue-500",
      description:
        "CNNs, object detection, segmentation, medical imaging, FIQA, 3D geometry, and transfer learning",
    },
    {
      name: "Deep Learning & Generative AI",
      level: 92,
      category: "ai-ml",
      color: "from-red-400 to-pink-500",
      description:
        "PyTorch, TensorFlow, DDPMs, GANs, Transformers, advanced neural architectures",
    },
    {
      name: "Image Processing & Graphics",
      level: 88,
      category: "ai-ml",
      color: "from-green-400 to-teal-500",
      description:
        "OpenCV, WebGL, GLSL shaders, geometric processing, point clouds, and mesh analysis",
    },

    // Programming & Development Skills
    {
      name: "Multi-Platform Development",
      level: 95,
      category: "programming",
      color: "from-yellow-400 to-orange-500",
      description:
        "Python, JavaScript, React Native, TypeScript, scientific computing, mobile apps",
    },
    {
      name: "Web Technologies & Interactive Systems",
      level: 94,
      category: "programming",
      color: "from-cyan-400 to-blue-500",
      description:
        "React, D3.js, interactive prototypes, user research tools, and modern web frameworks",
    },

    // Data Science & Analytics Skills
    {
      name: "Machine Learning & Statistics",
      level: 90,
      category: "data",
      color: "from-blue-400 to-purple-500",
      description:
        "Regression, classification, PCA, cross-validation, Bayesian inference, model evaluation",
    },
    {
      name: "Data Visualization & Analytics",
      level: 94,
      category: "data",
      color: "from-indigo-400 to-blue-500",
      description:
        "D3.js, interactive dashboards, social data analysis, narrative visualization, large datasets",
    },

    // UX & Research Skills
    {
      name: "UX Research & Design",
      level: 88,
      category: "data",
      color: "from-pink-400 to-purple-500",
      description:
        "User research, mobile prototyping, personal informatics, HCI evaluation, usability testing",
    },
    {
      name: "Research & Academic Methods",
      level: 82,
      category: "tools",
      color: "from-purple-400 to-pink-500",
      description:
        "Scientific writing, literature review, experimental design, academic tools, peer review",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <motion.div
        ref={sectionRef}
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-xl border border-purple-500/50 text-purple-200 font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <TrendingUp className="w-5 h-5 mr-3" />
              </motion.div>
              Technical Expertise
            </motion.span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 leading-tight py-2"
            style={{
              textShadow: "0 0 80px rgba(139, 92, 246, 0.3)",
            }}
          >
            My Expertise
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
          >
            A comprehensive toolkit spanning AI/ML development, interactive
            systems, and data science. Constantly evolving with the latest
            technologies and methodologies.
          </motion.p>
        </motion.div>

        {/* Skills Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(" ")[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                background: `linear-gradient(135deg, ${skill.color
                  .replace("from-", "rgba(")
                  .replace("to-", ", 0.05) 0%, rgba(")
                  .replace(" ", ", 0.02")} 100%)`,
              }}
            >
              {/* Skill header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {skill.name}
                </h3>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-bold text-white">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 1.5,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scaleY: 1.2,
                      transition: { duration: 0.2 },
                    }}
                  />
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5,
                    }}
                  />
                </div>
              </div>

              {/* Skill description */}
              <motion.p
                className="text-gray-400 text-sm leading-relaxed relative z-10"
                animate={
                  hoveredSkill === skill.name
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0.7,
                        y: 5,
                      }
                }
                transition={{ duration: 0.3 }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Skills Summary with 3D visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)",
            }}
          >
            {/* 3D background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern
                    id="skills-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                    <path
                      d="M0,10 L20,10 M10,0 L10,20"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#skills-pattern)" />
              </svg>
            </div>

            <motion.h3
              className="text-3xl font-bold text-white mb-6 relative z-10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                background:
                  "linear-gradient(90deg, #ffffff, #a855f7, #3b82f6, #ffffff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Continuous Learning Journey
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-lg relative z-10"
              variants={itemVariants}
            >
              Technology evolves rapidly, and so do I. I'm committed to staying
              at the forefront of AI/ML developments, constantly updating my
              skills and exploring new paradigms.
            </motion.p>

            <motion.button
              className="relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Filter className="w-5 h-5 mr-3" />
              </motion.div>
              See Skills in Action
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>

            {/* Floating tech icons around the summary */}
            <div className="absolute inset-0 pointer-events-none">
              {[Brain, Code, Database, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-8 h-8 text-purple-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced background decoration with 3D effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};
export default SkillsSection;
