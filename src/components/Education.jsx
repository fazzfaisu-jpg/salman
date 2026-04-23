import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const credentials = [
    {
      id: 1,
      type: 'Higher Secondary',
      title: '+2 Humanities',
      institution: 'State Board of Education, Kerala',
      year: 'Completed',
      icon: <BookOpen size={24} className="text-circuit-blue" />
    },
    {
      id: 2,
      type: 'Certification',
      title: 'Mobile & Laptop Chip-Level Servicing',
      institution: 'Technical Training Institute',
      year: 'Completed',
      icon: <Award size={24} className="text-neon-accent" />
    }
  ];

  return (
    <section id="education" className="relative py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-circuit-blue to-neon-accent">
          Academic Protocol
        </h2>
        <div className="w-24 h-1 bg-circuit-blue mx-auto mt-4 rounded-full shadow-neon"></div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 px-4 md:px-0">
        {credentials.map((cred, index) => (
          <motion.div
            key={cred.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-panel p-8 group relative overflow-hidden flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-circuit-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 rounded-full bg-black/50 border border-gray-800 flex items-center justify-center mb-6 shadow-inner group-hover:border-circuit-blue/50 transition-colors">
              {cred.icon}
            </div>

            <span className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-2">
              {cred.type}
            </span>
            <h3 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-circuit-blue transition-colors">
              {cred.title}
            </h3>
            <p className="text-gray-400 font-mono text-sm mb-4">
              {cred.institution}
            </p>
            <div className="mt-auto inline-block px-4 py-1 bg-black/40 border border-gray-800 rounded-full text-sm font-mono text-neon-accent">
              {cred.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
