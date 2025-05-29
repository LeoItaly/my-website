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
      label: "AI/ML",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "programming",
      label: "Programming",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "data",
      label: "Data Science",
      icon: Database,
      color: "from-green-500 to-teal-500",
    },
    {
      id: "tools",
      label: "Tools & Frameworks",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const skills = [
    // Core AI/ML Skills
    {
      name: "Computer Vision & Deep Learning",
      level: 94,
      category: "ai-ml",
      color: "from-purple-400 to-blue-500",
      description:
        "CNNs, object detection, segmentation, medical imaging, transfer learning, explainable AI, and adversarial attacks",
    },
    {
      name: "Deep Learning & Generative AI",
      level: 92,
      category: "ai-ml",
      color: "from-red-400 to-pink-500",
      description:
        "PyTorch, TensorFlow, DDPMs, GANs, Transformers, CNNs, and advanced neural architectures",
    },
    {
      name: "Image Processing & Analysis",
      level: 85,
      category: "ai-ml",
      color: "from-green-400 to-teal-500",
      description:
        "OpenCV, filtering, morphology, BLOB analysis, registration, and camera calibration",
    },

    // Programming & Development
    {
      name: "Multi-Language Scientific Computing",
      level: 95,
      category: "programming",
      color: "from-yellow-400 to-orange-500",
      description:
        "Python, JavaScript, WebGL/GLSL, NumPy, scientific algorithms, and cross-platform development",
    },
    {
      name: "Web Development & Graphics Programming",
      level: 92,
      category: "programming",
      color: "from-cyan-400 to-blue-500",
      description:
        "React, TypeScript, WebGL, GLSL shaders, real-time rendering, and interactive 3D applications",
    },

    // Data Science & Analysis
    {
      name: "Machine Learning & Statistical Methods",
      level: 90,
      category: "data",
      color: "from-blue-400 to-purple-500",
      description:
        "Regression, classification, Bayesian inference, reinforcement learning, and statistical validation",
    },
    {
      name: "UX Design & Human-Computer Interaction",
      level: 85,
      category: "data",
      color: "from-pink-400 to-purple-500",
      description:
        "User research, prototyping, usability testing, design thinking, lean UX methodology, and biometric interfaces",
    },
    {
      name: "Data Processing & Visualization",
      level: 92,
      category: "data",
      color: "from-indigo-400 to-blue-500",
      description:
        "Pandas, matplotlib, 3D visualization, geometric data analysis, and computer graphics rendering",
    },

    // Tools & Research
    {
      name: "Research & Academic Tools",
      level: 78,
      category: "tools",
      color: "from-purple-400 to-pink-500",
      description:
        "Zotero, Elicit, Litmaps, Jenni AI for research acceleration and paper management",
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
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6"
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
            A comprehensive toolkit spanning AI/ML, full-stack development, and
            data science. Constantly evolving with the latest technologies and
            methodologies.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter with 3D effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`relative flex items-center px-8 py-4 rounded-2xl font-medium transition-all duration-500 backdrop-blur-xl border overflow-hidden ${
                activeCategory === category.id
                  ? "text-white border-white/30 shadow-2xl"
                  : "text-gray-300 hover:text-white border-white/10 hover:border-white/30"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background:
                  activeCategory === category.id
                    ? `linear-gradient(135deg, ${
                        category.color.split(" ")[1]
                      }, ${category.color.split(" ")[3]})`
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <motion.div
                animate={activeCategory === category.id ? { rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
              >
                <category.icon className="w-5 h-5 mr-3" />
              </motion.div>
              {category.label}

              {/* 3D depth effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                  backgroundSize: "200% 200%",
                }}
                animate={
                  activeCategory === category.id
                    ? {
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid with 3D cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${activeCategory}`}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)",
              }}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Skill header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <motion.h3
                  className="text-xl font-bold text-white group-hover:text-purple-300 transition-all duration-300"
                  animate={
                    hoveredSkill === skill.name ? { scale: 1.05 } : { scale: 1 }
                  }
                >
                  {skill.name}
                </motion.h3>
                <motion.span
                  className="text-sm text-gray-400 font-mono bg-black/30 px-3 py-1 rounded-full"
                  animate={
                    hoveredSkill === skill.name
                      ? {
                          scale: 1.1,
                          backgroundColor: "rgba(139, 92, 246, 0.3)",
                        }
                      : { scale: 1 }
                  }
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* 3D Progress visualization */}
              <div className="relative mb-6">
                {/* Background track */}
                <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden relative">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    initial={{ width: 0, scaleY: 1 }}
                    animate={
                      inView
                        ? {
                            width: `${skill.level}%`,
                            scaleY: hoveredSkill === skill.name ? 1.2 : 1,
                          }
                        : { width: 0 }
                    }
                    transition={{
                      width: {
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      },
                      scaleY: { duration: 0.3 },
                    }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                    />

                    {/* 3D depth lines */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>

                {/* Floating percentage indicator */}
                <motion.div
                  className="absolute -top-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-2xl"
                  style={{ left: `${Math.min(skill.level, 85)}%` }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={
                    inView
                      ? {
                          opacity: hoveredSkill === skill.name ? 1 : 0,
                          y: hoveredSkill === skill.name ? -5 : 0,
                          scale: hoveredSkill === skill.name ? 1 : 0.8,
                        }
                      : {}
                  }
                  transition={{ delay: index * 0.1 + 1.5, duration: 0.3 }}
                >
                  {skill.level}%
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600" />
                </motion.div>
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

              {/* 3D Card effects */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${skill.color
                    .replace("from-", "rgba(")
                    .replace("to-", ", 0.1) 0%, rgba(")
                    .replace(" ", ", 0.05")} 100%)`,
                }}
              />

              {/* Holographic border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(45deg, ${skill.color}) border-box`,
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "subtract",
                }}
                animate={
                  hoveredSkill === skill.name
                    ? {
                        background: [
                          `linear-gradient(45deg, ${skill.color
                            .replace("from-", "")
                            .replace("to-", ",")}) border-box`,
                          `linear-gradient(90deg, ${skill.color
                            .replace("from-", "")
                            .replace("to-", ",")}) border-box`,
                          `linear-gradient(135deg, ${skill.color
                            .replace("from-", "")
                            .replace("to-", ",")}) border-box`,
                          `linear-gradient(45deg, ${skill.color
                            .replace("from-", "")
                            .replace("to-", ",")}) border-box`,
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Simplified particle effects on hover */}
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 4 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${25 + i * 15}%`,
                        top: `${40 + i * 5}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              )}
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
