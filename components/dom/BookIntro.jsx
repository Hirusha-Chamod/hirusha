"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookIntro({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    // 1. Play the Frieren wind/magic sound
    // const audio = new Audio('/sounds/ancient-wind.mp3');
    // audio.play();

    // 2. Trigger the book opening animation
    setIsOpen(true);

    // 3. Unmount this intro screen after the animation finishes (2.5 seconds)
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          // Fades out the entire wrapper at the very end
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1a14]"
          // The perspective class is CRITICAL for the 3D book effect
          style={{ perspective: "1500px" }} 
        >
          {/* THE BOOK COVER */}
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { rotateY: 0 },
              // Swings open to the left, like a Western book
              open: { rotateY: -110 }, 
            }}
            transition={{ 
              duration: 2, 
              ease: [0.22, 1, 0.36, 1] // Heavy, slow, deliberate easing
            }}
            // The hinge is on the left
            style={{ transformOrigin: "left" }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#1a2e25] border-r-[8px] border-[#0a1410] shadow-[inset_-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Front Cover Content */}
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }} 
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center px-6"
            >
              <h1 className="text-[#d0e8e0] font-serif text-2xl md:text-4xl leading-relaxed max-w-2xl mb-12" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
                "30 years after the death of Himmel the Hero... <br/>
                <span className="text-[#f0d090] mt-4 block text-xl md:text-2xl">in Sri Lanka."</span>
              </h1>

              <button
                onClick={handleOpen}
                className="px-8 py-3 border border-[#f0d090]/40 text-[#f0d090] tracking-[0.2em] uppercase text-sm font-mono hover:bg-[#f0d090]/10 hover:border-[#f0d090] transition-all duration-500"
              >
                Begin Your Journey
              </button>
            </motion.div>
            
            {/* The Binding (Visual detail on the left edge) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a1410] to-transparent opacity-80" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}