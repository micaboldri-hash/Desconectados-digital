
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player, TabuConfig, Team, TabuWord } from '../types';
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
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
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
      const newTeams = [...config.teams];
      newTeams[currentTeamIndex].score += currentRoundScore;
      setConfig({ ...config, teams: newTeams });
    }
  }, [config, currentTeamIndex, currentRoundScore]);

  // Timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (phase === 'playing' && timeLeft > 0 && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (phase === 'playing' && timeLeft === 0 && !isPaused) {
      endTurn();
    }
    return () => clearInterval(interval);
  }, [phase, timeLeft, endTurn, isPaused]);

  const handleSwipe = (result: 'correct' | 'tabu' | 'skip') => {
    if (isPaused) return;

    // Sound effect could go here
    let points = 0;
    if (result === 'correct') points = 5;
    if (result === 'tabu') points = -3;
    if (result === 'skip') points = -2;

    setCurrentRoundScore(prev => prev + points);
    
    // Next card
    if (currentCardIndex + 1 < gameDeck.length) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // Reshuffle if deck ends (unlikely with 700 words but possible)
      initializeDeck(); 
    }
  };

  const nextTeam = () => {
    if (!config) return;
    const nextIndex = (currentTeamIndex + 1) % config.teams.length;
    setCurrentTeamIndex(nextIndex);
    setPhase('ready');
  };

  if (phase === 'setup') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <TabuSetup players={players} onStartGame={startGame} onBack={onExit} />
      </div>
    );
  }

  const currentTeam = config?.teams[currentTeamIndex];

  if (phase === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center gap-8 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#F5F1E3] p-10 rounded-[2.5rem] border-4 border-white/40 shadow-xl max-w-sm w-full"
        >
          <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50 mb-4">Turno de</p>
          <h2 className="text-4xl font-serif font-bold text-[#5C4D42] mb-6">{currentTeam?.name}</h2>
          
          <div className="bg-white/60 p-4 rounded-xl mb-6">
            <p className="text-sm font-bold text-[#5C4D42] mb-2">Integrantes:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {currentTeam?.players.map(p => (
                <span key={p.id} className="bg-[#5C4D42]/10 px-3 py-1 rounded-full text-xs text-[#5C4D42]">{p.name}</span>
              ))}
            </div>
          </div>

          <div className="text-[#5C4D42]/60 text-xs leading-relaxed italic">
            "Pasale el teléfono a un narrador. El equipo contrario debe vigilar las palabras prohibidas."
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 w-full max-w-xs">
            <button
            onClick={startTurn}
            className="bg-[#5C4D42] text-[#F5F1E3] px-12 py-5 rounded-full font-bold shadow-xl active:scale-95 text-[12px] uppercase tracking-[0.2em] hover:bg-[#4A3E35] transition-all"
            >
            Empezar
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
            Saltear
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

        {/* Card Area - Height increased here */}
        <div className="flex-1 w-full flex items-center justify-center p-6 relative">
           <div className="w-[320px] h-[560px] md:w-[380px] md:h-[640px] relative">
              <AnimatePresence mode="popLayout">
                 <TabuCard 
                    key={gameDeck[currentCardIndex].word}
                    word={gameDeck[currentCardIndex]} 
                    difficulty={config?.difficulty || 'medio'}
                    onSwipe={handleSwipe}
                 />
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
            onClick={nextTeam}
            className="bg-[#5C4D42] text-[#F5F1E3] py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-[#4A3E35] transition-all"
          >
            Siguiente Equipo
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
