
import React from 'react';
import { motion } from 'framer-motion';
import { GameMode } from '../types';

interface GameMenuProps {
  onSelect: (mode: GameMode) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-6 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center shrink-0 pt-4"
      >
        <h2 className="text-sm md:text-base font-medium text-[#5C4D42] tracking-[0.25em] uppercase opacity-80">
          ELIJAN SU PRÓXIMA EXPERIENCIA
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-stretch flex-wrap pb-8">
        {/* Sin Filtro (Ex Conectados) */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('dianoia')}
          className="flex-1 min-w-[280px] bg-[#F5F1E3] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex flex-col items-center gap-6 group transition-all duration-300 hover:border-[#8B735B]/30 hover:shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-[#5C4D42]/5 flex items-center justify-center text-3xl text-[#5C4D42] group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-all duration-500">
            ✦
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-serif font-bold text-[#5C4D42] tracking-wide group-hover:tracking-wider transition-all">SIN FILTRO</h3>
            <p className="text-xs text-[#5C4D42]/60 leading-relaxed font-medium">
              Conexión profunda o picante.<br/>Ustedes eligen el tono.
            </p>
          </div>
        </motion.button>

        {/* Impostor */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('impostor')}
          className="flex-1 min-w-[280px] bg-[#F5F1E3] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex flex-col items-center gap-6 group transition-all duration-300 hover:border-[#8B735B]/30 hover:shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-[#5C4D42]/5 flex items-center justify-center text-[#5C4D42] group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-all duration-500">
            {/* Magnifying Glass Icon (Lupa) */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-serif font-bold text-[#5C4D42] tracking-wide group-hover:tracking-wider transition-all">IMPOSTOR</h3>
            <p className="text-xs text-[#5C4D42]/60 leading-relaxed font-medium">
              Deducción y chamuyo.<br/>Descubran quién miente entre mates.
            </p>
          </div>
        </motion.button>

        {/* Tabú */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('tabu')}
          className="flex-1 min-w-[280px] bg-[#F5F1E3] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex flex-col items-center gap-6 group transition-all duration-300 hover:border-[#8B735B]/30 hover:shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-[#5C4D42]/5 flex items-center justify-center text-[#5C4D42] group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-all duration-500">
            {/* Book Icon (Libro) */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-serif font-bold text-[#5C4D42] tracking-wide group-hover:tracking-wider transition-all">TABÚ</h3>
            <p className="text-xs text-[#5C4D42]/60 leading-relaxed font-medium">
              Rapidez y prohibiciones.<br/>Describí sin decir la palabra clave.
            </p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default GameMenu;