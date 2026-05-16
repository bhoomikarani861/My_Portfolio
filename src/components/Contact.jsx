import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error', or empty

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 👇 STEP 1: Get a free key from https://web3forms.com/
    // 👇 STEP 2: Either paste it below, or add VITE_WEB3FORMS_KEY to your .env file
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "6d96afdc-4793-444c-bba2-2ec498469d5d"; 

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      alert("Action Required: To make this form work, please get your free Access Key from web3forms.com and paste it into Contact.jsx or your .env file.");
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000); // Reset after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="blob bottom-[-10%] left-[-10%] opacity-10" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Get In <span className="text-gradient">Touch</span></h2>
              <p className="text-white/60 mb-12 leading-relaxed max-w-lg">
                I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Email</p>
                    <a href="mailto:bhoomigowda861@gmail.com" className="text-lg hover:text-primary-400 transition-colors">
                      bhoomigowda861@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-secondary-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg text-white">Mandya, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent-400">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Social</p>
                    <div className="flex gap-4 mt-1">
                      <a href="https://github.com/bhoomikarani861" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors"><Github size={20} /></a>
                      <a href="https://www.linkedin.com/in/bhooomikarani-j/" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Message</label>
                  <textarea 
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`btn-primary w-full justify-center py-4 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-primary-400 bg-primary-500/10 p-4 rounded-xl mt-4">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-xl mt-4">
                    <AlertCircle size={20} />
                    <span>Oops! Something went wrong. Please try again later.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
