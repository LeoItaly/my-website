import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  BookOpen,
  Code,
  FileText,
  TrendingUp,
  Github,
  Linkedin,
  ExternalLink,
  Brain,
  Globe,
  Palette,
} from "lucide-react";

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      icon: GraduationCap,
      label: "MSc Program",
      value: "DTU",
      color: "text-purple-400",
    },
    {
      icon: Code,
      label: "University Projects",
      value: "11+",
      color: "text-blue-400",
    },
    {
      icon: FileText,
      label: "Research Papers",
      value: "8+",
      color: "text-green-400",
    },
    {
      icon: Github,
      label: "Active Repos",
      value: "15+",
      color: "text-pink-400",
    },
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: "Computer Vision & Deep Learning",
      description:
        "Face recognition, medical imaging, object detection, and generative models",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Interactive Systems & Web Development",
      description:
        "Building interactive web applications, user interfaces, and modern web experiences",
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Palette,
      title: "Human-Computer Interaction",
      description:
        "UX design, personal informatics, and mobile application development",
      color: "from-green-500 to-purple-500",
    },
  ];

  const profileLinks = [
    {
      name: "GitHub Profile",
      icon: Github,
      url: "https://github.com/LeoItaly",
      description: "Explore my code repositories and open-source contributions",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
    },
    {
      name: "Research Papers",
      icon: FileText,
      url: "/papers", // This will be your papers page
      description: "Read my published research papers and academic posters",
      color: "from-green-600 to-teal-600",
      hoverColor: "hover:from-teal-600 hover:to-green-600",
    },
    {
      name: "LinkedIn Profile",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/leonardo-rodovero/?originalSubdomain=dk",
      description: "Connect with me and follow my professional journey",
      color: "from-blue-600 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-blue-600",
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
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 leading-tight py-2"
          >
            Building Human-Centered AI
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I'm a <strong className="text-white">DTU Master's student</strong>{" "}
            in{" "}
            <strong className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Human-Centered Artificial Intelligence
            </strong>
            , exploring the intersection of advanced AI techniques and
            human-centric design. My journey spans from computer vision and deep
            learning to web development and UX research.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Academic Journey & Stats */}
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Academic Journey
                  </h3>
                  <p className="text-purple-300">
                    DTU - Technical University of Denmark
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                During my Master's program in{" "}
                <strong className="text-white">Human-Centered AI</strong>, I've
                explored diverse domains from computer vision and medical
                imaging to interactive web applications and user experience
                design. Each project represents university-level research and
                development, combining theoretical knowledge with practical
                implementation.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My work spans{" "}
                <strong className="text-blue-300">
                  11+ comprehensive projects
                </strong>{" "}
                covering facial recognition systems, deep learning models, data
                visualization, mobile applications, and 3D graphics programming.
                You can explore the full range of my technical capabilities in
                the projects section below.
              </p>
            </motion.div>

            {/* Stats Grid */}
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
                  <stat.icon
                    className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Research Areas */}
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
              Research & Development Areas
            </motion.h3>

            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {area.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Profile Links Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white text-center mb-8"
          >
            Connect & Explore
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {profileLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel={
                  link.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={itemVariants}
                className={`group block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${link.color} ${link.hoverColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                  >
                    <link.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 flex items-center justify-center gap-2">
                    {link.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

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
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore My University Projects
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
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
