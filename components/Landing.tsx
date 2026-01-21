import React from 'react';
import { motion } from 'framer-motion';

interface LandingProps {
  onEnter: () => void;
}

const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-12 relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo Grande Doble Infinito Desfasado */}
        <div className="text-[#5C4D42] relative">
          <svg width="220" height="88" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <path id="singleInfinityLarge" d="M50,20 C35,35 20,35 20,20 C20,5 35,5 50,20 C65,35 80,35 80,20 C80,5 65,5 50,20" />
            </defs>
            
            {/* Infinito 1 */}
            <use href="#singleInfinityLarge" x="-10" strokeWidth="0.6" />
            
            {/* Infinito 2 */}
            <use href="#singleInfinityLarge" x="10" strokeWidth="0.6" />
          </svg>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4D42] tracking-[0.5em] uppercase pl-2">
            ITERABLE
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] md:text-xs text-[#5C4D42] uppercase tracking-[0.3em]"
          >
            Conectar. Deducir. Repetir.
          </motion.p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="group relative px-10 py-4 bg-transparent border border-[#5C4D42]/20 text-[#5C4D42] rounded-full overflow-hidden transition-all hover:border-[#5C4D42]/60"
      >
        <div className="absolute inset-0 w-0 bg-[#5C4D42]/5 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-xs font-bold uppercase tracking-[0.25em]">Ingresar</span>
      </motion.button>
    </div>
  );
};

export default Landing;