
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Question, TurnInfo } from '../types';
import { getDeepContent, DeepContent } from '../services/geminiService';

interface CardProps {
  question: Question;
  turnInfo: TurnInfo;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const EARTH_COLORS = [
  '#F5F1E3', // Sand/Beige
  '#E9E4D4', // Light Stone
  '#DFD8C4', // Warm Sand
  '#D4CDB4', // Muted Earth
];

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`w-7 h-7 transition-colors duration-300 ${filled ? 'fill-[#8B735B]' : 'fill-none stroke-[#8B735B]'}`}
    strokeWidth="1.2"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Card: React.FC<CardProps> = ({ 
  question, 
  turnInfo, 
  isFavorite, 
  onToggleFavorite, 
  onNext,
  onPrev
}) => {
  const [color, setColor] = useState(EARTH_COLORS[0]);
  const [extraData, setExtraData] = useState<DeepContent | null>(null);
  const [loadingExtra, setLoadingExtra] = useState(false);
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-300, -200, 0, 200, 300], [0, 1, 1, 1, 0]);

  useEffect(() => {
    const randomColor = EARTH_COLORS[Math.floor(Math.random() * EARTH_COLORS.length)];
    setColor(randomColor);
    setExtraData(null);
    x.set(0);
  }, [question, x]);

  const handleProfundizar = async (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (loadingExtra) return;
    setLoadingExtra(true);
    const content = await getDeepContent(question.text);
    setExtraData(content);
    setLoadingExtra(false);
  };

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 100;
    if (info.offset.x > swipeThreshold) {
      onPrev();
    } else if (info.offset.x < -swipeThreshold) {
      onNext();
    }
  };

  const getTurnText = () => {
    const { type, players } = turnInfo;
    switch (type) {
      case 'ALL': return "Responden todos";
      case 'SINGLE': return `Responde solo ${players[0]}`;
      case 'DUO': return `Responden ${players[0]} y ${players[1]}`;
      case 'GROUP': 
        if (players.length === 3) return `Responden ${players[0]}, ${players[1]} y ${players[2]}`;
        return `Responden ${players.slice(0, -1).join(', ')} y ${players.slice(-1)}`;
      case 'READER': return "Responde quien lee la carta";
      case 'LEAST_SPOKEN': return "Responde el que menos haya hablado";
      case 'FAVORITE': return "Para volver a reflexionar ✨";
      default: return "";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center relative z-10 perspective-container">
      <motion.div 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ x, rotate, opacity, backgroundColor: color }}
        className="relative w-[280px] h-[420px] md:w-[340px] md:h-[500px] rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between items-center text-center shadow-2xl transition-colors duration-700 overflow-hidden border-4 border-white/30 cursor-grab active:cursor-grabbing select-none"
      >
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
          className="absolute top-6 right-6 focus:outline-none hover:scale-110 transition-transform z-20 pointer-events-auto"
        >
          <HeartIcon filled={isFavorite} />
        </button>

        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-6 mt-4 pointer-events-none">
          <p className="text-[10px] md:text-xs font-bold text-[#5C4D42]/60 uppercase tracking-[0.2em]">
            {getTurnText()}
          </p>
          
          <h2 className="text-base md:text-xl font-serif font-bold text-[#5C4D42] leading-relaxed px-2">
            {question.text}
          </h2>

          {extraData && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 w-full"
            >
              <div className="p-3 md:p-4 bg-black/5 rounded-xl border border-black/5">
                <p className="text-[#5C4D42] font-medium text-[11px] md:text-sm leading-snug">
                  {extraData.followup}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="w-full flex flex-col items-center pt-2 pointer-events-auto">
          {!extraData ? (
            <button
              onClick={handleProfundizar}
              disabled={loadingExtra}
              className="px-6 md:px-8 py-2 md:py-2.5 rounded-full bg-white/40 border border-[#5C4D42]/10 text-[#5C4D42] hover:bg-white/60 transition-all text-[10px] font-bold shadow-sm disabled:opacity-50 active:scale-95 uppercase tracking-widest"
            >
              {loadingExtra ? "Inspirando..." : "Profundizar"}
            </button>
          ) : (
            <div className="w-10 h-0.5 bg-[#5C4D42]/10 rounded-full mb-2"></div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
