
import React, { useEffect } from 'react';
import { motion, useAnimation, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { TabuWord, TabuDifficulty } from '../types';

interface TabuCardProps {
  word: TabuWord;
  difficulty: TabuDifficulty;
  onSwipe: (result: 'correct' | 'tabu' | 'skip') => void;
}

const TabuCard: React.FC<TabuCardProps> = ({ word, difficulty, onSwipe }) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Visual feedback
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  
  // Color overlays
  // Updated to show green on both Left (-x) and Right (+x)
  const greenOpacity = useTransform(x, [-150, -50, 50, 150], [0.2, 0, 0, 0.2]); 
  const redOpacity = useTransform(y, [-50, -150], [0, 0.2]); // Up (Tabu)
  const redOpacityDown = useTransform(y, [50, 150], [0, 0.2]); // Down (Tabu)

  // Filter forbidden words based on difficulty
  const getForbiddenList = () => {
    switch(difficulty) {
      case 'facil': return word.forbidden.slice(0, 3);
      case 'medio': return word.forbidden.slice(0, 5);
      case 'dificil': return word.forbidden; // 7
    }
  };

  useEffect(() => {
    x.set(0);
    y.set(0);
    controls.set({ x: 0, y: 0, opacity: 1, rotate: 0 });
  }, [word, controls, x, y]);

  const handleDragEnd = async (_: any, info: PanInfo) => {
    const threshold = 100;
    const { x: offsetX, y: offsetY } = info.offset;

    // Determine dominant axis
    if (Math.abs(offsetX) > Math.abs(offsetY)) {
      // Horizontal
      if (Math.abs(offsetX) > threshold) {
        // Swipe Right or Left (Correct)
        const dir = offsetX > 0 ? 1 : -1;
        await controls.start({ x: dir * 500, opacity: 0, transition: { duration: 0.2 } });
        onSwipe('correct');
      } else {
        controls.start({ x: 0, y: 0 });
      }
    } else {
      // Vertical
      if (Math.abs(offsetY) > threshold) {
        // Swipe Up or Down (Tabu)
        const dir = offsetY > 0 ? 1 : -1;
        await controls.start({ y: dir * 500, opacity: 0, transition: { duration: 0.2 } });
        onSwipe('tabu');
      } else {
        controls.start({ x: 0, y: 0 });
      }
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ opacity: 0, scale: 0.9 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      style={{ x, y, rotate, touchAction: 'none' }}
      whileTap={{ cursor: 'grabbing' }}
      className="absolute top-0 left-0 w-full h-full bg-[#F5F1E3] rounded-[2.5rem] border-4 border-[#5C4D42]/20 shadow-2xl flex flex-col overflow-hidden"
    >
      {/* Feedback Overlays */}
      <motion.div style={{ opacity: greenOpacity }} className="absolute inset-0 bg-green-500 pointer-events-none z-10" />
      <motion.div style={{ opacity: redOpacity }} className="absolute inset-0 bg-red-500 pointer-events-none z-10" />
      <motion.div style={{ opacity: redOpacityDown }} className="absolute inset-0 bg-red-500 pointer-events-none z-10" />

      {/* Header / Keyword - Reduced padding and min-height */}
      <div className="bg-[#5C4D42] p-5 text-center shrink-0 flex items-center justify-center min-h-[85px]">
        <h2 className="text-2xl font-serif font-bold text-[#F5F1E3] uppercase tracking-widest leading-tight">
          {word.word}
        </h2>
      </div>

      {/* Forbidden List - Reduced padding and gaps */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center gap-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5C4D42]/40 mb-1">Prohibidas</p>
        <div className="space-y-2 w-full">
          {getForbiddenList().map((w, idx) => (
            <div key={idx} className="bg-white/50 py-1.5 px-4 rounded-xl text-center border border-[#D4CDB4]">
              <span className="text-[#5C4D42] font-bold text-lg">{w}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TabuCard;
