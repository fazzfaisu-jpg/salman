import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Wrench } from 'lucide-react';

const Experience = () => {
  return (
    <section id="workbench" className="relative py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-circuit-blue to-neon-accent">
          The Workbench
        </h2>
        <div className="w-24 h-1 bg-circuit-blue mx-auto mt-4 rounded-full shadow-neon"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-circuit-blue/50 via-circuit-blue/20 to-transparent"></div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          {/* Center Timeline Node */}
          <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-circuit-blue shadow-neon transform -translate-x-1/2 z-10 flex items-center justify-center">
             <div className="w-2 h-2 rounded-full bg-oled-black"></div>
          </div>

          {/* Content Card */}
          <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 w-full text-left md:text-right">
            <div className="glass-panel p-8 relative group overflow-hidden">
               {/* Animated Background Line */}
              <div className="absolute top-0 right-0 w-1 h-full bg-circuit-blue transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 hidden md:block"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-circuit-blue transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 md:hidden"></div>

              <div className="flex items-center gap-2 mb-2 md:justify-end text-circuit-blue">
                <Briefcase size={18} />
                <span className="font-mono text-sm tracking-widest uppercase">Current Deployment (1 Year)</span>
              </div>
              <h3 className="text-3xl font-black mb-1">Technician</h3>
              <h4 className="text-xl text-gray-400 mb-4 font-mono">Hypertech Digital</h4>
              
              <div className="flex items-center gap-2 mb-6 text-gray-500 md:justify-end">
                <MapPin size={16} />
                <span>Kerala, India</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Operating at the intersection of hardware and logic. Specializing in diagnosing 
                complex motherboard failures, executing precision micro-soldering repairs, and 
                deploying robust OS environments for enterprise and consumer systems.
              </p>

              <div className="flex flex-wrap gap-2 md:justify-end">
                <span className="px-3 py-1 bg-black/40 border border-gray-700 rounded-full text-xs font-mono text-neon-accent">Motherboards</span>
                <span className="px-3 py-1 bg-black/40 border border-gray-700 rounded-full text-xs font-mono text-neon-accent">SMCs</span>
                <span className="px-3 py-1 bg-black/40 border border-gray-700 rounded-full text-xs font-mono text-neon-accent">Diagnostics</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-1/2 pl-16">
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="text-circuit-blue/20"
            >
               <Wrench size={120} strokeWidth={0.5} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
