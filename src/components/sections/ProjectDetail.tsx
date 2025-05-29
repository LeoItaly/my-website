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
    posterUrl?: string;
    posterUrls?: string[];
    projectGithub?: string;
    additionalGithub?: string[];
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

              {/* Enhanced Download Section with Multiple Posters and Repos */}
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
                    Primary Code
                  </motion.a>
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

              {/* Sub-Projects Section */}
              {project.subProjects && project.subProjects.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-blue-400" />
                    Course Projects & Papers
                  </h2>
                  <div className="grid gap-6">
                    {project.subProjects.map((subProject, index) => (
                      <motion.div
                        key={subProject.id}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.01, y: -2 }}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-xl font-bold text-white">
                                {subProject.title}
                              </h3>
                              <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full">
                                Project {index + 1}
                              </span>
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                              {subProject.description}
                            </p>

                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-purple-300 mb-2">
                                Motivation & Context
                              </h4>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {subProject.motivation}
                              </p>
                            </div>

                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-green-300 mb-2">
                                Key UX Features
                              </h4>
                              <ul className="text-gray-400 text-sm space-y-1">
                                {subProject.keyFeatures.map(
                                  (feature, featureIndex) => (
                                    <li
                                      key={featureIndex}
                                      className="flex items-start gap-2"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-2"></div>
                                      {feature}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-yellow-300 mb-2">
                                Outcome
                              </h4>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {subProject.outcome}
                              </p>
                            </div>
                          </div>

                          <div className="lg:w-48 flex-shrink-0">
                            <motion.a
                              href={subProject.paperUrl}
                              download
                              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download Paper
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
