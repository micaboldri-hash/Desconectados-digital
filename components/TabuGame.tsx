
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player, TabuConfig, TabuWord } from '../types';
import { TABU_DATA } from '../data/tabuData';
import TabuSetup from './TabuSetup';
import TabuCard from './TabuCard';

interface TabuGameProps {
  players: Player[];
  onExit: () => void;
}

const TabuGame: React.FC<TabuGameProps> = ({ players, onExit }) => {
  const [config, setConfig] = useState<TabuConfig | null>(null);
  const [phase, setPhase] = useState<'setup' | 'ready' | 'playing' | 'summary'>('setup');
  const [isPaused, setIsPaused] = useState(false);
  
  // Game State
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0); // Index in config.turnOrder
  const [currentRoundScore, setCurrentRoundScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  
  // Deck
  const [gameDeck, setGameDeck] = useState<TabuWord[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Initialize deck with shuffle
  const initializeDeck = useCallback(() => {
    const shuffled = [...TABU_DATA].sort(() => 0.5 - Math.random());
    setGameDeck(shuffled);
    setCurrentCardIndex(0);
  }, []);

  const startGame = (gameConfig: TabuConfig) => {
    setConfig(gameConfig);
    initializeDeck();
    setCurrentTurnIndex(0);
    setPhase('ready');
  };

  const startTurn = () => {
    if (!config) return;
    setCurrentRoundScore(0);
    setTimeLeft(config.turnDuration);
    setPhase('playing');
    setIsPaused(false);
  };

  const endTurn = useCallback(() => {
    setPhase('summary');
    if (config) {
      // Find narrator and their team
      const narrator = config.turnOrder[currentTurnIndex];
      const newTeams = config.teams.map(team => {
        if (team.players.some(p => p.id === narrator.id)) {
          return { ...team, score: team.score + currentRoundScore };
        }
        return team;
      });
      setConfig({ ...config, teams: newTeams });
    }
  }, [config, currentTurnIndex, currentRoundScore]);

  // Timer: Decoupled from game state updates to prevent stuttering
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (phase === 'playing' && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [phase, isPaused]);

  // Check for end of turn when time hits 0
  useEffect(() => {
    if (phase === 'playing' && timeLeft === 0) {
      endTurn();
    }
  }, [phase, timeLeft, endTurn]);

  const handleSwipe = (result: 'correct' | 'tabu' | 'skip') => {
    if (isPaused) return;

    // Scoring logic
    let points = 0;
    if (result === 'correct') points = 1;
    if (result === 'tabu') points = -1;
    if (result === 'skip') points = 0;

    setCurrentRoundScore(prev => prev + points);
    
    // Next card
    if (currentCardIndex + 1 < gameDeck.length) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      initializeDeck(); 
    }
  };

  const nextTurn = () => {
    if (!config) return;
    // Circular rotation through the turnOrder
    const nextIndex = (currentTurnIndex + 1) % config.turnOrder.length;
    setCurrentTurnIndex(nextIndex);
    setPhase('ready');
  };

  // Helper to get current roles
  const getCurrentRoles = () => {
    if (!config) return { narrator: null, watcher: null, team: null };
    
    const narrator = config.turnOrder[currentTurnIndex];
    // Watcher is the next person in the circle
    const watcherIndex = (currentTurnIndex + 1) % config.turnOrder.length;
    const watcher = config.turnOrder[watcherIndex];
    
    const team = config.teams.find(t => t.players.some(p => p.id === narrator.id));
    
    return { narrator, watcher, team };
  };

  if (phase === 'setup') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <TabuSetup players={players} onStartGame={startGame} onBack={onExit} />
      </div>
    );
  }

  const { narrator, watcher, team: currentTeam } = getCurrentRoles();

  if (phase === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center gap-8 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#F5F1E3] p-8 md:p-12 rounded-[2.5rem] border-4 border-white/40 shadow-xl max-w-sm w-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-[#5C4D42]/10" />
          
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50 mb-2">Empieza</p>
            <h2 className="text-3xl font-serif font-bold text-[#5C4D42]">{currentTeam?.name}</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white/60 p-4 rounded-2xl border border-[#D4CDB4]">
              <p className="text-[10px] uppercase tracking-widest text-[#5C4D42]/50 mb-1">Narra</p>
              <p className="text-xl font-bold text-[#8B735B]">{narrator?.name}</p>
            </div>

            <div className="bg-[#5C4D42]/5 p-4 rounded-2xl border border-[#5C4D42]/10">
              <p className="text-[10px] uppercase tracking-widest text-[#5C4D42]/50 mb-1">Vigila</p>
              <p className="text-xl font-bold text-[#5C4D42]">{watcher?.name}</p>
              <p className="text-[9px] text-[#5C4D42]/40 mt-1 italic">(Si el narrador dice una prohibida, apretá abajo)</p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 w-full max-w-xs">
            <button
            onClick={startTurn}
            className="bg-[#5C4D42] text-[#F5F1E3] px-12 py-5 rounded-full font-bold shadow-xl active:scale-95 text-[12px] uppercase tracking-[0.2em] hover:bg-[#4A3E35] transition-all"
            >
            ¡Empezar Turno!
            </button>
            <button
                onClick={onExit}
                className="text-[#5C4D42]/60 hover:text-[#5C4D42] font-bold uppercase tracking-widest text-[10px]"
            >
                Volver
            </button>
        </div>
      </div>
    );
  }

  if (phase === 'playing') {
    const currentCard = gameDeck[currentCardIndex];

    return (
      <div className="w-full h-full flex flex-col items-center relative overflow-hidden">
        {/* Top Bar */}
        <div className="w-full px-4 pt-2 flex justify-between items-center z-20 gap-2 max-w-md mx-auto">
          {/* Time */}
          <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-2xl border border-[#D4CDB4] shadow-sm min-w-[60px] text-center flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-wider text-[#5C4D42]/50 leading-none mb-1">Tiempo</span>
            <span className="font-bold text-[#5C4D42] text-lg leading-none">{timeLeft}s</span>
          </div>
          
          {/* Skip Button */}
          <button
            onClick={() => handleSwipe('skip')}
            disabled={isPaused}
            className="bg-[#5C4D42] text-[#F5F1E3] px-5 py-3 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-lg hover:bg-[#4A3E35] active:scale-95 transition-all flex-1 mx-1 disabled:opacity-50"
          >
            Pasar
          </button>

          <div className="flex items-center gap-2">
             {/* Score */}
            <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-2xl border border-[#D4CDB4] shadow-sm min-w-[60px] text-center flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-wider text-[#8B735B]/50 leading-none mb-1">Puntos</span>
                <span className="font-bold text-[#8B735B] text-lg leading-none">{currentRoundScore}</span>
            </div>
            
            {/* Pause Button */}
            <button 
                onClick={() => setIsPaused(true)}
                className="bg-white/80 backdrop-blur w-10 h-10 flex items-center justify-center rounded-2xl border border-[#D4CDB4] shadow-sm text-[#5C4D42] hover:bg-white active:scale-95 transition-all"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
            </button>
          </div>
        </div>

        {/* Card Area */}
        <div className="flex-1 w-full flex items-center justify-center p-6 relative">
           <div className="w-[320px] h-[560px] md:w-[380px] md:h-[640px] relative">
              <AnimatePresence mode="popLayout">
                 {currentCard && (
                     <TabuCard 
                        key={currentCard.word}
                        word={currentCard} 
                        difficulty={config?.difficulty || 'medio'}
                        onSwipe={handleSwipe}
                     />
                 )}
              </AnimatePresence>
           </div>
        </div>

        {/* Pause Overlay */}
        <AnimatePresence>
            {isPaused && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-[#F5F1E3]/80 backdrop-blur-md flex flex-col items-center justify-center p-6"
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white p-8 rounded-[2rem] shadow-2xl border border-[#D4CDB4] w-full max-w-xs text-center"
                    >
                        <h2 className="text-2xl font-serif font-bold text-[#5C4D42] mb-6">Pausa</h2>
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => setIsPaused(false)}
                                className="bg-[#5C4D42] text-[#F5F1E3] py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg"
                            >
                                Reanudar
                            </button>
                            <button 
                                onClick={onExit}
                                className="border-2 border-[#5C4D42]/10 text-[#5C4D42] py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#5C4D42]/5"
                            >
                                Salir del Juego
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    );
  }

  // Summary
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center gap-6 px-6">
       <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#E8E4D5] p-8 rounded-[2.5rem] border-4 border-white/40 shadow-2xl max-w-sm w-full"
        >
          <h2 className="text-2xl font-serif font-bold text-[#5C4D42] mb-2">¡Tiempo!</h2>
          
          <div className="my-6">
            <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50 mb-1">Puntos de ronda</p>
            <p className="text-5xl font-bold text-[#8B735B]">{currentRoundScore}</p>
          </div>

          <div className="w-full h-px bg-[#5C4D42]/10 my-6" />
          
          <h3 className="text-sm font-bold text-[#5C4D42] uppercase tracking-wider mb-4">Marcador Global</h3>
          <div className="space-y-3">
             {config?.teams.map(team => (
               <div key={team.id} className={`flex justify-between items-center p-3 rounded-xl ${team.id === currentTeam?.id ? 'bg-white/60 border border-[#8B735B]/30' : 'bg-transparent'}`}>
                 <span className="text-sm font-bold text-[#5C4D42]">{team.name}</span>
                 <span className="text-lg font-serif font-bold text-[#5C4D42]">{team.score}</span>
               </div>
             ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button
            onClick={nextTurn}
            className="bg-[#5C4D42] text-[#F5F1E3] py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-[#4A3E35] transition-all"
          >
            Siguiente Turno
          </button>
          <button
            onClick={onExit}
            className="text-[#5C4D42]/60 hover:text-[#5C4D42] font-bold uppercase tracking-widest text-xs py-2"
          >
            Salir al Menú
          </button>
        </div>
    </div>
  );
};

export default TabuGame;
