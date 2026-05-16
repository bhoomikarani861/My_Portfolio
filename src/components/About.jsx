import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Zap } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '10+', icon: <Zap className="text-primary-400" /> },
  { label: 'Skills Mastered', value: '15+', icon: <Award className="text-secondary-400" /> },
  { label: 'Tech Stack', value: 'React/ML', icon: <Briefcase className="text-accent-400" /> },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                I am a dedicated Computer Science Engineering student at <span className="text-white font-medium">PES College of Engineering, Mandya (2023 – 2027)</span>. 
                My journey in technology is driven by a deep curiosity for how Artificial Intelligence can be integrated with modern web applications to create smarter, more intuitive user experiences.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Beyond coding, I am passionate about continuous learning and staying updated with the latest trends in Machine Learning and Frontend Engineering. I believe in building software that not only solves problems but also provides a delightful experience for the end-user.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="glass-card flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-3 bg-white/5 rounded-xl">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card border-l-4 border-l-primary-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-500/10 rounded-full">
                  <GraduationCap className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-white/40 text-sm">Academic Background</p>
                </div>
              </div>

              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                  <div className="text-sm text-primary-400 font-bold mb-1">2023 - 2027</div>
                  <h4 className="text-lg font-bold">BE in Computer Science Engineering</h4>
                  <p className="text-white/60">PES College of Engineering, Mandya</p>
                  <p className="text-white/40 text-sm mt-2 italic">Focusing on AI, Data Structures, and Web Technologies.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-white/20" />
                  <div className="text-sm text-white/40 font-bold mb-1">2020 - 2022</div>
                  <h4 className="text-lg font-bold">Class XII – PCMB (92.16%)</h4>
                  <p className="text-white/60">Vishwamanava Composite PU College, Mandya</p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-white/20" />
                  <div className="text-sm text-white/40 font-bold mb-1">Secondary Education</div>
                  <h4 className="text-lg font-bold">Class X (98.24%)</h4>
                  <p className="text-white/60">Sri Madhava Vidhyalaya, Mandya</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
