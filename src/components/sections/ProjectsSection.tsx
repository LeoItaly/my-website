import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neural Network Image Classifier',
    description: 'A deep learning model trained to classify images with state-of-the-art accuracy using convolutional neural networks.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
    links: {
      github: 'https://github.com/',
      demo: 'https://demo.example.com',
      paper: 'https://arxiv.org/'
    }
  },
  {
    id: 2,
    title: 'Natural Language Processing Chatbot',
    description: 'An intelligent conversational agent built using transformer-based models to provide context-aware responses.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'PyTorch', 'NLP', 'Transformers'],
    links: {
      github: 'https://github.com/',
      demo: 'https://demo.example.com'
    }
  },
  {
    id: 3,
    title: 'Predictive Analytics Dashboard',
    description: 'A full-stack application that visualizes data and provides predictive insights using machine learning algorithms.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'D3.js', 'Scikit-learn'],
    links: {
      github: 'https://github.com/',
      demo: 'https://demo.example.com'
    }
  },
  {
    id: 4,
    title: 'Reinforcement Learning Game Agent',
    description: 'An AI agent trained using reinforcement learning to master complex game environments with superhuman performance.',
    image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'PyTorch', 'Reinforcement Learning', 'OpenAI Gym'],
    links: {
      github: 'https://github.com/',
      paper: 'https://arxiv.org/'
    }
  }
];

const ProjectsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore my portfolio of AI/ML projects and technical innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-600/70 text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">{project.description}</p>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Research Paper
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;