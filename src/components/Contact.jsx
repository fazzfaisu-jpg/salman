import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Code, Users, Mail, Wrench, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    message: '',
    type: 'general', // general, job, service
    deviceModel: '',
    issueDescription: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b6dfaf41-f8d7-4946-bb16-7a55884d07aa",
          to: "salmanulfaris3116@gmail.com",
          subject: `New Transmission from ${formState.name} - ${formState.type} Inquiry`,
          name: formState.name,
          email: formState.email,
          type: formState.type,
          message: formState.message,
          deviceModel: formState.deviceModel,
          issueDescription: formState.issueDescription,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', message: '', type: 'general', deviceModel: '', issueDescription: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Submission failed", result);
        alert("Transmission failed. Please verify your connection and try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Transmission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-circuit-blue to-neon-accent">
          Mission Control
        </h2>
        <div className="w-24 h-1 bg-circuit-blue mx-auto mt-4 rounded-full shadow-neon"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Terminal Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 glass-panel overflow-hidden border border-gray-800"
        >
          {/* Terminal Header */}
          <div className="bg-black/80 px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
                <Terminal size={18} className="text-gray-400" />
                <span className="text-sm font-mono text-gray-400">root@salman-sys:~# init_contact.sh</span>
            </div>
            {formState.type === 'service' && <Wrench size={16} className="text-circuit-blue animate-pulse" />}
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type Selector */}
              <div className="space-y-3 mb-8">
                <label className="text-circuit-blue font-mono text-sm uppercase tracking-wider block">
                  &gt; Select_Transmission_Protocol
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className={`cursor-pointer px-4 py-2 border rounded font-mono text-sm flex items-center gap-2 transition-all ${formState.type === 'general' ? 'border-circuit-blue text-circuit-blue bg-circuit-blue/10 shadow-[0_0_10px_rgba(0,240,255,0.2)]' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}>
                    <input type="radio" name="type" className="hidden" checked={formState.type === 'general'} onChange={() => setFormState({...formState, type: 'general'})} />
                    <span>General</span>
                  </label>
                  <label className={`cursor-pointer px-4 py-2 border rounded font-mono text-sm flex items-center gap-2 transition-all ${formState.type === 'job' ? 'border-neon-accent text-neon-accent bg-neon-accent/10 shadow-[0_0_10px_rgba(0,255,204,0.2)]' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}>
                    <input type="radio" name="type" className="hidden" checked={formState.type === 'job'} onChange={() => setFormState({...formState, type: 'job'})} />
                    <span>Job / Recruiting</span>
                  </label>
                  <label className={`cursor-pointer px-4 py-2 border rounded font-mono text-sm flex items-center gap-2 transition-all ${formState.type === 'service' ? 'border-purple-400 text-purple-400 bg-purple-400/10 shadow-[0_0_10px_rgba(192,132,252,0.2)]' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}>
                    <input type="radio" name="type" className="hidden" checked={formState.type === 'service'} onChange={() => setFormState({...formState, type: 'service'})} />
                    <span>Hardware Service Request</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-circuit-blue font-mono text-sm uppercase tracking-wider block">
                    &gt; Input_Identifier (Name)
                    </label>
                    <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-black/50 border border-gray-800 focus:border-circuit-blue rounded p-3 text-white font-mono focus:outline-none focus:ring-1 focus:ring-circuit-blue transition-colors"
                    placeholder="Enter your name..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-circuit-blue font-mono text-sm uppercase tracking-wider block">
                    &gt; Signal_Vector (Email)
                    </label>
                    <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-black/50 border border-gray-800 focus:border-circuit-blue rounded p-3 text-white font-mono focus:outline-none focus:ring-1 focus:ring-circuit-blue transition-colors"
                    placeholder="Enter your email..."
                    />
                </div>
              </div>

              {/* Dynamic Service Request Fields */}
              <AnimatePresence>
                {formState.type === 'service' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 overflow-hidden"
                  >
                    <div className="p-4 border border-purple-400/30 bg-purple-400/5 rounded">
                        <div className="space-y-2 mb-4">
                            <label className="text-purple-400 font-mono text-sm uppercase tracking-wider block">
                            &gt; Target_Hardware (Device Model)
                            </label>
                            <input 
                            type="text" 
                            required={formState.type === 'service'}
                            value={formState.deviceModel}
                            onChange={(e) => setFormState({...formState, deviceModel: e.target.value})}
                            className="w-full bg-black/50 border border-gray-800 focus:border-purple-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors"
                            placeholder="e.g. MacBook Pro M1 2020, Dell XPS 15..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-purple-400 font-mono text-sm uppercase tracking-wider block">
                            &gt; Diagnostic_Query (Issue Description)
                            </label>
                            <textarea 
                            required={formState.type === 'service'}
                            rows={3}
                            value={formState.issueDescription}
                            onChange={(e) => setFormState({...formState, issueDescription: e.target.value})}
                            className="w-full bg-black/50 border border-gray-800 focus:border-purple-400 rounded p-3 text-white font-mono focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                            placeholder="Describe the failure symptoms (e.g. liquid spill, dead logic board)..."
                            ></textarea>
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-circuit-blue font-mono text-sm uppercase tracking-wider block">
                  &gt; {formState.type === 'service' ? 'Additional_Notes' : 'Data_Payload'} (Message)
                </label>
                <textarea 
                  required={formState.type !== 'service'}
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/50 border border-gray-800 focus:border-circuit-blue rounded p-3 text-white font-mono focus:outline-none focus:ring-1 focus:ring-circuit-blue transition-colors resize-none"
                  placeholder={formState.type === 'job' ? "Enter job description or inquiry..." : "Enter transmission payload..."}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-transparent border border-circuit-blue text-circuit-blue font-bold uppercase tracking-widest hover:bg-circuit-blue hover:text-black transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] mt-4"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmitting...</span>
                ) : isSuccess ? (
                  <span className="text-neon-accent group-hover:text-black">Transmission Successful</span>
                ) : (
                  <>
                    <span>Execute Transmission</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/3 flex flex-col justify-center gap-8"
        >
          <div className="glass-panel p-6 flex items-start gap-4 hover:border-circuit-blue/50 transition-colors group cursor-pointer">
             <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-circuit-blue text-circuit-blue">
                <Mail size={24} />
             </div>
             <div>
                <h4 className="text-sm font-mono text-gray-400 mb-1">Direct Line</h4>
                <a href="mailto:salmanulfaris3116@gmail.com" className="text-lg font-bold group-hover:text-circuit-blue transition-colors">salmanulfaris3116@gmail.com</a>
             </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="glass-panel p-6 flex items-start gap-4 hover:border-green-400/50 transition-colors group cursor-pointer">
             <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-green-400 text-green-400">
                <Phone size={24} />
             </div>
             <div>
                <h4 className="text-sm font-mono text-gray-400 mb-1">Phone</h4>
                <a href="tel:+917025137538" className="text-lg font-bold group-hover:text-green-400 transition-colors">+91 7025137538</a>
             </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917025137538"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 flex items-center gap-4 hover:border-green-500/60 transition-colors group cursor-pointer no-underline"
          >
             <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-green-500 text-green-500">
                <MessageCircle size={24} />
             </div>
             <div>
                <h4 className="text-sm font-mono text-gray-400 mb-1">WhatsApp</h4>
                <span className="text-lg font-bold text-white group-hover:text-green-500 transition-colors">Message on WhatsApp</span>
             </div>
          </a>

          <div className="glass-panel p-6 flex items-start gap-4 hover:border-neon-accent/50 transition-colors group cursor-pointer">
             <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-neon-accent text-neon-accent">
                <Users size={24} />
             </div>
             <div>
                <h4 className="text-sm font-mono text-gray-400 mb-1">Professional Network</h4>
                <a href="#" className="text-lg font-bold group-hover:text-neon-accent transition-colors">LinkedIn Profile</a>
             </div>
          </div>

          <div className="glass-panel p-6 flex items-start gap-4 hover:border-gray-400 transition-colors group cursor-pointer">
             <div className="p-3 bg-black/50 rounded border border-gray-800 group-hover:border-white text-white">
                <Code size={24} />
             </div>
             <div>
                <h4 className="text-sm font-mono text-gray-400 mb-1">Code Repository</h4>
                <a href="#" className="text-lg font-bold group-hover:text-white transition-colors">GitHub Profile</a>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
