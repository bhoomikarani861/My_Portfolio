import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "AI Chatbot",
    category: "Machine Learning",
    description: "An intelligent conversational agent featuring natural language processing and a modern chat interface.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Python", "NLP"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://chat-bot-three-phi-98.vercel.app",
    featured: true,
    details: {
      features: [
        "Advanced intent recognition utilizing Python NLP pipelines",
        "Responsive React frontend with real-time typing indicators and chat history",
        "Context-aware fallback mechanisms for unhandled queries"
      ],
      challenges: "Designing an asynchronous communication bridge between the Python backend and React frontend while maintaining sub-second response times for a fluid chat experience."
    }
  },
  {
    title: "Voice Translator",
    category: "Speech AI",
    description: "Real-time speech-to-speech translation platform with support for multiple regional languages.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
    tags: ["Web Speech API", "React", "Next.js"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://translator-hexf.vercel.app",
    featured: false,
    details: {
      features: [
        "Real-time audio stream capture using Web Speech API",
        "Dynamic language switching supporting over 10 regional dialects",
        "Optimized Next.js server-side rendering for instant page loads"
      ],
      challenges: "Handling cross-browser compatibility issues with native speech synthesis and recognition APIs across mobile and desktop environments."
    }
  },
  {
    title: "AI Image Generator",
    category: "Generative AI",
    description: "Creative tool that transforms text prompts into high-quality images using stable diffusion models.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Stable Diffusion", "Python", "React"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://image-generator-five-umber.vercel.app/",
    featured: false,
    details: {
      features: [
        "Integration with Stable Diffusion models for high-fidelity image synthesis",
        "Custom prompt enhancement engine to improve output detail and lighting",
        "Gallery view with image download and aspect ratio customization"
      ],
      challenges: "Managing long-running AI generation requests gracefully on the frontend with progress bars and retry logic without blocking the main UI thread."
    }
  },
  {
    title: "Student Management System",
    category: "Full Stack",
    description: "Comprehensive platform for educational institutions to manage student results and data efficiently.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://smart-student-result-management-sys.vercel.app/login.html",
    featured: true,
    details: {
      features: [
        "Secure role-based authentication for administrators, teachers, and students",
        "Automated GPA calculation and dynamic PDF report card generation",
        "Interactive analytics dashboard visualizing class performance trends"
      ],
      challenges: "Structuring the Firebase NoSQL database rules to ensure rigorous data privacy while enabling efficient multi-query aggregations for class leaderboards."
    }
  },
  {
    title: "Autonomous Drone Navigation Sim",
    category: "Machine Learning",
    description: "Simulation environment for autonomous drone obstacle avoidance using computer vision and reinforcement learning.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "PyTorch", "Simulation"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://github.com/bhoomikarani861",
    featured: false,
    details: {
      features: [
        "Computer vision pipeline utilizing OpenCV for real-time edge detection",
        "Trained PyTorch reinforcement learning agent for collision avoidance",
        "Telemetry dashboard displaying simulated flight metrics and sensor data"
      ],
      challenges: "Optimizing the neural network inference loop to run at 60 FPS within the simulated environment to ensure accurate real-time course correction."
    }
  },
  {
    title: "Smart Health Predictor",
    category: "Full Stack",
    description: "Predictive healthcare analytics web app providing early symptom risk assessment utilizing trained ML models.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "FastAPI", "scikit-learn"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://github.com/bhoomikarani861",
    featured: false,
    details: {
      features: [
        "FastAPI backend serving scikit-learn classification models",
        "Interactive multi-step questionnaire with dynamic input validation",
        "Secure, anonymized patient report generation with actionable insights"
      ],
      challenges: "Translating complex medical probability outputs from the machine learning model into intuitive, easy-to-understand visual charts for end users."
    }
  }
];

const categories = ["All", "Machine Learning", "Full Stack", "Speech AI", "Generative AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-white/40 leading-relaxed">
              Explore my portfolio of cutting-edge AI experiments, full-stack platforms, and advanced simulations. Click on any project for a deep dive into its architecture and challenges.
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/bhoomikarani861', '_blank')}
            className="btn-outline text-sm flex-shrink-0"
          >
            View GitHub Profile <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 cursor-pointer flex flex-col h-full hover:border-primary-500/50 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]"
              >
                {/* Image Overlay */}
                <div className="relative h-60 overflow-hidden flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Quick View Badge */}
                  <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full border-white/20 text-xs font-bold text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <Eye size={14} className="text-primary-400" /> Quick View
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-gradient-to-b from-transparent to-dark-surface/50">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded-full border border-primary-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                    <p className="text-xs text-secondary-400 font-semibold mb-4">{project.category}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center mt-auto">
                    <span className="text-xs text-white/40 font-medium group-hover:text-white/80 transition-colors">Click to explore details →</span>
                    <div className="flex gap-2">
                      {project.github && project.github !== '#' && (
                        <a 
                          href={project.github} 
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 bg-white/10 rounded-full hover:bg-primary-500 text-white transition-all shadow-md hover:scale-110"
                          title="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a 
                          href={project.demo} 
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 bg-white/10 rounded-full hover:bg-accent-500 text-white transition-all shadow-md hover:scale-110"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
