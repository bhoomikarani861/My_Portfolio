import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Copy, Check, Terminal } from 'lucide-react';

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

const codeSnippets = {
  "React": {
    language: "jsx",
    code: `// Custom Hook for AI stream processing & state management
import { useState, useEffect } from 'react';

export const useAIStream = (prompt) => {
  const [response, setResponse] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (!prompt) return;
    setIsThinking(true);
    
    // Simulated AI WebSocket stream connection
    const timer = setTimeout(() => {
      setResponse('AI neural weights loaded successfully...');
      setIsThinking(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [prompt]);

  return { response, isThinking };
};`
  },
  "Python": {
    language: "python",
    code: `# Stable Diffusion Prompt Enhancement Pipeline
import torch
from diffusers import StableDiffusionPipeline

def generate_masterpiece(prompt: str, steps=50):
    model_id = "runwayml/stable-diffusion-v1-5"
    pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
    pipe = pipe.to("cuda")
    
    # Enhance prompt with premium stylistic modifiers
    enhanced = f"{prompt}, highly detailed, 8k resolution, octane render"
    image = pipe(enhanced, num_inference_steps=steps).images[0]
    return image`
  },
  "Machine Learning": {
    language: "python",
    code: `# Custom NLP Intent Classifier using PyTorch
import torch
import torch.nn as nn

class IntentClassifier(nn.Module):
    def __init__(self, vocab_size, embed_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(embed_dim, 128, batch_first=True)
        self.fc = nn.Linear(128, num_classes)
        
    def forward(self, x):
        embedded = self.embedding(x)
        _, (hn, _) = self.lstm(embedded)
        return self.fc(hn[-1])`
  },
  "Tailwind CSS": {
    language: "css",
    code: `/* Advanced Glassmorphism & Cyberpunk Glow Utilities */
@layer components {
  .premium-glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10 
           shadow-[0_8px_32px_rgba(0,0,0,0.37)] rounded-3xl;
  }
  
  .cyber-glow {
    @apply relative before:absolute before:-inset-0.5 before:bg-gradient-to-r 
           before:from-primary-500 before:to-accent-500 before:rounded-3xl 
           before:blur-md before:opacity-50 before:-z-10;
  }
}`
  }
};

const Skills = () => {
  const [selectedSnippet, setSelectedSnippet] = useState("React");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="section-padding bg-white/[0.01] relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical toolkit, combining robust frontend architecture with advanced artificial intelligence pipelines.
          </p>
        </motion.div>

        {/* Skill Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, x: catIdx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary-500 rounded-full" />
                {category.title}
              </h3>
              
              <div className="space-y-6 flex-grow">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white/80 text-sm">{skill.name}</span>
                      <span className="text-white/40 text-xs font-semibold">{skill.level}%</span>
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

        {/* Interactive Code Snippet Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border-white/10 overflow-hidden shadow-2xl bg-dark-surface/60 backdrop-blur-xl"
        >
          {/* Header / Tabs */}
          <div className="p-4 bg-white/5 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/80 font-bold text-sm">
              <Terminal size={18} className="text-primary-400" />
              <span>Interactive Code Showcase</span>
            </div>

            <div className="flex flex-wrap gap-1 bg-dark-bg p-1 rounded-2xl border border-white/10">
              {Object.keys(codeSnippets).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedSnippet(tech)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedSnippet === tech
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-md'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-semibold text-white transition-all active:scale-95 shadow-md"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Snippet'}</span>
            </button>
          </div>

          {/* Faux Window Bar */}
          <div className="px-6 py-3 bg-dark-bg/60 border-b border-white/5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-[11px] text-white/40 ml-4 font-mono">bhoomi@{selectedSnippet.toLowerCase()}-showcase ~ % cat sample.{codeSnippets[selectedSnippet].language}</span>
          </div>

          {/* Code Display */}
          <div className="p-6 md:p-8 bg-dark-bg/90 font-mono text-xs md:text-sm overflow-x-auto text-white/90 leading-relaxed custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.pre
                key={selectedSnippet}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {codeSnippets[selectedSnippet].code}
              </motion.pre>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Quick Tech Grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
          {["React", "Python", "Tailwind CSS", "Machine Learning", "Node.js", "Firebase", "Figma", "Git", "NLP", "FastAPI"].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
              className="px-6 py-3 glass rounded-2xl border-white/5 text-sm font-bold text-white/70 hover:text-primary-400 hover:border-primary-500/40 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]"
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
