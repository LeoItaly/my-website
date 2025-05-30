import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  Download,
  FileText,
  Calendar,
  Award,
  Eye,
  Filter,
  Search,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackgroundEffects from "../components/animations/BackgroundEffects";

interface Paper {
  id: string;
  title: string;
  type: "paper" | "poster";
  category: string;
  date: string;
  course: string;
  description: string;
  thumbnail: string;
  pdfUrl: string;
  tags: string[];
  featured: boolean;
}

const PapersPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  // Sample papers data
  const papers: Paper[] = [
    {
      id: "fiqa-biometric",
      title:
        "Facial Image Quality Assessment for Improved Face Recognition Systems",
      type: "paper",
      category: "Computer Vision",
      date: "2024",
      course: "Biometric Systems",
      description:
        "Comprehensive analysis of FIQA techniques and bias mitigation in face recognition pipelines.",
      thumbnail: "/src/assets/papers/thumbnails/fiqa-thumb.jpg",
      pdfUrl: "/src/assets/papers/fiqa-biometric-systems.pdf",
      tags: ["Face Recognition", "FIQA", "Bias Mitigation", "Computer Vision"],
      featured: true,
    },
    {
      id: "ddpm-poster",
      title: "Denoising Diffusion Probabilistic Models on MNIST",
      type: "poster",
      category: "Deep Learning",
      date: "2024",
      course: "Deep Learning",
      description:
        "Poster presentation on DDPM implementation with FID score optimization.",
      thumbnail: "/src/assets/papers/thumbnails/ddpm-thumb.jpg",
      pdfUrl: "/src/assets/papers/ddpm-poster.pdf",
      tags: ["DDPM", "Generative AI", "MNIST", "Deep Learning"],
      featured: true,
    },
  ];

  const categories = [
    "all",
    "Computer Vision",
    "Deep Learning",
    "UX Research",
    "Data Science",
  ];

  const filteredPapers = papers.filter((paper) => {
    const matchesFilter =
      activeFilter === "all" || paper.category === activeFilter;
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black overflow-x-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />

        <main className="relative pt-20">
          {/* Header Section */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            {/* Back to Home */}
            <motion.div variants={itemVariants} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </motion.div>

            {/* Page Title */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-xl border border-purple-500/50 text-purple-200 font-medium">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Research Publications
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Papers & Posters
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A collection of my research papers, academic posters, and
                technical publications spanning computer vision, deep learning,
                UX research, and data science.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search papers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category === "all" ? "All Papers" : category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Papers Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredPapers.map((paper, index) => (
                  <motion.div
                    key={paper.id}
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Paper Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                      <img
                        src={paper.thumbnail}
                        alt={paper.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      {/* Fallback background */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        <FileText className="w-16 h-16 text-purple-400 opacity-50" />
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            paper.type === "paper"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-green-500/20 text-green-300 border border-green-500/30"
                          }`}
                        >
                          {paper.type === "paper" ? "Paper" : "Poster"}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {paper.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                            <Award className="w-3 h-3 mr-1" />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Paper Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          {paper.date} • {paper.course}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                        {paper.title}
                      </h3>

                      <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                        {paper.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {paper.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {paper.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20">
                            +{paper.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => setSelectedPaper(paper)}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </motion.button>

                        <motion.a
                          href={paper.pdfUrl}
                          download
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredPapers.length === 0 && (
              <motion.div variants={itemVariants} className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No papers found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PapersPage;
