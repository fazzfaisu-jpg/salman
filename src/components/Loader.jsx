import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "INITIALIZING KERNEL...",
    "LOADING HARDWARE DRIVERS...",
    "MOUNTING SYSTEM VOLUMES...",
    "ESTABLISHING SECURE CONNECTION...",
    "BOOT SEQUENCE COMPLETE."
  ];

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // Random increments
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Update text based on progress
    if (progress < 20) setTextIndex(0);
    else if (progress < 40) setTextIndex(1);
    else if (progress < 70) setTextIndex(2);
    else if (progress < 95) setTextIndex(3);
    else setTextIndex(4);
  }, [progress]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-oled-black flex flex-col items-center justify-center p-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* Spinning Tech Icon */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative mb-12 text-circuit-blue"
        >
          <Cpu size={64} strokeWidth={1} />
          {/* Outer Ring */}
          <div className="absolute inset-[-20px] rounded-full border-t-2 border-r-2 border-circuit-blue/30 animate-spin"></div>
          <div className="absolute inset-[-40px] rounded-full border-b-2 border-l-2 border-neon-accent/20 animate-[spin_3s_linear_infinite_reverse]"></div>
        </motion.div>

        {/* Terminal Window */}
        <div className="w-full glass-panel border border-gray-800 rounded bg-black/80 overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.1)]">
          <div className="bg-gray-900/80 px-3 py-2 flex items-center gap-2 border-b border-gray-800">
            <Terminal size={14} className="text-gray-500" />
            <span className="text-xs font-mono text-gray-500">boot.log</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex justify-between text-gray-400 mb-2">
              <span>SYSTEM_BOOTUP</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full h-1 bg-gray-900 rounded mb-4 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-circuit-blue to-neon-accent shadow-neon"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Typing Text */}
            <div className="h-6 text-circuit-blue text-xs tracking-widest uppercase">
              &gt; {loadingTexts[textIndex]}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ duration: 0.5, repeat: Infinity }}
              >_</motion.span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;
