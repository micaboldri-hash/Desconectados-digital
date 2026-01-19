
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, useAnimation, PanInfo, Variants } from 'framer-motion';
import { Question, TurnInfo } from '../types';

interface CardProps {
  question: Question;
  turnInfo: TurnInfo;
  isFavorite: boolean;
  isBackground?: boolean;
  onToggleFavorite: () => void;
  onSwipe: (direction: 'left' | 'right') => void;
}

const EARTH_COLORS = [
  '#F5F1E3', // Sand
  '#F2EEE1', // Light Sand
  '#EFEADF', // Warm Sand
];

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`w-7 h-7 transition-all duration-500 ${filled ? 'fill-[#8B735B] scale-110' : 'fill-none stroke-[#8B735B]/30'}`}
    strokeWidth="1.5"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Card: React.FC<CardProps> = ({ 
  question, 
  turnInfo, 
  isFavorite, 
  isBackground = false,
  onToggleFavorite, 
  onSwipe
}) => {
  const [color, setColor] = useState(EARTH_COLORS[0]);
  const [extraQuestion, setExtraQuestion] = useState<string | null>(null);
  const controls = useAnimation();
  
  // Motion values for drag gestures
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-18, 18]);
  const opacity = useTransform(x, [-400, -200, 0, 200, 400], [0, 1, 1, 1, 0]);
  
  // Labels opacity
  const nextOpacity = useTransform(x, [-150, -50], [1, 0]);
  const prevOpacity = useTransform(x, [50, 150], [0, 1]);

  useEffect(() => {
    const randomColor = EARTH_COLORS[Math.floor(Math.random() * EARTH_COLORS.length)];
    setColor(randomColor);
  }, []); 

  useEffect(() => {
    setExtraQuestion(null);
    x.set(0);
  }, [question.id, x]);

  const handleProfundizar = () => {
    if (extraQuestion) return;
    
    // Usamos las preguntas precargadas en el archivo questions.ts en lugar de la IA
    const options = question.followUps && question.followUps.length > 0 
      ? question.followUps 
      : [
          "¿Hay algo más que te gustaría compartir sobre esto?",
          "¿Cómo influye esto en quién sos hoy?",
          "¿Qué sientes al decir esto en voz alta?"
        ];
    
    const randomIdx = Math.floor(Math.random() * options.length);
    setExtraQuestion(options[randomIdx]);
  };

  const handleDragEnd = async (_: any, info: PanInfo) => {
    const swipeThreshold = 100;
    const velocityThreshold = 400;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      await controls.start({ x: -500, opacity: 0, transition: { duration: 0.2 } });
      onSwipe('left');
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      await controls.start({ x: 500, opacity: 0, transition: { duration: 0.2 } });
      onSwipe('right');
    } else {
      controls.start({ x: 0, rotate: 0, transition: { type: "spring", damping: 20, stiffness: 300 } });
    }
  };

  const getTurnText = () => {
    const { type, players } = turnInfo;
    switch (type) {
      case 'ALL': return "Conversación abierta";
      case 'SINGLE': return `Responde ${players[0]}`;
      case 'DUO': return `${players[0]} y ${players[1]}`;
      case 'READER': return "Para quien lee";
      case 'LEAST_SPOKEN': return "El que menos haya hablado";
      case 'FAVORITE': return "Para volver a habitar ✨";
      default: return "Pregunta compartida";
    }
  };

  const variants: Variants = {
    front: {
      zIndex: 10,
      scale: 1,
      y: 0,
      opacity: 1,
      pointerEvents: "auto",
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    back: {
      zIndex: 5,
      scale: 0.92,
      y: 15,
      opacity: 0.6,
      pointerEvents: "none",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    hidden: {
      scale: 0.85,
      y: 30,
      opacity: 0,
      zIndex: 0
    },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    })
  };

  return (
    <motion.div 
      className="absolute top-0 left-0 w-full h-full perspective-1000"
      variants={variants}
      initial={isBackground ? "hidden" : "front"} 
      animate={isBackground ? "back" : "front"}
      exit="exit"
      custom={x.get() < 0 ? -1000 : 1000}
      style={{ zIndex: isBackground ? 5 : 10 }}
    >
      <motion.div 
        drag={isBackground ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x, rotate, backgroundColor: color, touchAction: "none" }}
        whileTap={{ cursor: "grabbing" }}
        className={`
          w-full h-full
          rounded-[2.5rem] p-10 md:p-14 
          flex flex-col justify-between items-center text-center 
          shadow-2xl border-4 border-white/40 
          cursor-grab select-none overflow-hidden
          transition-shadow duration-300
          ${isBackground ? 'shadow-sm' : 'shadow-2xl'}
        `}
      >
        {!isBackground && (
          <>
            <motion.div 
              style={{ opacity: nextOpacity }}
              className="absolute top-12 left-10 border-4 border-[#5C4D42]/20 text-[#5C4D42]/30 px-4 py-1 rounded-xl font-bold uppercase tracking-[0.3em] text-[12px] -rotate-12 pointer-events-none"
            >
              Siguiente
            </motion.div>
            
            <motion.div 
              style={{ opacity: prevOpacity }}
              className="absolute top-12 right-10 border-4 border-[#8B735B]/20 text-[#8B735B]/30 px-4 py-1 rounded-xl font-bold uppercase tracking-[0.3em] text-[12px] rotate-12 pointer-events-none"
            >
              Anterior
            </motion.div>

            <button 
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
              className="absolute top-10 right-10 focus:outline-none hover:scale-110 transition-transform z-20 p-2"
            >
              <HeartIcon filled={isFavorite} />
            </button>
          </>
        )}

        <div className="flex-1 flex flex-col justify-center items-center gap-8 mt-6 pointer-events-none">
          <p className="text-[10px] md:text-[11px] font-bold text-[#5C4D42]/30 uppercase tracking-[0.4em] mb-2">
            {getTurnText()}
          </p>
          
          <h2 className="text-xl md:text-3xl font-serif font-bold text-[#5C4D42] leading-snug px-2">
            {question.text}
          </h2>

          <AnimatePresence>
            {extraQuestion && !isBackground && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-6 w-full max-w-[280px]"
              >
                <div className="p-5 bg-white/50 rounded-[1.5rem] border border-white/60 shadow-sm relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5F1E3] px-3 py-1 text-[8px] font-bold text-[#8B735B]/50 uppercase tracking-widest rounded-full border border-[#8B735B]/10">
                    Host
                  </div>
                  <p className="text-[#5C4D42] italic text-[14px] md:text-[15px] leading-relaxed font-medium">
                    "{extraQuestion}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isBackground && (
          <div className="w-full flex flex-col items-center pt-8 pointer-events-auto shrink-0">
            {!extraQuestion && (
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={handleProfundizar}
                className="group flex flex-col items-center gap-3 transition-all active:scale-90"
              >
                <div className="w-12 h-12 rounded-full bg-white/60 border-2 border-[#8B735B]/10 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:border-[#8B735B]/30 transition-all">
                  <span className="text-[#8B735B] text-2xl">✦</span>
                </div>
                <span className="text-[10px] font-bold text-[#8B735B]/50 uppercase tracking-[0.25em] group-hover:text-[#8B735B] transition-colors">
                  Profundizar
                </span>
              </button>
            )}
          </div>
        )}
        
        {!isBackground && (
          <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-10 pointer-events-none">
            <div className="flex gap-6 items-center">
              <span className="text-[14px]">←</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#5C4D42]/40"></div>
              <span className="text-[14px]">→</span>
            </div>
          </div>
        )}
      </motion.div>

      {!isBackground && (
        <div className="hidden md:flex gap-4 mt-8 absolute -bottom-24 opacity-20 hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onSwipe('right')}
            className="w-12 h-12 rounded-full border border-[#5C4D42]/20 flex items-center justify-center hover:bg-white/50 transition-all"
            title="Pregunta anterior"
          >
            ←
          </button>
          <button 
            onClick={() => onSwipe('left')}
            className="w-12 h-12 rounded-full border border-[#5C4D42]/20 flex items-center justify-center hover:bg-white/50 transition-all"
            title="Siguiente pregunta"
          >
            →
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
