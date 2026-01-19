
import React, { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Setup from './components/Setup';
import Card from './components/Card';
import { Player, Question, GameState, TurnInfo, TurnType } from './types';
import { QUESTIONS } from './questions';

const CardBack = ({ rotation, offset, zIndex }: { rotation: number, offset: number, zIndex: number }) => (
  <div 
    className="absolute w-[280px] h-[420px] md:w-[340px] md:h-[500px] rounded-[1.5rem] bg-[#F5F1E3] border-4 border-white/60 shadow-lg flex items-center justify-center overflow-hidden transition-all duration-700 pointer-events-none"
    style={{ 
      transform: `translateX(${offset}px) rotate(${rotation}deg)`,
      zIndex: zIndex
    }}
  >
    <div className="w-full h-full opacity-5 flex flex-wrap gap-2 p-4 justify-center items-center">
       {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="w-8 h-8 rounded-full border border-[#5C4D42]"></div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [state, setState] = useState<GameState>({
    players: [],
    currentQuestionIndex: -1,
    deck: [],
    favorites: [],
    status: 'intro',
  });

  const [turnInfo, setTurnInfo] = useState<TurnInfo | null>(null);

  const shuffle = <T,>(array: T[]): T[] => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const generateTurn = useCallback((players: Player[]): TurnInfo => {
    const rand = Math.random();
    const playerNames = players.map(p => p.name);
    const n = playerNames.length;
    
    if (rand < 0.2) {
      return { type: 'ALL', players: playerNames };
    } else if (rand < 0.35) {
      return { type: 'READER', players: [] };
    } else if (rand < 0.45) {
      return { type: 'LEAST_SPOKEN', players: [] };
    } else {
      const maxToPick = Math.max(1, n - 1);
      const k = Math.floor(Math.random() * maxToPick) + 1;
      const shuffledNames = shuffle(playerNames);
      const pickedPlayers = shuffledNames.slice(0, k);
      
      let type: TurnType = 'SINGLE';
      if (k === 2) type = 'DUO';
      else if (k > 2) type = 'GROUP';
      
      return { type, players: pickedPlayers };
    }
  }, []);

  const handleGoToSetup = () => {
    setState(prev => ({ ...prev, status: 'setup' }));
  };

  const handleShowFavorites = () => {
    const favoriteQuestions = QUESTIONS.filter(q => state.favorites.includes(q.id));
    setState(prev => ({ 
      ...prev, 
      status: 'favorites',
      deck: favoriteQuestions,
      currentQuestionIndex: 0
    }));
    setTurnInfo({ type: 'FAVORITE', players: [] });
  };

  const handleStartGame = (players: Player[]) => {
    const shuffledDeck = shuffle(QUESTIONS);
    const initialTurn = generateTurn(players);
    setState({
      ...state,
      players,
      deck: shuffledDeck,
      currentQuestionIndex: 0,
      status: 'playing',
    });
    setTurnInfo(initialTurn);
  };

  const handleNext = () => {
    if (state.currentQuestionIndex + 1 >= state.deck.length) {
      if (state.status === 'favorites') {
        setState(prev => ({ ...prev, currentQuestionIndex: 0 }));
      } else {
        setState(prev => ({ ...prev, status: 'finished' }));
      }
    } else {
      const nextIdx = state.currentQuestionIndex + 1;
      const nextTurn = state.status === 'favorites' ? { type: 'FAVORITE' as TurnType, players: [] } : generateTurn(state.players);
      setState(prev => ({ ...prev, currentQuestionIndex: nextIdx }));
      setTurnInfo(nextTurn);
    }
  };

  const handlePrev = () => {
    if (state.currentQuestionIndex > 0) {
      const prevIdx = state.currentQuestionIndex - 1;
      const prevTurn = state.status === 'favorites' ? { type: 'FAVORITE' as TurnType, players: [] } : generateTurn(state.players);
      setState(prev => ({ ...prev, currentQuestionIndex: prevIdx }));
      setTurnInfo(prevTurn);
    } else if (state.status === 'favorites') {
      setState(prev => ({ ...prev, currentQuestionIndex: state.deck.length - 1 }));
    }
  };

  const toggleFavorite = (id: number) => {
    setState(prev => {
      const isFav = prev.favorites.includes(id);
      return {
        ...prev,
        favorites: isFav 
          ? prev.favorites.filter(fid => fid !== id)
          : [...prev.favorites, id]
      };
    });
  };

  const handleReset = () => {
    setState(prev => ({
      ...prev,
      players: [],
      currentQuestionIndex: -1,
      deck: [],
      status: 'intro',
    }));
    setTurnInfo(null);
  };

  const currentTurnInfo = useMemo(() => {
    if (state.status === 'favorites') return { type: 'FAVORITE' as TurnType, players: [] };
    return turnInfo;
  }, [state.status, turnInfo]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const fanOffsetOuter = isMobile ? 80 : 140;
  const fanOffsetInner = isMobile ? 40 : 70;

  return (
    <Layout>
      <div className="flex flex-col items-center w-full max-w-lg overflow-hidden md:overflow-visible">
        {state.status === 'intro' && (
          <div className="bg-[#F5F1E3] w-[280px] h-[420px] md:w-[340px] md:h-[500px] rounded-[1.5rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl border-4 border-white/40 animate-fade-in">
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-[#5C4D42] leading-tight">
                Bienvenido/a
              </h2>
              <div className="w-12 h-0.5 bg-[#5C4D42]/20 mx-auto"></div>
              <p className="text-[#5C4D42]/60 text-sm leading-relaxed max-w-[200px]">
                Un espacio para la charla real y el encuentro genuino.
              </p>
            </div>
            <button
              onClick={handleGoToSetup}
              className="w-full bg-[#5C4D42] text-[#F5F1E3] py-5 rounded-full font-bold shadow-lg hover:bg-[#4A3E35] transition-all active:scale-95 text-sm uppercase tracking-widest"
            >
              Entrar
            </button>
          </div>
        )}

        {state.status === 'setup' && (
          <div className="flex flex-col items-center gap-8 w-full">
            <Setup 
              onStart={handleStartGame} 
              onShowFavorites={handleShowFavorites}
              favoritesCount={state.favorites.length}
            />
            <button
              onClick={handleReset}
              className="bg-white/40 border border-[#D4CDB4] text-[#5C4D42]/60 px-10 py-3 rounded-full font-bold hover:text-[#5C4D42] hover:bg-white/80 transition-all text-[10px] uppercase tracking-widest shadow-sm"
            >
              Volver al Inicio
            </button>
          </div>
        )}

        {(state.status === 'playing' || state.status === 'favorites') && state.currentQuestionIndex >= 0 && currentTurnInfo && (
          <div className="flex flex-col items-center w-full">
            <div className="relative flex items-center justify-center w-full h-[480px] md:h-[580px]">
              <CardBack rotation={-15} offset={-fanOffsetOuter} zIndex={1} />
              <CardBack rotation={-8} offset={-fanOffsetInner} zIndex={2} />
              <CardBack rotation={8} offset={fanOffsetInner} zIndex={2} />
              <CardBack rotation={15} offset={fanOffsetOuter} zIndex={1} />
              
              <div className="relative z-10 w-full flex justify-center">
                <AnimatePresence>
                  <motion.div
                    key={state.deck[state.currentQuestionIndex].id}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10, position: 'absolute' }}
                    transition={{ 
                      type: "spring", 
                      damping: 25, 
                      stiffness: 400,
                      opacity: { duration: 0.2 }
                    }}
                    className="w-full flex justify-center"
                  >
                    <Card
                      question={state.deck[state.currentQuestionIndex]}
                      turnInfo={state.status === 'favorites' ? { type: 'FAVORITE' as TurnType, players: [] } : currentTurnInfo}
                      isFavorite={state.favorites.includes(state.deck[state.currentQuestionIndex].id)}
                      onToggleFavorite={() => toggleFavorite(state.deck[state.currentQuestionIndex].id)}
                      onNext={handleNext}
                      onPrev={handlePrev}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            <div className="mt-4 md:mt-4 mb-14 animate-fade-in relative z-20">
              <button
                onClick={handleReset}
                className="bg-[#FAF9F6]/90 border-2 border-[#D4CDB4]/40 text-[#5C4D42]/70 px-8 py-2.5 rounded-full font-bold hover:text-[#5C4D42] hover:bg-white transition-all text-[10px] uppercase tracking-[0.15em] shadow-md active:scale-95 backdrop-blur-sm"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}

        {state.status === 'finished' && (
          <div className="flex flex-col items-center gap-12">
            <div className="bg-[#F5F1E3] w-[280px] h-[420px] md:w-[340px] md:h-[500px] rounded-[1.5rem] p-10 text-center shadow-2xl border-4 border-white/40 flex flex-col justify-between animate-fade-in">
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-serif font-bold text-[#5C4D42]">Mazo terminado</h2>
                <div className="w-8 h-0.5 bg-[#5C4D42]/20 mx-auto"></div>
                <p className="text-sm text-[#5C4D42]/60 leading-relaxed italic">
                  "Lo que queda después de hablar es lo que realmente importa."
                </p>
              </div>
              <p className="text-[10px] text-[#5C4D42]/40 uppercase tracking-widest mb-4 font-bold">¡Gracias por compartir!</p>
            </div>
            <button
              onClick={handleReset}
              className="bg-[#5C4D42] text-[#F5F1E3] px-14 py-4 rounded-full font-bold hover:bg-[#4A3E35] transition-all text-xs uppercase tracking-widest shadow-xl active:scale-95"
            >
              Nuevo Juego
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
