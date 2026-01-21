import React, { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './Card';
import { Player, Question, TurnInfo, TurnType } from '../types';
import { QUESTIONS } from '../questions';

interface DianoiaGameProps {
  players: Player[];
  onExit: () => void;
}

const DianoiaGame: React.FC<DianoiaGameProps> = ({ players, onExit }) => {
  const [deck] = useState<Question[]>(() => {
    const newArr = [...QUESTIONS];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  });

  const [favorites, setFavorites] = useState<number[]>([]);
  const [status, setStatus] = useState<'playing' | 'favorites' | 'finished'>('playing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeDeck, setActiveDeck] = useState<Question[]>(deck);
  const [turnInfo, setTurnInfo] = useState<TurnInfo | null>(null);

  // Turn generation logic reused
  const generateTurn = useCallback((currentPlayers: Player[]): TurnInfo => {
    const rand = Math.random();
    const playerNames = currentPlayers.map(p => p.name);
    const n = playerNames.length;
    
    if (rand < 0.15) return { type: 'ALL', players: playerNames };
    if (rand < 0.25) return { type: 'READER', players: [] };
    if (rand < 0.35) return { type: 'LEAST_SPOKEN', players: [] };
    
    const maxToPick = Math.max(1, Math.min(2, n - 1));
    const k = Math.floor(Math.random() * maxToPick) + 1;
    const pickedPlayers = [...playerNames].sort(() => 0.5 - Math.random()).slice(0, k);
    
    let type: TurnType = 'SINGLE';
    if (k === 2) type = 'DUO';
    else if (k > 2) type = 'GROUP';
    
    return { type, players: pickedPlayers };
  }, []);

  // Initial turn
  React.useEffect(() => {
    if (status === 'playing' && currentQuestionIndex === 0 && !turnInfo) {
      setTurnInfo(generateTurn(players));
    }
  }, [status, players, generateTurn, currentQuestionIndex, turnInfo]);

  const handleNext = () => {
    if (currentQuestionIndex + 1 >= activeDeck.length) {
      if (status === 'favorites') {
        setCurrentQuestionIndex(0); // Loop favorites
      } else {
        setStatus('finished');
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      if (status !== 'favorites') {
        setTurnInfo(generateTurn(players));
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      if (status !== 'favorites') {
        setTurnInfo(generateTurn(players));
      }
    } else if (status === 'favorites') {
        setCurrentQuestionIndex(activeDeck.length - 1);
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    direction === 'left' ? handleNext() : handlePrev();
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleShowFavorites = () => {
    const favQuestions = QUESTIONS.filter(q => favorites.includes(q.id));
    if (favQuestions.length === 0) return;
    setActiveDeck(favQuestions);
    setStatus('favorites');
    setCurrentQuestionIndex(0);
    setTurnInfo({ type: 'FAVORITE', players: [] });
  };

  const currentTurn = useMemo(() => {
    if (status === 'favorites') return { type: 'FAVORITE' as TurnType, players: [] };
    return turnInfo || { type: 'ALL' as TurnType, players: [] };
  }, [status, turnInfo]);

  if (status === 'finished') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-10 text-center w-full"
      >
        <div className="bg-[#F5F1E3] w-[300px] h-[400px] md:w-[380px] md:h-[480px] rounded-[3rem] p-12 shadow-2xl border-4 border-white/40 flex flex-col justify-center items-center relative overflow-hidden">
          <h2 className="text-3xl font-serif font-bold text-[#5C4D42] mb-6 italic leading-snug">Fin del mazo</h2>
          <div className="w-10 h-1 bg-[#5C4D42]/10 mx-auto mb-8 rounded-full"></div>
          <p className="text-sm text-[#5C4D42]/60 leading-relaxed font-medium">
            Gracias por permitirte<br/><span className="italic">conectar</span> con el resto.
          </p>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#8B735B]/5 rounded-full blur-2xl"></div>
        </div>
        <div className="flex gap-4">
           {favorites.length > 0 && (
             <button
               onClick={handleShowFavorites}
               className="bg-white/40 text-[#5C4D42] px-8 py-4 rounded-full font-bold shadow-sm uppercase tracking-[0.2em] text-[10px]"
             >
               Ver Favoritos
             </button>
           )}
           <button
             onClick={onExit}
             className="bg-[#5C4D42] text-[#F5F1E3] px-10 py-4 rounded-full font-bold shadow-xl active:scale-95 text-[10px] uppercase tracking-[0.2em] hover:bg-[#4A3E35]"
           >
             Salir
           </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-full relative overflow-visible">
      <div className="flex-1 w-full flex items-center justify-center py-4">
        <div className="relative w-[300px] h-[450px] md:w-[380px] md:h-[550px]">
          {/* Background Card */}
          <div 
            className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] bg-[#EFEADF] border-2 border-white/40 shadow-sm"
            style={{ transform: 'rotate(-4deg) scale(0.95)', zIndex: 0 }}
          />

          <AnimatePresence mode="popLayout">
            {currentQuestionIndex + 1 < activeDeck.length && (
              <Card
                key={activeDeck[currentQuestionIndex + 1].id}
                question={activeDeck[currentQuestionIndex + 1]}
                turnInfo={{ type: 'ALL', players: [] }}
                isFavorite={favorites.includes(activeDeck[currentQuestionIndex + 1].id)}
                isBackground={true}
                onToggleFavorite={() => {}}
                onSwipe={() => {}}
              />
            )}

            <Card
              key={activeDeck[currentQuestionIndex].id}
              question={activeDeck[currentQuestionIndex]}
              turnInfo={currentTurn}
              isFavorite={favorites.includes(activeDeck[currentQuestionIndex].id)}
              isBackground={false}
              onToggleFavorite={() => toggleFavorite(activeDeck[currentQuestionIndex].id)}
              onSwipe={handleSwipe}
            />
          </AnimatePresence>
        </div>
      </div>
      
      <div className="pb-10 shrink-0 z-20 flex gap-4">
         {status === 'playing' && favorites.length > 0 && (
             <button
               onClick={handleShowFavorites}
               className="bg-white/40 border border-[#D4CDB4]/40 text-[#5C4D42]/40 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:text-[#5C4D42] transition-all"
               title="Ver Favoritas"
             >
               ♥
             </button>
         )}
         <button
            onClick={onExit}
            className="bg-white/40 border border-[#D4CDB4]/40 text-[#5C4D42]/40 px-10 py-4 rounded-full font-bold hover:text-[#5C4D42] hover:bg-white transition-all text-[10px] uppercase tracking-[0.2em] shadow-sm backdrop-blur-md"
          >
            Salir
          </button>
      </div>
    </div>
  );
};

export default DianoiaGame;