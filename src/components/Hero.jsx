import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax based on center of screen
  const getParallaxOffset = (factor) => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return { x, y };
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* 3D Floating Hardware Background Elements */}
      <motion.div 
        className="absolute hidden md:block opacity-20 pointer-events-none"
        animate={{
          x: getParallaxOffset(0.02).x,
          y: getParallaxOffset(0.02).y,
          rotateZ: [0, 5, 0, -5, 0],
        }}
        transition={{ rotateZ: { duration: 10, repeat: Infinity, ease: "linear" } }}
        style={{ top: '20%', right: '15%' }}
      >
        <Cpu size={200} color="#00f0ff" strokeWidth={0.5} />
      </motion.div>

      <motion.div 
        className="absolute hidden md:block opacity-10 pointer-events-none"
        animate={{
          x: getParallaxOffset(-0.04).x,
          y: getParallaxOffset(-0.04).y,
          rotateZ: [0, -10, 0, 10, 0],
        }}
        transition={{ rotateZ: { duration: 15, repeat: Infinity, ease: "linear" } }}
        style={{ bottom: '15%', left: '10%' }}
      >
        <Activity size={150} color="#00ffcc" strokeWidth={0.5} />
      </motion.div>

      <div className="z-10 flex flex-col items-center text-center space-y-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-48 h-48 md:w-56 md:h-56 mb-8"
          >
            <div className="absolute inset-0 rounded-full border-2 border-circuit-blue shadow-neon animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border border-neon-accent shadow-[0_0_15px_rgba(0,255,204,0.3)] animate-[spin_15s_linear_infinite_reverse]"></div>
            <img 
              src="/profile.png" 
              alt="Salmanul Faris M S" 
              className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-full z-10 filter brightness-110 contrast-125"
            />
            {/* Overlay glow */}
            <div className="absolute inset-4 rounded-full shadow-[inset_0_0_20px_rgba(0,240,255,0.4)] z-20 pointer-events-none"></div>
          </motion.div>
          <h1 className="text-[clamp(1.5rem,6.5vw,8rem)] whitespace-nowrap font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
            Salmanul Faris M S<span className="text-circuit-blue text-glow">.</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-mono text-circuit-blue uppercase tracking-widest mt-4">
            Hardware & Chip-Level Tech
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Restoring Technology from the Silicon Up."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row gap-4"
        >
          <a href="#workbench" className="px-8 py-3 bg-circuit-blue text-oled-black font-bold uppercase tracking-wider rounded border border-circuit-blue hover:bg-transparent hover:text-circuit-blue transition-all shadow-neon">
            View Diagnostics
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent text-white font-bold uppercase tracking-wider rounded border border-gray-600 hover:border-circuit-blue hover:text-circuit-blue transition-all">
            Initiate Contact
          </a>
          <a href="#" className="px-8 py-3 bg-transparent text-neon-accent font-bold uppercase tracking-wider rounded border border-neon-accent hover:bg-neon-accent hover:text-black transition-all flex items-center justify-center gap-2 group">
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Interactive Element that follows cursor slightly */}
      <motion.div 
        className="absolute z-20 pointer-events-none mix-blend-screen"
        animate={{
          x: mousePosition.x - 24, // Center icon
          y: mousePosition.y - 24,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.5 }}
      >
         <Zap size={48} className="text-circuit-blue opacity-50 blur-[2px]" />
      </motion.div>
      
    </section>
  );
};

export default Hero;
