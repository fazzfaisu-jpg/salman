import React from 'react';
import { motion } from 'framer-motion';
import { Microchip, Cpu, Wrench, TerminalSquare, HardDrive, MonitorSpeaker, Activity } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: 'Chip-Level Repair',
      description: 'Precision component replacement and microscopic circuitry restoration for dead logic boards.',
      icon: <Microchip className="w-8 h-8 text-circuit-blue" />
    },
    {
      id: 2,
      title: 'Micro-Soldering',
      description: 'Expert-level soldering under magnification for delicate SMCs, ICs, and connector replacements.',
      icon: <TerminalSquare className="w-8 h-8 text-neon-accent" />
    },
    {
      id: 3,
      title: 'Hardware Diagnostics',
      description: 'Deep-dive fault finding using schematics,Board View & multimeters',
      icon: <Activity className="w-8 h-8 text-purple-400" />
    },
    {
      id: 4,
      title: 'OS Deployment',
      description: 'Custom automated deployment, registry configurations, and secure environment setups.',
      icon: <HardDrive className="w-8 h-8 text-blue-400" />
    }
  ];

  // We need to import Activity if not imported from lucide-react, wait, Activity isn't in lucide-react destructuring above.
  // I will fix the imports.

  return (
    <section id="lab" className="relative py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-circuit-blue to-neon-accent">
          Technical Lab
        </h2>
        <div className="w-24 h-1 bg-circuit-blue mx-auto mt-4 rounded-full shadow-neon"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-8 group overflow-hidden relative"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-circuit-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex items-start gap-6">
              <div className="p-4 rounded-lg bg-black/50 border border-gray-800 group-hover:border-circuit-blue/50 transition-colors shadow-inner">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 font-mono group-hover:text-circuit-blue transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {skill.description}
                </p>
              </div>
            </div>

            {/* Background Floating Nodes inside cards */}
            <motion.div
               className="absolute -bottom-6 -right-6 opacity-10"
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
               <Cpu size={120} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
