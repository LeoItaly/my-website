import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  ExternalLink,
  FileText,
  Award,
  Rocket,
  Brain,
  Code,
  Database,
} from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const projectCategories = [
    { id: "all", label: "All Projects", icon: Rocket },
    { id: "ai-ml", label: "AI/ML", icon: Brain },
    { id: "fullstack", label: "Full Stack", icon: Code },
    { id: "data-science", label: "Data Science", icon: Database },
    { id: "research", label: "Research", icon: FileText },
  ];

  const projects = [
    {
      id: 1,
      title: "Neural Style Transfer App",
      category: "ai-ml",
      description:
        "Deep learning application that applies artistic styles to photos using convolutional neural networks. Built with TensorFlow and deployed on AWS.",
      image: "/api/placeholder/400/250",
      tags: ["TensorFlow", "Python", "AWS", "CNN", "Flask"],
      github: "https://github.com/yourusername/neural-style-transfer",
      demo: "https://neural-style-demo.com",
      featured: true,
      type: "project",
    },
    {
      id: 2,
      title: "Sentiment Analysis Research",
      category: "research",
      description:
        "Published research on multilingual sentiment analysis using transformer models. Achieved 94% accuracy across 5 languages.",
      image: "/api/placeholder/400/250",
      tags: ["BERT", "NLP", "PyTorch", "Research", "Transformers"],
      github: "https://github.com/yourusername/multilingual-sentiment",
      paper: "https://arxiv.org/paper/yourpaper",
      featured: true,
      type: "research",
    },
    {
      id: 3,
      title: "E-Commerce Analytics Platform",
      category: "fullstack",
      description:
        "Full-stack web application with real-time analytics dashboard, user authentication, and AI-powered product recommendations.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Node.js", "MongoDB", "TypeScript", "D3.js"],
      github: "https://github.com/yourusername/ecommerce-analytics",
      demo: "https://ecommerce-analytics-demo.com",
      featured: false,
      type: "project",
    },
    {
      id: 4,
      title: "Stock Price Prediction Model",
      category: "data-science",
      description:
        "LSTM-based model for predicting stock prices with 87% accuracy. Includes data preprocessing pipeline and interactive visualization.",
      image: "/api/placeholder/400/250",
      tags: ["LSTM", "Pandas", "Scikit-learn", "Plotly", "Python"],
      github: "https://github.com/yourusername/stock-prediction",
      demo: "https://stock-prediction-demo.com",
      featured: false,
      type: "project",
    },
    {
      id: 5,
      title: "Computer Vision for Medical Imaging",
      category: "ai-ml",
      description:
        "CNN model for detecting pneumonia in chest X-rays with 96% accuracy. Deployed as a web service for healthcare professionals.",
      image: "/api/placeholder/400/250",
      tags: ["PyTorch", "OpenCV", "Medical AI", "Flask", "Docker"],
      github: "https://github.com/yourusername/medical-cv",
      demo: "https://medical-cv-demo.com",
      featured: true,
      type: "project",
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      category: "fullstack",
      description:
        "Scalable real-time chat application with WebSockets, user authentication, and message encryption.",
      image: "/api/placeholder/400/250",
      tags: ["Socket.io", "React", "Express", "Redis", "JWT"],
      github: "https://github.com/yourusername/realtime-chat",
      demo: "https://realtime-chat-demo.com",
      featured: false,
      type: "project",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

  return (
    <section id="projects" className="py-20 relative">
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
              <Rocket className="w-4 h-4 mr-2" />
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
          >
            My Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From AI research to full-stack applications, explore my journey of
            building innovative solutions that bridge theory and practice.
          </motion.p>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10"
              }`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl opacity-20"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {project.category === "ai-ml" && <Brain />}
                      {project.category === "fullstack" && <Code />}
                      {project.category === "data-science" && <Database />}
                      {project.category === "research" && <FileText />}
                    </motion.div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.type === "research"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {project.type === "research" ? "Research" : "Project"}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(147, 51, 234, 0.2)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </motion.a>
                    )}

                    {project.paper && (
                      <motion.a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Paper
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none rounded-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my complete portfolio of projects, contributions to
              open-source, and ongoing experiments in AI/ML and full-stack
              development.
            </p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
