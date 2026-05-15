import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
      { name: "Tailwind CSS", level: 90, color: "from-sky-400 to-indigo-500" },
      { name: "UI/UX Design", level: 75, color: "from-pink-400 to-purple-500" },
    ]
  },
  {
    title: "Programming & AI",
    skills: [
      { name: "Python", level: 80, color: "from-blue-400 to-green-500" },
      { name: "Machine Learning", level: 70, color: "from-purple-400 to-pink-500" },
      { name: "GitHub", level: 85, color: "from-gray-400 to-black" },
      { name: "Responsive Design", level: 95, color: "from-teal-400 to-emerald-500" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white/[0.01]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit and the technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, x: catIdx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary-500 rounded-full" />
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white/80">{skill.name}</span>
                      <span className="text-white/40 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quick Tech Grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {["React", "Python", "Tailwind", "ML", "Node.js", "Firebase", "Figma"].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 glass rounded-xl border-white/5 text-sm font-bold text-white/60 hover:text-primary-400 hover:border-primary-500/30 transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
