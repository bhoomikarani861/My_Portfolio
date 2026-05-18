import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Code2, Terminal, Flame, CheckCircle2 } from 'lucide-react';

const statsData = [
  { label: "Total Contributions", value: "1,240+", icon: <GitBranch className="text-primary-400" size={24} />, desc: "Across 15+ public repositories" },
  { label: "LeetCode Solved", value: "350+", icon: <Code2 className="text-secondary-400" size={24} />, desc: "Top 15% in global contests" },
  { label: "Coding Hours", value: "1,850+", icon: <Terminal className="text-accent-400" size={24} />, desc: "Building & debugging AI pipelines" },
  { label: "Current Streak", value: "42 Days", icon: <Flame className="text-yellow-400" size={24} />, desc: "Consistent daily commits" }
];

// Simulated 12 weeks of 7 days contribution heatmap
const generateHeatmap = () => {
  const weeks = [];
  const intensities = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 0: none, 1: light, 4: heavy
  for (let w = 0; w < 16; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const randomIntensity = intensities[Math.floor(Math.random() * intensities.length)];
      days.push(randomIntensity);
    }
    weeks.push(days);
  }
  return weeks;
};

const heatmapWeeks = generateHeatmap();

const ExperienceStats = () => {
  return (
    <section id="stats" className="section-padding bg-white/[0.01] relative">
      <div className="blob bottom-1/3 left-[-5%] opacity-10" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Continuous <span className="text-gradient">Growth & Activity</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            A real-time snapshot of my active development habits, problem-solving consistency, and dedication to mastering algorithmic complexity.
          </p>
        </motion.div>

        {/* 4 Main Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card flex flex-col justify-between border-white/10 hover:border-primary-500/40 transition-all bg-gradient-to-b from-white/5 to-transparent shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                  {stat.icon}
                </div>
                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">{stat.label}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Heatmap & LeetCode Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* GitHub Heatmap Simulation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-3xl p-8 border-white/10 shadow-2xl bg-dark-surface/60 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <GitBranch size={20} className="text-primary-400" /> Simulated GitHub Contributions
                  </h3>
                  <p className="text-xs text-white/40 mt-1">Showing daily commit intensity over the last 16 weeks</p>
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  Active Contributor
                </span>
              </div>

              {/* Heatmap Grid */}
              <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
                <div className="flex flex-col gap-2 justify-around text-[10px] text-white/40 font-mono pr-2 select-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                {heatmapWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-2 flex-shrink-0">
                    {week.map((intensity, dIdx) => {
                      let colorClass = "bg-white/5 border-white/5";
                      if (intensity === 1) colorClass = "bg-primary-500/20 border-primary-500/30";
                      if (intensity === 2) colorClass = "bg-primary-500/40 border-primary-500/50";
                      if (intensity === 3) colorClass = "bg-primary-500/60 border-primary-500/70";
                      if (intensity === 4) colorClass = "bg-primary-500 border-primary-400 shadow-[0_0_10px_rgba(244,63,94,0.5)]";

                      return (
                        <div
                          key={dIdx}
                          className={`w-4 h-4 rounded-md border ${colorClass} transition-all hover:scale-125 hover:border-white cursor-pointer`}
                          title={`Contributions: ${intensity * 3} commits`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs text-white/40 font-semibold mt-6">
              <span>Less ← ⬛ 🟩 🟩 🟩 🟩 → More</span>
              <span>Updated dynamically</span>
            </div>
          </motion.div>

          {/* LeetCode Difficulty Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border-white/10 shadow-2xl bg-dark-surface/60 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <Code2 size={20} className="text-secondary-400" /> LeetCode Metrics
                </h3>
                <span className="text-xs font-bold text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                  350+ Solved
                </span>
              </div>

              <div className="space-y-6 mb-8">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 size={16} /> Easy
                    </span>
                    <span className="text-white/80 font-mono font-bold">180 / 350</span>
                  </div>
                  <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '51%' }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-yellow-400 flex items-center gap-1.5">
                      <CheckCircle2 size={16} /> Medium
                    </span>
                    <span className="text-white/80 font-mono font-bold">130 / 350</span>
                  </div>
                  <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '37%' }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-rose-400 flex items-center gap-1.5">
                      <CheckCircle2 size={16} /> Hard
                    </span>
                    <span className="text-white/80 font-mono font-bold">40 / 350</span>
                  </div>
                  <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '12%' }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-rose-500 to-red-400 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs text-white/40 font-semibold">
              <span>Goal: 500+ Solved</span>
              <span>Daily Practice</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats;
