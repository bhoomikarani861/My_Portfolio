import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-dark-bg/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      >
        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl glass bg-dark-surface/90 border-white/20 rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 bg-dark-bg/60 backdrop-blur-md rounded-full text-white/80 hover:text-white border border-white/10 hover:bg-white/10 transition-all"
          >
            <X size={20} />
          </button>

          {/* Left Side: Image & Quick Links */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-dark-bg flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-80" />
            </div>

            <div className="relative z-10 p-8 flex flex-col h-full justify-end bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-bold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2">{project.title}</h2>
              <p className="text-sm text-white/60 mb-6">{project.category}</p>

              <div className="flex flex-wrap gap-4">
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105 active:scale-95 text-sm"
                  >
                    <Github size={18} /> GitHub Repo
                  </a>
                )}
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105 active:scale-95 text-sm"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Deep Dive Details */}
          <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[650px] custom-scrollbar">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                <Layers className="text-primary-400" size={20} /> Project Overview
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              {project.details && (
                <>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                    <Cpu className="text-secondary-400" size={20} /> Architecture & Features
                  </h3>
                  <div className="space-y-4 mb-8">
                    {project.details.features?.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                        <CheckCircle2 className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                        <p className="text-sm text-white/80 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                    💡 Technical Challenges Solved
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed bg-primary-500/5 border border-primary-500/20 p-4 rounded-2xl mb-6">
                    {project.details.challenges}
                  </p>
                </>
              )}
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs text-white/40 font-semibold">
              <span>Status: Completed & Deployed</span>
              <span>Bhoomikarani J • Portfolio</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
