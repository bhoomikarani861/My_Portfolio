import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, Check } from 'lucide-react';

const themes = [
  {
    name: 'Rose Cyberpunk',
    colors: {
      '--primary': '#f43f5e',
      '--secondary': '#db2777',
      '--accent': '#ea580c',
      '--primary-400': '251 113 133',
      '--primary-500': '244 63 94',
      '--primary-600': '225 29 72',
      '--secondary-400': '244 114 182',
      '--secondary-500': '219 39 119',
      '--accent-400': '251 146 60',
      '--accent-500': '234 88 12',
      '--dark-bg': '2 6 23',
      '--dark-surface': '15 23 42',
      '--dark-card': '30 41 59',
    },
    preview: 'from-rose-500 via-pink-500 to-orange-500',
  },
  {
    name: 'Neon Cyan',
    colors: {
      '--primary': '#06b6d4',
      '--secondary': '#a855f7',
      '--accent': '#3b82f6',
      '--primary-400': '34 211 238',
      '--primary-500': '6 182 212',
      '--primary-600': '8 145 178',
      '--secondary-400': '192 132 252',
      '--secondary-500': '168 85 247',
      '--accent-400': '96 165 250',
      '--accent-500': '59 130 246',
      '--dark-bg': '7 11 25',
      '--dark-surface': '17 24 39',
      '--dark-card': '31 41 55',
    },
    preview: 'from-cyan-500 via-purple-500 to-blue-500',
  },
  {
    name: 'Emerald AI',
    colors: {
      '--primary': '#10b981',
      '--secondary': '#14b8a6',
      '--accent': '#84cc16',
      '--primary-400': '52 211 153',
      '--primary-500': '16 185 129',
      '--primary-600': '5 150 105',
      '--secondary-400': '45 212 191',
      '--secondary-500': '20 184 166',
      '--accent-400': '163 230 53',
      '--accent-500': '132 204 22',
      '--dark-bg': '4 16 12',
      '--dark-surface': '6 78 59',
      '--dark-card': '6 95 70',
    },
    preview: 'from-emerald-500 via-teal-500 to-lime-500',
  },
  {
    name: 'Sunset Gold',
    colors: {
      '--primary': '#eab308',
      '--secondary': '#f97316',
      '--accent': '#ef4444',
      '--primary-400': '250 204 21',
      '--primary-500': '234 179 8',
      '--primary-600': '202 138 4',
      '--secondary-400': '251 146 60',
      '--secondary-500': '249 115 22',
      '--accent-400': '248 113 113',
      '--accent-500': '239 68 68',
      '--dark-bg': '18 12 6',
      '--dark-surface': '41 28 16',
      '--dark-card': '61 42 24',
    },
    preview: 'from-yellow-500 via-orange-500 to-red-500',
  },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('Rose Cyberpunk');

  const applyTheme = (theme) => {
    setActiveTheme(theme.name);
    Object.entries(theme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed left-6 bottom-6 md:bottom-8 z-50 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] text-white hover:border-primary-500 transition-all group"
        title="Customize Theme"
      >
        <Palette size={24} className="group-hover:text-primary-400 transition-colors animate-pulse-slow" />
      </motion.button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-6 bottom-24 z-50 w-80 glass rounded-3xl p-6 border-white/20 shadow-2xl bg-dark-surface/90 backdrop-blur-xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Palette size={20} className="text-primary-400" />
                <h3 className="font-bold text-lg text-white">Theme Customizer</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-white/60 text-xs mb-6 leading-relaxed">
              Experience the portfolio in your favorite aesthetic. Select a premium color palette below:
            </p>

            <div className="space-y-4">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(theme)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all ${
                    activeTheme === theme.name
                      ? 'bg-white/10 border-primary-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                      : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${theme.preview} shadow-md flex items-center justify-center`}>
                      {activeTheme === theme.name && <Check size={16} className="text-white font-bold" />}
                    </div>
                    <span className="font-semibold text-sm text-white/90">{theme.name}</span>
                  </div>
                  {activeTheme === theme.name && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full">
                      Active
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeCustomizer;
