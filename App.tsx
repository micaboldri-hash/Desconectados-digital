
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Setup from './components/Setup';
import Card from './components/Card';
import { Player, Question, GameState, TurnInfo, TurnType } from './types';
import { QUESTIONS } from './questions';

const CardBack = ({ rotation, offset, zIndex, scale = 1, opacity = 1 }: { rotation: number, offset: number, zIndex: number, scale?: number, opacity?: number }) => (
  <div 
    className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] bg-[#F5F1E3] border-2 border-white/60 shadow-xl flex items-center justify-center overflow-hidden transition-all duration-700 pointer-events-none origin-bottom"
    style={{ 
      transform: `translateX(${offset}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity
    }}
  >
    <div className="w-full h-full opacity-[0.02] flex flex-wrap gap-2 p-6 justify-center items-center">
       {Array.from({ length: 80 }).map((_, i) => (
        <div key={i} className="w-5 h-5 rounded-full border border-[#5C4D42]"></div>
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
    
    if (rand < 0.15) {
      return { type: 'ALL', players: playerNames };
    } else if (rand < 0.25) {
      return { type: 'READER', players: [] };
    } else if (rand < 0.35) {
      return { type: 'LEAST_SPOKEN', players: [] };
    } else {
      const maxToPick = Math.max(1, Math.min(2, n - 1));
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
    if (favoriteQuestions.length === 0) return;
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

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      handleNext();
    } else {
      handlePrev();
    }
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

  return (
    <Layout>
      <div className="flex flex-col items-center w-full max-w-2xl h-full justify-center relative">
        {state.status === 'intro' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-[#F5F1E3] w-[300px] h-[480px] md:w-[380px] md:h-[580px] rounded-[3rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl border-4 border-white/40 relative overflow-hidden"
          >
            <div className="flex-1 flex flex-col justify-center items-center relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5C4D42] tracking-wide">
                δ ι α ν ο ι α
              </h2>
              
              <p className="text-[11px] md:text-[12px] text-[#5C4D42]/80 leading-relaxed font-medium max-w-[260px]">
                En la filosofía griega, Dianoia no es solo "pensar", es el proceso de la razón discursiva. Es la facultad que usamos para analizar nuestras vidas, cuestionar nuestras creencias y llegar a nuevas verdades a través del diálogo.
              </p>
            </div>
            
            <button
              onClick={handleGoToSetup}
              className="w-full bg-[#5C4D42] text-[#F5F1E3] py-6 rounded-[2rem] font-bold shadow-xl hover:bg-[#4A3E35] transition-all active:scale-95 text-[12px] uppercase tracking-widest relative z-10 mt-4"
            >
              Comenzar
            </button>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          </motion.div>
        )}

        {state.status === 'setup' && (
          <div className="flex flex-col items-center gap-8 w-full max-h-full py-6 overflow-hidden">
            <Setup 
              onStart={handleStartGame} 
              onShowFavorites={handleShowFavorites}
              favoritesCount={state.favorites.length}
            />
            <button
              onClick={handleReset}
              className="text-[#5C4D42]/40 px-8 py-3 rounded-full font-bold hover:text-[#5C4D42] hover:bg-white/40 transition-all text-[10px] uppercase tracking-[0.25em]"
            >
              ← Volver
            </button>
          </div>
        )}

        {(state.status === 'playing' || state.status === 'favorites') && state.currentQuestionIndex >= 0 && currentTurnInfo && (
          <div className="flex flex-col items-center w-full h-full relative overflow-visible">
            
            {/* 
              CARD STAGE
              Este contenedor define el espacio físico de las cartas.
              Tiene dimensiones fijas y position: relative para que los hijos absolute
              se posicionen respecto a ÉL y no a la pantalla.
            */}
            <div className="flex-1 w-full flex items-center justify-center py-4">
              <div className="relative w-[300px] h-[450px] md:w-[380px] md:h-[550px]">
                
                {/* Decorative Back Fan - contained inside the stage */}
                <CardBack rotation={-6} offset={-20} zIndex={1} scale={0.92} opacity={0.5} />
                <CardBack rotation={6} offset={20} zIndex={1} scale={0.92} opacity={0.5} />
                <CardBack rotation={-3} offset={-10} zIndex={2} scale={0.95} opacity={0.7} />
                <CardBack rotation={3} offset={10} zIndex={2} scale={0.95} opacity={0.7} />

                {/* Live Cards */}
                <AnimatePresence mode="popLayout">
                  {/* NEXT CARD (Background) */}
                  {state.currentQuestionIndex + 1 < state.deck.length && (
                    <Card
                      key={state.deck[state.currentQuestionIndex + 1].id}
                      question={state.deck[state.currentQuestionIndex + 1]}
                      turnInfo={{ type: 'ALL', players: [] }}
                      isFavorite={state.favorites.includes(state.deck[state.currentQuestionIndex + 1].id)}
                      isBackground={true}
                      onToggleFavorite={() => {}}
                      onSwipe={() => {}}
                    />
                  )}

                  {/* CURRENT CARD (Active) */}
                  <Card
                    key={state.deck[state.currentQuestionIndex].id}
                    question={state.deck[state.currentQuestionIndex]}
                    turnInfo={state.status === 'favorites' ? { type: 'FAVORITE' as TurnType, players: [] } : currentTurnInfo}
                    isFavorite={state.favorites.includes(state.deck[state.currentQuestionIndex].id)}
                    isBackground={false}
                    onToggleFavorite={() => toggleFavorite(state.deck[state.currentQuestionIndex].id)}
                    onSwipe={handleSwipe}
                  />
                </AnimatePresence>
              </div>
            </div>
            
            <div className="pb-10 shrink-0 z-20">
              <button
                onClick={handleReset}
                className="bg-white/40 border border-[#D4CDB4]/40 text-[#5C4D42]/40 px-10 py-4 rounded-full font-bold hover:text-[#5C4D42] hover:bg-white transition-all text-[10px] uppercase tracking-[0.2em] shadow-sm backdrop-blur-md"
              >
                Finalizar Sesión
              </button>
            </div>
          </div>
        )}

        {state.status === 'finished' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-10 text-center"
          >
            <div className="bg-[#F5F1E3] w-[300px] h-[400px] md:w-[380px] md:h-[480px] rounded-[3rem] p-12 shadow-2xl border-4 border-white/40 flex flex-col justify-center items-center relative overflow-hidden">
              <h2 className="text-3xl font-serif font-bold text-[#5C4D42] mb-6 italic leading-snug">Fin del mazo</h2>
              <div className="w-10 h-1 bg-[#5C4D42]/10 mx-auto mb-8 rounded-full"></div>
              <p className="text-sm text-[#5C4D42]/60 leading-relaxed font-medium">
                Gracias por permitirte<br/><span className="italic">conectar</span> con el resto.
              </p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#8B735B]/5 rounded-full blur-2xl"></div>
            </div>
            <button
              onClick={handleReset}
              className="bg-[#5C4D42] text-[#F5F1E3] px-14 py-6 rounded-[2rem] font-bold shadow-2xl active:scale-95 text-[13px] uppercase tracking-[0.2em] hover:bg-[#4A3E35] transition-colors"
            >
              Nuevo Comienzo
            </button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default App;
