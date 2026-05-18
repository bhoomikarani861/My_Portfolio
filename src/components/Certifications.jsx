import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Trophy, Star } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: Jan 2025",
    icon: <ShieldCheck size={32} className="text-primary-400" />,
    badgeColor: "from-rose-500/20 to-orange-500/20",
    borderColor: "border-primary-500/30",
    category: "Cloud AI",
    link: "https://aws.amazon.com/certification/"
  },
  {
    title: "Google Cloud Professional AI Engineer",
    issuer: "Google Cloud Academy",
    date: "Issued: Nov 2024",
    icon: <Award size={32} className="text-secondary-400" />,
    badgeColor: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-secondary-500/30",
    category: "Professional Badge",
    link: "https://cloud.google.com/certification"
  },
  {
    title: "National AI Hackathon Winner 2024",
    issuer: "TechInnovation India",
    date: "Awarded: Aug 2024",
    icon: <Trophy size={32} className="text-yellow-400" />,
    badgeColor: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    category: "First Place Winner",
    link: "https://github.com/bhoomikarani861"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera & DeepLearning.AI",
    date: "Issued: May 2024",
    icon: <Star size={32} className="text-accent-400" />,
    badgeColor: "from-orange-500/20 to-red-500/20",
    borderColor: "border-accent-500/30",
    category: "Neural Networks",
    link: "https://www.coursera.org"
  },
  {
    title: "Advanced React & Next.js Architecture",
    issuer: "Frontend Masters",
    date: "Issued: Feb 2024",
    icon: <CheckCircle size={32} className="text-cyan-400" />,
    badgeColor: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    category: "Frontend Mastery",
    link: "https://frontendmasters.com"
  },
  {
    title: "PES Innovation Challenge 2024",
    issuer: "PES College of Engineering",
    date: "Awarded: Jan 2024",
    icon: <Trophy size={32} className="text-emerald-400" />,
    badgeColor: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    category: "Best Campus Project",
    link: "https://github.com/bhoomikarani861"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="blob top-1/3 right-[-5%] opacity-10" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications & <span className="text-gradient">Achievements</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
            Recognitions, professional cloud certifications, and hackathon milestones that validate my expertise in building scalable, AI-driven web architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => window.open(cert.link, '_blank')}
              className={`glass-card relative overflow-hidden flex flex-col justify-between h-full border ${cert.borderColor} cursor-pointer group shadow-xl hover:shadow-[0_0_25px_rgba(244,63,94,0.15)] bg-gradient-to-b from-white/5 to-transparent`}
            >
              {/* Background Glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-tr ${cert.badgeColor} blur-2xl group-hover:scale-150 transition-transform duration-700`} />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all shadow-inner">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors leading-snug">{cert.title}</h3>
                <p className="text-sm text-white/60 mb-4">{cert.issuer}</p>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center mt-auto z-10">
                <span className="text-xs text-white/40 font-semibold">{cert.date}</span>
                <span className="flex items-center gap-1 text-xs font-bold text-primary-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  Verify Credential <ExternalLink size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
