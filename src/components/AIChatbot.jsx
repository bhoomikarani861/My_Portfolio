import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Minus } from 'lucide-react';

const initialMessages = [
  {
    sender: 'bot',
    text: "Hi there! 👋 I'm Virtual Bhoomi, an AI assistant built to help you explore Bhoomi's portfolio. Ask me anything about her skills, projects, education, or how to get in touch!",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const quickPrompts = [
  "What is your tech stack?",
  "Tell me about your AI experience",
  "How can I contact you?",
  "Where do you study?"
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAIResponse = (userMsg) => {
    const query = userMsg.toLowerCase();
    let response = "";

    if (query.includes('tech') || query.includes('stack') || query.includes('skill') || query.includes('react') || query.includes('python')) {
      response = "Bhoomi specializes in Frontend Development (React, JavaScript, Tailwind CSS) and AI/Machine Learning (Python, NLP, Stable Diffusion). She is also experienced with Firebase, Node.js, and Git!";
    } else if (query.includes('ai') || query.includes('ml') || query.includes('experience') || query.includes('machine learning')) {
      response = "Bhoomi has built several AI-powered projects, including an intelligent NLP Chatbot, a Voice Translator using Speech AI, and a Generative AI Image Generator leveraging Stable Diffusion models!";
    } else if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('touch')) {
      response = "You can reach Bhoomi via email at bhoomigowda861@gmail.com or connect with her on LinkedIn. Feel free to use the contact form at the bottom of the page!";
    } else if (query.includes('education') || query.includes('study') || query.includes('college') || query.includes('degree') || query.includes('pes')) {
      response = "She is currently pursuing her Bachelor of Engineering (BE) in Computer Science Engineering at PES College of Engineering, Mandya (2023–2027), focusing on AI, Data Structures, and Web Technologies.";
    } else if (query.includes('project') || query.includes('work') || query.includes('portfolio')) {
      response = "Check out the Featured Projects section! Highlights include an AI Chatbot, Voice Translator, AI Image Generator, and a Full-Stack Student Management System.";
    } else if (query.includes('resume') || query.includes('cv') || query.includes('download')) {
      response = "You can view and download Bhoomi's official resume by clicking the 'View Resume' button in the Hero section at the top of the page!";
    } else if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
      response = "Hello! How can I help you explore Bhoomi's portfolio today?";
    } else {
      response = "That's a great question! While I'm an AI simulation focused on Bhoomi's professional background, I highly recommend reaching out to her directly at bhoomigowda861@gmail.com for a detailed chat!";
    }

    return response;
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAIResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: aiReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed right-6 bottom-6 md:bottom-8 z-50 p-4 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.6)] text-white flex items-center gap-2 group"
        title="Chat with Virtual Bhoomi"
      >
        <Bot size={24} className="animate-bounce" />
        <span className="hidden md:inline font-semibold text-sm pr-1">Chat with AI</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: isMinimized ? 380 : 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed right-6 bottom-24 z-50 w-[350px] md:w-[380px] h-[500px] glass rounded-3xl border-white/20 shadow-2xl flex flex-col bg-dark-surface/95 backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-600/80 via-secondary-500/80 to-accent-500/80 backdrop-blur-md flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center border border-white/20 shadow-inner">
                  <Bot size={22} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                    Virtual Bhoomi <Sparkles size={14} className="text-yellow-400 animate-spin" />
                  </h3>
                  <span className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online AI Assistant
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  title={isMinimized ? "Expand" : "Minimize"}
                >
                  <Minus size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  title="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0 text-primary-400 mt-1">
                      <Bot size={16} />
                    </div>
                  )}

                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-tr-none shadow-lg'
                      : 'bg-white/10 border border-white/10 text-white/90 rounded-tl-none shadow-md'
                  }`}>
                    <p>{msg.text}</p>
                    <span className={`text-[9px] block mt-1.5 opacity-60 ${msg.sender === 'user' ? 'text-right text-white' : 'text-white/60'}`}>
                      {msg.time}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white mt-1">
                      <User size={16} />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0 text-primary-400">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-accent-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="p-3 bg-white/5 border-t border-white/10 overflow-x-auto flex gap-2 no-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="text-[11px] whitespace-nowrap bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/40 text-white/80 hover:text-white px-3 py-1.5 rounded-full transition-all flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-dark-surface border-t border-white/10 flex gap-2 items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Virtual Bhoomi..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-primary-500 outline-none transition-all placeholder:text-white/30"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputText.trim()}
                className={`p-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-all shadow-md flex items-center justify-center ${
                  !inputText.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
