import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
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
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [animationTime, setAnimationTime] = useState(0);
  const [highlightedTechs, setHighlightedTechs] = useState<Set<string>>(
    new Set()
  );

  // Updated roles with dynamic descriptions based on your projects
  const roles = useMemo(() => [
    {
      title: "AI/ML Engineer",
      icon: Brain,
      color: "from-purple-400 to-blue-400",
      description: "Building intelligent systems with computer vision, deep learning, and generative AI models",
      techs: ["python", "pytorch", "tensorflow", "opencv"],
    },
    {
      title: "Data Scientist",
      icon: Database,
      color: "from-blue-400 to-green-400",
      description: "Transforming complex datasets into actionable insights and predictive models",
      techs: ["python", "pytorch", "tensorflow", "javascript"],
    },
    {
      title: "Full-Stack Developer",
      icon: Code,
      color: "from-green-400 to-cyan-400",
      description: "Creating interactive web applications with modern frameworks and 3D graphics",
      techs: ["react", "typescript", "javascript", "nodejs"],
    },
    {
      title: "Research Enthusiast",
      icon: Atom,
      color: "from-yellow-400 to-pink-400",
      description: "Exploring cutting-edge technologies from biometrics to human-computer interaction",
      techs: ["python", "opencv", "pytorch", "react"],
    },
    {
      title: "UX Researcher",
      icon: Zap,
      color: "from-pink-400 to-purple-400",
      description: "Designing human-centered interfaces and mobile experiences for better user interaction",
      techs: ["react", "typescript", "javascript", "nodejs"],
    },
  ], []);

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Use useSpring for smoother scroll effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { damping: 30, stiffness: 100 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [1, 0]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.95]),
    springConfig
  );

  const techLogos = useMemo(
    () => [
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
    ],
    []
  );

  // Optimize animation loop with RAF
  useEffect(() => {
    const updateAnimation = () => {
      setAnimationTime(Date.now() * 0.001);
      animationFrameRef.current = requestAnimationFrame(updateAnimation);
    };

    animationFrameRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Memoize position calculations
  const calculateTechPosition = useCallback(
    (index: number, time: number) => {
      const baseRadius = 200; // Reduced from 280 to bring logos closer to center
      const angle = (index / techLogos.length) * Math.PI * 2 + time * 0.08; // Slower rotation
      return {
        x: Math.cos(angle) * baseRadius,
        y: Math.sin(angle) * baseRadius,
      };
    },
    [techLogos.length]
  );

  // Memoize tech positions to reduce calculations
  const techPositions = useMemo(() => {
    return techLogos.map((_, index) =>
      calculateTechPosition(index, animationTime)
    );
  }, [techLogos, calculateTechPosition, animationTime]);

  // Typewriter effect with smooth transitions
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const currentRoleTechs = roles[roleIndex].techs;

  // Simplified scroll handlers
  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  // Random highlighting effect
  useEffect(() => {
    const updateHighlights = () => {
      const numToHighlight = Math.floor(Math.random() * 3) + 2;
      const shuffled = [...techLogos].sort(() => Math.random() - 0.5);
      const newHighlights = new Set(
        shuffled.slice(0, numToHighlight).map((tech) => tech.name)
      );
      setHighlightedTechs(newHighlights);
    };

    updateHighlights();
    const interval = setInterval(updateHighlights, 3000);

    return () => clearInterval(interval);
  }, [techLogos]);

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
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 text-purple-200 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-5 h-5 mr-3 text-purple-400" />
              Welcome to the AI Revolution
            </motion.span>
          </motion.div>

          {/* Main heading with dynamic description */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <motion.span className="block text-white mb-4">
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200% auto" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Leo
              </motion.span>
            </motion.span>

            <motion.span className="block text-2xl md:text-4xl lg:text-5xl text-gray-200">
              I'm a{" "}
              <span className="relative inline-block">
                <motion.span
                  className={`bg-gradient-to-r ${roles[roleIndex].color} bg-clip-text text-transparent font-bold`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  style={{ backgroundSize: "200% auto" }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
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

            {/* Dynamic description that changes with role */}
            <motion.p
              className="text-base md:text-lg text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed"
              key={roleIndex} // This ensures smooth transition when role changes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2
              }}
            >
              {roles[roleIndex].description}
            </motion.p>
          </motion.h1>

          {/* Tech Constellation */}
          <div className="relative h-[400px] mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* DTU Logo Centerpiece */}
              <motion.div
                className="absolute z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-500/40 via-red-500/30 to-red-500/40 backdrop-blur-md border-2 border-red-500/50 flex items-center justify-center">
                    <img
                      src="src/assets/tech-logos/dtu-logo.svg"
                      alt="DTU"
                      className="w-16 h-16 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    DTU - Technical University of Denmark
                  </div>
                </div>
              </motion.div>

              {/* Tech Logos Orbit */}
              {techLogos.map((tech, index) => {
                const position = techPositions[index];
                const isRelevant = currentRoleTechs.includes(tech.name);
                const isHighlighted = highlightedTechs.has(tech.name);

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute cursor-pointer group"
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      x: position.x,
                      y: position.y,
                      scale: isRelevant || isHighlighted ? 1 : 0.75,
                    }}
                    transition={{
                      scale: { duration: 0.5, delay: index * 0.05 },
                      x: { type: "spring", stiffness: 50, damping: 20 },
                      y: { type: "spring", stiffness: 50, damping: 20 },
                    }}
                    whileHover={{
                      scale: isRelevant || isHighlighted ? 1.1 : 0.9,
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div
                      className={`w-16 h-16 rounded-lg backdrop-blur-sm border transition-all duration-200 ${
                        isRelevant || isHighlighted
                          ? "bg-white/15 border-white/30"
                          : "bg-white/8 border-white/15"
                      } ${
                        hoveredTech === tech.name
                          ? "bg-white/25 border-white/40"
                          : ""
                      }`}
                    >
                      <div className="w-full h-full flex items-center justify-center p-3">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          style={{
                            filter:
                              isRelevant || isHighlighted
                                ? "brightness(1.1) saturate(1.1)"
                                : "brightness(0.8) saturate(0.8)",
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      <div className="text-center">
                        <div className="font-medium">{tech.name}</div>
                        <div>Proficiency: {tech.level}%</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
            >
              View My Projects
            </motion.button>

            <motion.button
              className="px-8 py-4 border border-purple-400 text-purple-300 font-semibold rounded-lg bg-white/5"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(139, 92, 246, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + ((i * 15) % 40)}%`,
              }}
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;