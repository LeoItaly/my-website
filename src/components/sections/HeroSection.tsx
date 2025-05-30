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
  Code,
  Globe,
  Layers,
} from "lucide-react";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const [isConstellationInteractive, setIsConstellationInteractive] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const roles = [
    {
      title: "AI/ML Engineer",
      icon: Brain,
      color: "from-purple-400 to-blue-400",
      description: "Building intelligent systems and machine learning solutions",
      techs: ["python", "pytorch", "tensorflow", "opencv"],
    },
    {
      title: "Data Scientist",
      icon: Database,
      color: "from-blue-400 to-green-400",
      description: "Transforming data into actionable insights",
      techs: ["python", "pytorch", "tensorflow", "javascript"],
    },
    {
      title: "Full-Stack Developer",
      icon: Cpu,
      color: "from-green-400 to-yellow-400",
      description: "Creating seamless web experiences",
      techs: ["react", "typescript", "javascript", "nodejs"],
    },
    {
      title: "Research Enthusiast",
      icon: Atom,
      color: "from-yellow-400 to-pink-400",
      description: "Exploring cutting-edge technologies",
      techs: ["python", "opencv", "pytorch", "react"],
    },
    {
      title: "Innovation Pioneer",
      icon: Zap,
      color: "from-pink-400 to-purple-400",
      description: "Pushing boundaries in tech",
      techs: ["aws", "mongodb", "nodejs", "typescript"],
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

  const techLogos = [
    {
      name: "python",
      level: 95,
      logo: "src/assets/tech-logos/python.svg",
      fallbackIcon: Code,
      color: "text-yellow-400",
    },
    {
      name: "pytorch",
      level: 88,
      logo: "src/assets/tech-logos/pytorch.svg",
      fallbackIcon: Brain,
      color: "text-orange-400",
    },
    {
      name: "react",
      level: 90,
      logo: "src/assets/tech-logos/react.svg",
      fallbackIcon: Atom,
      color: "text-cyan-400",
    },
    {
      name: "typescript",
      level: 88,
      logo: "src/assets/tech-logos/typescript.svg",
      fallbackIcon: Code,
      color: "text-blue-400",
    },
    {
      name: "javascript",
      level: 92,
      logo: "src/assets/tech-logos/javascript.svg",
      fallbackIcon: Code,
      color: "text-yellow-300",
    },
    {
      name: "opencv",
      level: 80,
      logo: "src/assets/tech-logos/opencv.svg",
      fallbackIcon: Database,
      color: "text-green-400",
    },
    {
      name: "tensorflow",
      level: 85,
      logo: "src/assets/tech-logos/tensorflow.svg",
      fallbackIcon: Brain,
      color: "text-orange-500",
    },
    {
      name: "nodejs",
      level: 85,
      logo: "src/assets/tech-logos/nodejs.svg",
      fallbackIcon: Layers,
      color: "text-green-500",
    },
    {
      name: "mongodb",
      level: 80,
      logo: "src/assets/tech-logos/mongodb.svg",
      fallbackIcon: Database,
      color: "text-green-600",
    },
    {
      name: "aws",
      level: 78,
      logo: "src/assets/tech-logos/aws.svg",
      fallbackIcon: Globe,
      color: "text-orange-400",
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConstellationInteractive(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const calculateTechPosition = (index: number, time: number) => {
    const baseRadius = 150; // Reduced radius for tighter orbit
    const angle = (index / techLogos.length) * Math.PI * 2 + time * 0.1; // Slower speed for smoothness
    return {
      x: Math.cos(angle) * baseRadius,
      y: Math.sin(angle) * baseRadius,
    };
  };

  const currentRoleTechs = roles[roleIndex].techs;

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
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-xl border border-purple-500/50 text-purple-200 font-medium shadow-lg"
              animate={{
                boxShadow: [
                  "0 10px 20px -5px rgba(139, 92, 246, 0.3)",
                  "0 15px 30px -5px rgba(139, 92, 246, 0.5)",
                  "0 10px 20px -5px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 mr-3 text-purple-400" />
              </motion.div>
              Welcome to the AI Revolution
            </motion.span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <motion.span
              className="block text-white mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                  "0 0 30px rgba(139, 92, 246, 0.7)",
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200% auto" }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Your Name
              </motion.span>
            </motion.span>

            <motion.span
              className="block text-2xl md:text-4xl lg:text-5xl text-gray-200"
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
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.span>

            <motion.p
              className="text-base md:text-lg text-gray-300 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {roles[roleIndex].description}
            </motion.p>
          </motion.h1>

          {/* 2D Tech Constellation with DTU Center */}
          <div
            className="relative h-[400px] mb-12"
            onMouseEnter={() => setIsConstellationInteractive(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* DTU Logo Centerpiece */}
              <motion.div
                className="absolute z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative group">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-white/30 backdrop-blur-xl border-2 border-red-500/40 shadow-lg flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(239, 68, 68, 0.3)",
                        "0 0 30px rgba(239, 68, 68, 0.5)",
                        "0 0 20px rgba(239, 68, 68, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <img
                      src="src/assets/tech-logos/dtu-logo.svg"
                      alt="DTU"
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  >
                    DTU - Technical University of Denmark
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Tech Logos Orbit */}
              {techLogos.map((tech, index) => {
                const time = Date.now() * 0.001;
                const position = calculateTechPosition(index, time);
                const isRelevant = currentRoleTechs.includes(tech.name);

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute cursor-pointer group"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      x: position.x,
                      y: position.y,
                      scale: isRelevant ? 1 : 0.8,
                    }}
                    transition={{
                      scale: { duration: 0.8, delay: index * 0.1 },
                      x: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: { duration: 20, repeat: Infinity, ease: "linear" },
                    }}
                    whileHover={{ scale: isRelevant ? 1.2 : 1 }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                        isRelevant
                          ? "bg-white/20 border-white/40 shadow-md"
                          : "bg-white/10 border-white/20"
                      } ${hoveredTech === tech.name ? "bg-white/30 border-white/50" : ""}`}
                    >
                      <div className="w-full h-full flex items-center justify-center p-3">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          style={{
                            filter: isRelevant
                              ? "brightness(1.2) saturate(1.2)"
                              : "brightness(0.8) saturate(0.8)",
                          }}
                        />
                        <motion.div
                          className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                          initial={{ scale: 0 }}
                          animate={{ scale: isRelevant ? 1 : 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tech.level}
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    >
                      <div className="text-center">
                        <div className="font-medium">{tech.name}</div>
                        <div>Proficiency: {tech.level}%</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Simplified constellation connections */}
            <svg className="absolute inset-0 pointer-events-none opacity-30">
              {isConstellationInteractive &&
                techLogos.map((tech, index) => {
                  if (!currentRoleTechs.includes(tech.name)) return null;
                  const time = Date.now() * 0.001;
                  const pos1 = calculateTechPosition(index, time);

                  return currentRoleTechs.map((relevantTech, idx) => {
                    const techIndex = techLogos.findIndex((t) => t.name === relevantTech);
                    if (techIndex <= index) return null;
                    const pos2 = calculateTechPosition(techIndex, time);

                    return (
                      <motion.line
                        key={`${index}-${techIndex}`}
                        x1={pos1.x + 250}
                        y1={pos1.y + 250}
                        x2={pos2.x + 250}
                        y2={pos2.y + 250}
                        stroke="url(#constellation-gradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    );
                  }).filter(Boolean);
                })}
              <defs>
                <linearGradient id="constellation-gradient">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {!isConstellationInteractive && (
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hover to interact with technologies
              </motion.div>
            )}
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <motion.button
              className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg border border-white/20"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Projects
            </motion.button>

            <motion.button
              className="relative px-8 py-4 border border-purple-400 text-purple-300 font-semibold rounded-lg bg-white/5"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                borderColor: "rgba(139, 92, 246, 0.7)",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={itemVariants} className="relative flex flex-col items-center">
            <motion.span
              className="text-gray-300 text-sm mb-3 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.button
              onClick={scrollToNext}
              className="relative p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown className="w-5 h-5 text-purple-400 hover:text-white" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Simplified decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 10}%`,
                top: `${15 + (i * 15) % 50}%`,
              }}
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${
                  i % 2 === 0 ? "from-purple-500/20 to-blue-500/20" : "from-blue-500/20 to-pink-500/20"
                } backdrop-blur-sm rounded-full border border-white/10`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;