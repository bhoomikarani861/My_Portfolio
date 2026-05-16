import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
const projects = [
  {
    title: "AI Chatbot",
    category: "Machine Learning / React",
    description: "An intelligent conversational agent featuring natural language processing and a modern chat interface.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Python", "NLP"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://chat-bot-three-phi-98.vercel.app",
    featured: true
  },
  {
    title: "Voice Translator",
    category: "Speech AI / Web",
    description: "Real-time speech-to-speech translation platform with support for multiple regional languages.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
    tags: ["Web Speech API", "React", "Next.js"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://translator-hexf.vercel.app",
    featured: false
  },
  {
    title: "AI Image Generator",
    category: "Generative AI",
    description: "Creative tool that transforms text prompts into high-quality images using stable diffusion models.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Stable Diffusion", "Python", "React"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://image-generator-five-umber.vercel.app/",
    featured: false
  },
  {
    title: "Student Management System",
    category: "Full Stack",
    description: "Comprehensive platform for educational institutions to manage student results and data efficiently.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/bhoomikarani861",
    demo: "https://smart-student-result-management-sys.vercel.app/login.html",
    featured: true
  }
];




const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-white/40">
              A curated selection of my recent work, ranging from AI experiments to full-stack applications.
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-outline text-sm"
          >
            View All Projects <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => project.demo !== '#' && window.open(project.demo, '_blank')}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Overlay */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-primary-400 font-medium mb-4">{project.category}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-primary-500 transition-all relative z-10"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-accent-500 transition-all relative z-10"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-white/40 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 max-w-xl">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
