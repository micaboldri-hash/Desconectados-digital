import React from 'react';
import { motion } from 'framer-motion';
import { GameMode } from '../types';

interface GameMenuProps {
  onSelect: (mode: GameMode) => void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4D42]">
          Carta de Juegos
        </h2>
        <p className="text-[#5C4D42]/60 text-sm uppercase tracking-widest">
          Elijan su experiencia
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center items-stretch">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('dianoia')}
          className="flex-1 bg-[#F5F1E3] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex flex-col items-center gap-4 group transition-colors hover:border-[#8B735B]/30"
        >
          <div className="w-16 h-16 rounded-full bg-[#5C4D42]/10 flex items-center justify-center text-3xl group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-colors">
            ✦
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold text-[#5C4D42] mb-2">CONECTADOS</h3>
            <p className="text-xs text-[#5C4D42]/60 leading-relaxed">
              Conexión profunda.<br/>Preguntas para conocerse de verdad.
            </p>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('impostor')}
          className="flex-1 bg-[#E8E4D5] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex flex-col items-center gap-4 group transition-colors hover:border-[#8B735B]/30"
        >
          <div className="w-16 h-16 rounded-full bg-[#5C4D42]/10 flex items-center justify-center text-3xl group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-colors">
            🎭
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold text-[#5C4D42] mb-2">IMPOSTOR</h3>
            <p className="text-xs text-[#5C4D42]/60 leading-relaxed">
              Deducción y chamuyo.<br/>Descubran quién miente entre mates.
            </p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default GameMenu;