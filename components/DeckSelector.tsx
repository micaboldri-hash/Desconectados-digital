
import React from 'react';
import { motion } from 'framer-motion';
import { DianoiaMode } from '../types';

interface DeckSelectorProps {
  onSelect: (mode: DianoiaMode) => void;
  onBack: () => void;
}

const DeckSelector: React.FC<DeckSelectorProps> = ({ onSelect, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-6 relative">
      
      {/* Botón Volver */}
      <button 
        onClick={onBack}
        className="absolute top-0 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#5C4D42]/10 text-[#5C4D42] hover:bg-[#5C4D42] hover:text-[#F5F1E3] transition-all z-20"
        title="Volver"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center shrink-0 pt-8"
      >
        <h2 className="text-2xl font-serif font-bold text-[#5C4D42] tracking-wide">SIN FILTRO</h2>
        <p className="text-[10px] text-[#5C4D42]/60 uppercase tracking-[0.2em] mt-2">
          Elegí la intensidad
        </p>
      </motion.div>

      <div className="flex flex-col gap-6 w-full max-w-sm pb-8">
        {/* Diciendo Todo (Normal) */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('normal')}
          className="bg-[#F5F1E3] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex items-center gap-6 group transition-all duration-300 hover:border-[#8B735B]/30 hover:shadow-2xl text-left relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-full bg-[#5C4D42]/5 flex items-center justify-center text-[#5C4D42] group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-all duration-500 shrink-0">
            {/* Heart Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div className="flex-1 z-10">
            <h3 className="text-lg font-bold text-[#5C4D42] uppercase tracking-wider group-hover:tracking-widest transition-all">Diciendo Todo</h3>
            <p className="text-[10px] text-[#5C4D42]/60 font-medium mt-1">
              Preguntas para conectar, profundizar y conocerse mejor.
            </p>
          </div>
        </motion.button>

        {/* Diciendo de Más (Spicy) */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('spicy')}
          className="bg-[#F5F1E3] rounded-[2rem] p-8 border-2 border-white/50 shadow-xl flex items-center gap-6 group transition-all duration-300 hover:border-[#8B735B]/30 hover:shadow-2xl text-left relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-full bg-[#5C4D42]/5 flex items-center justify-center text-[#5C4D42] group-hover:bg-[#5C4D42] group-hover:text-[#F5F1E3] transition-all duration-500 shrink-0">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
               {/* Aesthetic Lips / Labios (Representing 'Speaking' + 'Intimacy') */}
               <path d="M11.99 4C7.96 4 4.46 5.8 3.55 9.24C5.19 11.38 8.44 13.5 12 13.5C15.56 13.5 18.81 11.38 20.44 9.24C19.53 5.8 16.03 4 11.99 4ZM12 15.5C8.36 15.5 4.3 12.89 2.14 10.37C1.62 12.57 2.37 14.73 4.42 16.53C6.55 18.39 9.3 19.5 12 19.5C14.7 19.5 17.45 18.39 19.58 16.53C21.63 14.73 22.38 12.57 21.86 10.37C19.7 12.89 15.64 15.5 12 15.5Z" />
             </svg>
          </div>
          <div className="flex-1 z-10">
            <h3 className="text-lg font-bold text-[#8B735B] uppercase tracking-wider group-hover:tracking-widest transition-all">Diciendo de Más</h3>
            <p className="text-[10px] text-[#5C4D42]/60 font-medium mt-1">
              Sin vergüenza. Preguntas picantes, íntimas y atrevidas.
            </p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default DeckSelector;