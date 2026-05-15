import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} className="text-primary-500" />,
    title: "Frontend Development",
    description: "Building high-performance, interactive user interfaces using modern React best practices.",
    tags: ["React", "JavaScript", "Animations"]
  },
  {
    icon: <Layout size={32} className="text-secondary-500" />,
    title: "Web Application Design",
    description: "Designing scalable and maintainable web architectures with clean, modern aesthetics.",
    tags: ["UI/UX", "Vite", "Architecture"]
  },
  {
    icon: <Smartphone size={32} className="text-accent-500" />,
    title: "Responsive Solutions",
    description: "Ensuring seamless user experiences across all devices, from mobile to ultra-wide desktops.",
    tags: ["Tailwind CSS", "Mobile First", "PWA"]
  },
  {
    icon: <Database size={32} className="text-primary-400" />,
    title: "AI Integration",
    description: "Integrating intelligent features and machine learning models into web applications.",
    tags: ["Python", "ML Models", "API Integration"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="blob top-1/2 left-[-10%] opacity-10" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core <span className="text-gradient">Services</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver high-quality digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold text-primary-400 px-2 py-1 bg-primary-400/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
