import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Award,
  Users,
  Target,
  Lightbulb,
  Rocket,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";

interface SubProject {
  id: string;
  title: string;
  description: string;
  motivation: string;
  keyFeatures: string[];
  outcome: string;
  paperUrl: string;
}

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    course: string;
    role: string;
    image: string;
    paperAvailable: boolean;
    snippet: string;
    motivation: string;
    scope: string;
    keyContributions: string[];
    technologies: string;
    outcome: string;
    futureWork: string;
    whatILearned: string[];
    paperUrl?: string;
    posterUrls?: string[];
    projectGithub?: string;
    additionalGithub?: string[];
    projectWebsite?: string;
    prototypeVideo?: string;
    secondaryProjects?: {
      title: string;
      description: string;
      website: string;
      github: string;
      keyInsights: string[];
    }[];
    courseExercises?: string;
    subProjects?: SubProject[];
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-slate-900/90 backdrop-blur-xl border-b border-white/10 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      {project.course}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      {project.role}
                    </span>
                    {project.paperAvailable && (
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        Paper Available
                      </span>
                    )}
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Project Image */}
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>

              {/* Prototype Video Demo */}
              {project.prototypeVideo && (
                <motion.div
                  className="relative mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-blue-400" />
                    Interactive Prototype Demo
                  </h3>
                  <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group">
                      <iframe
                        src={
                          project.prototypeVideo
                            .replace(
                              "youtube.com/shorts/",
                              "youtube.com/embed/"
                            )
                            .split("?")[0]
                        }
                        title="Prototype Demo Video"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <p className="text-gray-400 text-sm mt-3 text-center">
                      Interactive React Native prototype demonstrating core
                      features and user flow
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Enhanced Download Section with Video Demo */}
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.paperAvailable && project.paperUrl && (
                  <motion.a
                    href={project.paperUrl}
                    download
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Paper (PDF)
                  </motion.a>
                )}

                {project.projectGithub && (
                  <motion.a
                    href={project.projectGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-full hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Prototype Code
                  </motion.a>
                )}

                {project.prototypeVideo && (
                  <motion.a
                    href={project.prototypeVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Watch Demo Video
                  </motion.a>
                )}

                {project.posterUrls && project.posterUrls.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.posterUrls.map((posterUrl, index) => (
                      <motion.a
                        key={index}
                        href={posterUrl}
                        download
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium rounded-full hover:from-teal-600 hover:to-green-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Poster {index + 1}
                      </motion.a>
                    ))}
                  </div>
                )}

                {project.additionalGithub &&
                  project.additionalGithub.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.additionalGithub.map((repoUrl, index) => (
                        <motion.a
                          key={index}
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Repo {index + 2}
                        </motion.a>
                      ))}
                    </div>
                  )}
              </motion.div>

              {/* Project Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-400" />
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4 italic bg-white/5 p-4 rounded-lg border-l-4 border-purple-500">
                  "{project.snippet}"
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Motivation
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.motivation}
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Scope
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.scope}
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Key Contributions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-green-400" />
                  Key Contributions
                </h2>
                <div className="space-y-4">
                  {project.keyContributions.map((contribution, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 bg-white/5 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {contribution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Secondary Projects Section */}
              {project.secondaryProjects &&
                project.secondaryProjects.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Rocket className="w-6 h-6 text-green-400" />
                      Additional Course Projects
                    </h2>
                    <div className="space-y-6">
                      {project.secondaryProjects.map((secProject, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.01, y: -2 }}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-3">
                                {secProject.title}
                              </h3>
                              <p className="text-gray-300 mb-4 leading-relaxed">
                                {secProject.description}
                              </p>

                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-green-300 mb-2">
                                  Key Insights
                                </h4>
                                <ul className="text-gray-400 text-sm space-y-1">
                                  {secProject.keyInsights.map(
                                    (insight, insightIndex) => (
                                      <li
                                        key={insightIndex}
                                        className="flex items-start gap-2"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-2"></div>
                                        {insight}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>

                            <div className="lg:w-64 flex-shrink-0 flex flex-col gap-3">
                              <motion.a
                                href={secProject.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-600 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Website
                              </motion.a>
                              <motion.a
                                href={secProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Source Code
                              </motion.a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {project.courseExercises && (
                      <motion.div
                        className="mt-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <p className="text-gray-400 mb-4">
                          Additional course exercises and implementations
                          available:
                        </p>
                        <motion.a
                          href={project.courseExercises}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Course Exercises Repository
                        </motion.a>
                      </motion.div>
                    )}
                  </motion.section>
                )}

              {/* Technologies & Outcome */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    Technologies & Tools
                  </h2>
                  <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg">
                    {project.technologies}
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Outcome
                  </h2>
                  <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg">
                    {project.outcome}
                  </p>
                </motion.section>
              </div>

              {/* Future Work & What I Learned */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-purple-400" />
                    Future Work
                  </h2>
                  <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg">
                    {project.futureWork}
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    What I Learned
                  </h2>
                  <ul className="space-y-2">
                    {project.whatILearned.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2"></div>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
