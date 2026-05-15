import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold font-['Outfit'] text-gradient">
            Bhoomikarani<span className="text-white">.J</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/40 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Bhoomikarani J
          </div>
          
          <div className="text-white/40 text-sm">
            © {currentYear} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
