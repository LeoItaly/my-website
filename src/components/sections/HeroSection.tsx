import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Cpu,
  Database,
  Brain,
  Zap,
  Atom,
} from "lucide-react";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    {
      title: "AI/ML Engineer",
      icon: Brain,
      color: "from-purple-400 to-blue-400",
      description:
        "Building intelligent systems and machine learning solutions",
    },
    {
      title: "Data Scientist",
      icon: Database,
      color: "from-blue-400 to-green-400",
      description: "Transforming data into actionable insights",
    },
    {
      title: "Full-Stack Developer",
      icon: Cpu,
      color: "from-green-400 to-yellow-400",
      description: "Creating seamless web experiences",
    },
    {
      title: "Research Enthusiast",
      icon: Atom,
      color: "from-yellow-400 to-pink-400",
      description: "Exploring cutting-edge technologies",
    },
    {
      title: "Innovation Pioneer",
      icon: Zap,
      color: "from-pink-400 to-purple-400",
      description: "Pushing boundaries in tech",
    },
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentRole = roles[roleIndex].title;

    if (!isDeleting && charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentRole.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const techIcons = [
    {
      icon: Brain,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      delay: 0,
      name: "AI/ML",
    },
    {
      icon: Cpu,
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      delay: 0.2,
      name: "Computing",
    },
    {
      icon: Database,
      color: "text-green-400",
      bg: "bg-green-500/20",
      delay: 0.4,
      name: "Data",
    },
    {
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
      delay: 0.6,
      name: "Innovation",
    },
    {
      icon: Atom,
      color: "text-pink-400",
      bg: "bg-pink-500/20",
      delay: 0.8,
      name: "Research",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <motion.div
        ref={heroRef}
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Enhanced Greeting with glassmorphism */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-xl border border-purple-500/50 text-purple-200 font-medium shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
              }}
              animate={{
                boxShadow: [
                  "0 10px 30px -12px rgba(139, 92, 246, 0.3)",
                  "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
                  "0 10px 30px -12px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 mr-3" />
              </motion.div>
              Welcome to the AI Revolution
            </motion.span>
          </motion.div>

          {/* Enhanced Main heading with 3D text effect */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{
              textShadow:
                "0 0 80px rgba(139, 92, 246, 0.5), 0 0 160px rgba(59, 130, 246, 0.3)",
            }}
          >
            <motion.span
              className="block text-white mb-4"
              animate={{
                textShadow: [
                  "0 0 80px rgba(139, 92, 246, 0.5)",
                  "0 0 120px rgba(139, 92, 246, 0.8)",
                  "0 0 80px rgba(139, 92, 246, 0.5)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200% auto" }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Your Name
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-xl rounded-lg"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </motion.span>

            <motion.span
              className="block text-3xl md:text-5xl lg:text-6xl text-gray-200"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))",
                  "drop-shadow(0 0 40px rgba(16, 185, 129, 0.8))",
                  "drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              I'm a{" "}
              <span className="relative inline-block">
                <motion.span
                  className={`bg-gradient-to-r ${roles[roleIndex].color} bg-clip-text text-transparent font-bold`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  style={{ backgroundSize: "200% auto" }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {text}
                </motion.span>
                <motion.span
                  className="absolute -right-1 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
                  animate={{
                    opacity: [0, 1, 0],
                    scaleY: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.span>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {roles[roleIndex].description}
            </motion.p>
          </motion.h1>

          {/* Enhanced Description with glassmorphism */}
          <motion.div variants={itemVariants} className="relative mb-12">
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
            >
              Passionate about transforming data into intelligent solutions.
              Currently pursuing my Master's in AI/ML, building the future one
              algorithm at a time.
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-2xl"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.p>
          </motion.div>

          {/* Enhanced 3D Tech icons with orbital animation */}
          <motion.div
            variants={itemVariants}
            className="relative mb-16 h-64 flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {techIcons.map(
                ({ icon: Icon, color, bg, delay, name }, index) => {
                  const angle = (index / techIcons.length) * 2 * Math.PI;
                  const radius = 120;

                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius,
                        rotate: [0, 360],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        x: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        y: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    >
                      <motion.div
                        className={`${color} ${bg} p-6 rounded-2xl backdrop-blur-xl border border-white/20 group cursor-pointer`}
                        whileHover={{
                          scale: 1.3,
                          rotateY: 180,
                          boxShadow:
                            "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
                        }}
                        animate={{
                          y: [0, -20, 0],
                          boxShadow: [
                            "0 10px 30px -12px rgba(139, 92, 246, 0.2)",
                            "0 25px 50px -12px rgba(139, 92, 246, 0.4)",
                            "0 10px 30px -12px rgba(139, 92, 246, 0.2)",
                          ],
                        }}
                        transition={{
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          },
                          boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            delay: delay,
                          },
                        }}
                      >
                        <Icon className="w-8 h-8" />
                        <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"
                          animate={{
                            opacity: [0, 0.5, 0],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: delay,
                          }}
                        />
                        {/* Tooltip */}
                        <motion.div
                          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          {name}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons with 3D effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-20"
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{ backgroundSize: "200% auto" }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="relative z-10 text-lg">View My Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>

            <motion.button
              className="group relative px-10 py-5 border-2 border-purple-400 text-purple-300 font-bold rounded-2xl backdrop-blur-xl bg-white/5 overflow-hidden"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.8)",
                color: "#ffffff",
                rotateY: -5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 text-lg">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Scroll indicator with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center"
          >
            <motion.span
              className="text-gray-300 text-sm mb-4 font-medium"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.button
              onClick={scrollToNext}
              className="relative p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotateX: 15,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
              }}
            >
              <ChevronDown className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/20 to-blue-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Simplified decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Reduced floating geometric shapes */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + ((i * 15) % 40)}%`,
              }}
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${
                  i % 3 === 0
                    ? "from-purple-500/10 to-blue-500/10"
                    : i % 3 === 1
                    ? "from-blue-500/10 to-green-500/10"
                    : "from-green-500/10 to-purple-500/10"
                } backdrop-blur-sm ${
                  i % 2 === 0 ? "rounded-full" : "rounded-lg"
                } border border-white/5`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
