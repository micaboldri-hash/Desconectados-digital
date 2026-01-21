import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player, ImpostorPhase, ImpostorConfig, ImpostorWord } from '../types';
import { IMPOSTOR_WORDS, CIVIL_PHRASES, IMPOSTOR_PHRASES } from '../data/impostorData';
import ImpostorSetup from './ImpostorSetup';

interface ImpostorGameProps {
  players: Player[];
  onExit: () => void;
}

const ImpostorGame: React.FC<ImpostorGameProps> = ({ players, onExit }) => {
  const [config, setConfig] = useState<ImpostorConfig | null>(null);
  const [gameWord, setGameWord] = useState<ImpostorWord | null>(null);
  const [impostorIds, setImpostorIds] = useState<string[]>([]);
  const [phase, setPhase] = useState<ImpostorPhase>('setup');
  const [seenPlayers, setSeenPlayers] = useState<string[]>([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [showingSecret, setShowingSecret] = useState(false);
  const [starterPlayer, setStarterPlayer] = useState('');
  
  // Random phrases assigned for this round to ensure they don't change on re-render
  const [playerPhrases, setPlayerPhrases] = useState<Record<string, string>>({});

  const initializeGame = (gameConfig: ImpostorConfig) => {
    setConfig(gameConfig);
    setSeenPlayers([]); // Reset seen players for new round
    setSelectedPlayerId(null);
    setShowingSecret(false);
    setStarterPlayer('');
    
    // Select word
    const randomWordObj = IMPOSTOR_WORDS[Math.floor(Math.random() * IMPOSTOR_WORDS.length)];
    setGameWord(randomWordObj);

    // Select Impostors
    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
    const selectedImpostors = shuffledPlayers.slice(0, gameConfig.impostorCount).map(p => p.id);
    setImpostorIds(selectedImpostors);

    // Assign phrases
    const phrasesMap: Record<string, string> = {};
    players.forEach(p => {
      const isImpostor = selectedImpostors.includes(p.id);
      const source = isImpostor ? IMPOSTOR_PHRASES : CIVIL_PHRASES;
      phrasesMap[p.id] = source[Math.floor(Math.random() * source.length)];
    });
    setPlayerPhrases(phrasesMap);

    setPhase('distribution');
  };

  const handlePlayerClick = (id: string) => {
    setSelectedPlayerId(id);
    setShowingSecret(true);
  };

  const handleCloseSecret = () => {
    if (selectedPlayerId) {
      setSeenPlayers(prev => [...prev, selectedPlayerId]);
    }
    setShowingSecret(false);
    setSelectedPlayerId(null);

    // Check if everyone has seen
    if (seenPlayers.length + 1 === players.length) {
      const starter = players[Math.floor(Math.random() * players.length)].name;
      setStarterPlayer(starter);
      setPhase('round');
    }
  };

  const handlePlayAgain = () => {
    setPhase('setup');
  };

  if (phase === 'setup') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ImpostorSetup 
          players={players} 
          onStartGame={initializeGame} 
          onBack={onExit} 
          initialConfig={config || undefined}
        />
      </div>
    );
  }

  if (phase === 'distribution') {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full relative">
        <h2 className="text-2xl font-serif font-bold text-[#5C4D42] mb-8">
          Cartas Secretas
        </h2>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm px-4">
          {players.filter(p => !seenPlayers.includes(p.id)).map((player) => (
            <motion.button
              key={player.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePlayerClick(player.id)}
              className="bg-[#F5F1E3] border-2 border-[#D4CDB4] rounded-2xl py-6 text-[#5C4D42] font-bold shadow-md hover:border-[#8B735B]"
            >
              {player.name}
            </motion.button>
          ))}
        </div>

        {/* Secret Modal */}
        <AnimatePresence>
          {showingSecret && selectedPlayerId && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-[#FAF9F6]/95 p-6"
            >
              <div className="bg-white w-full max-w-sm rounded-[2rem] p-10 shadow-2xl border border-[#D4CDB4] text-center flex flex-col justify-between min-h-[400px]">
                 
                 {impostorIds.includes(selectedPlayerId) ? (
                   // IMPOSTOR CARD
                   <div className="flex-1 flex flex-col items-center justify-center">
                     <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50">TU ROL ES</p>
                     <h3 className="text-4xl font-serif font-bold text-[#8B735B] mt-6 mb-8 tracking-wide">
                       IMPOSTOR
                     </h3>
                     
                     {config?.allowHints && gameWord && (
                        <div className="bg-[#F5F1E3] px-6 py-3 rounded-xl mb-6 border border-[#8B735B]/20">
                          <p className="text-[10px] uppercase tracking-widest text-[#8B735B]/60 mb-1">Pista</p>
                          <p className="text-lg font-bold text-[#5C4D42]">{gameWord.hint}</p>
                        </div>
                     )}

                     <p className="text-sm italic text-[#5C4D42]/80 leading-relaxed">
                       "{playerPhrases[selectedPlayerId]}"
                     </p>
                   </div>
                 ) : (
                   // CIVIL CARD
                   <div className="flex-1 flex flex-col items-center justify-center">
                     <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50">TU PALABRA ES</p>
                     <h3 className="text-4xl font-serif font-bold text-[#5C4D42] mt-6 mb-8 uppercase tracking-wide">
                       {gameWord?.word}
                     </h3>
                     <p className="text-sm italic text-[#5C4D42]/80 leading-relaxed">
                       "{playerPhrases[selectedPlayerId]}"
                     </p>
                   </div>
                 )}

                 <button
                   onClick={handleCloseSecret}
                   className="bg-[#5C4D42] text-[#F5F1E3] w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs mt-8 hover:bg-[#4A3E35] transition-colors"
                 >
                   Ya la vi
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (phase === 'round') {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center px-6 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#F5F1E3] p-8 rounded-[2rem] border-2 border-white/50 shadow-xl max-w-md w-full"
        >
          <div className="w-16 h-16 bg-[#5C4D42]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            🗣️
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#5C4D42] mb-4">¡A Chamuyar!</h2>
          <p className="text-[#5C4D42]/80 leading-relaxed mb-6">
            Hagan <strong>2 rondas</strong> describiendo la palabra (o mintiendo).
          </p>
          <div className="bg-white/60 p-4 rounded-xl">
             <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50 mb-1">Empieza</p>
             <p className="text-xl font-bold text-[#5C4D42]">{starterPlayer}</p>
          </div>
        </motion.div>

        <button
          onClick={() => setPhase('voting')}
          className="bg-[#5C4D42] text-[#F5F1E3] px-10 py-5 rounded-full font-bold shadow-lg uppercase tracking-[0.2em] text-xs hover:bg-[#4A3E35] active:scale-95 transition-all"
        >
          Ir a Votación
        </button>
      </div>
    );
  }

  // Voting Phase
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center px-6 gap-8">
       <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#E8E4D5] p-10 rounded-[2.5rem] border-4 border-white/40 shadow-2xl max-w-md w-full"
        >
          <h2 className="text-3xl font-serif font-bold text-[#5C4D42] mb-6">¿Quién fue?</h2>
          <p className="text-sm text-[#5C4D42]/70 mb-8">Señalen todos a la cuenta de 3...</p>
          
          <div className="border-t border-[#5C4D42]/10 pt-6">
            <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50 mb-2">La palabra era</p>
            <p className="text-4xl font-serif font-bold text-[#8B735B] mb-6">{gameWord?.word}</p>
          </div>

           <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-[#5C4D42]/50 mb-2">
              {impostorIds.length > 1 ? 'Los impostores eran' : 'El impostor era'}
            </p>
            <div className="flex flex-col gap-1">
              {impostorIds.map(id => (
                 <p key={id} className="text-xl font-bold text-[#5C4D42]">
                   {players.find(p => p.id === id)?.name}
                 </p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={handlePlayAgain}
            className="bg-[#5C4D42] text-[#F5F1E3] py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-[#4A3E35] transition-all"
          >
            Otra Ronda
          </button>
          <button
            onClick={onExit}
            className="text-[#5C4D42]/60 hover:text-[#5C4D42] font-bold uppercase tracking-widest text-xs py-2"
          >
            Volver al Menú
          </button>
        </div>
    </div>
  );
};

export default ImpostorGame;