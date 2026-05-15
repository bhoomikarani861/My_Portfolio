import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob top-[10%] left-[-10%] animate-pulse-slow" />
      <div className="blob bottom-[10%] right-[-10%] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary-400 font-semibold mb-4 tracking-widest uppercase text-sm">
                Software Engineer & AI Enthusiast
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Hi, I'm <span className="text-gradient">Bhoomikarani J</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Aspiring software engineer with a focus on <span className="text-white font-medium">React, Python, and Machine Learning</span>. 
                Passionate about developing scalable applications and solving complex technical challenges.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  <button className="btn-primary">
                    View Projects <ExternalLink size={18} />
                  </button>
                </Link>
                <button className="btn-outline">
                  Download Resume <Download size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-primary-500 via-secondary-500 to-accent-500 animate-glow">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-bg bg-dark-surface">
                <img 
                  src="/profile_picture_1778862316612.png" 
                  alt="Bhoomikarani J" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
            
            {/* Floating Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border-primary-500/30 text-xs font-bold"
            >
              🚀 AI Specialist
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 -left-8 glass px-4 py-2 rounded-xl border-secondary-500/30 text-xs font-bold"
            >
              💻 React Dev
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
