
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Setup from './components/Setup';
import GameMenu from './components/GameMenu';
import DianoiaGame from './components/DianoiaGame';
import ImpostorGame from './components/ImpostorGame';
import TabuGame from './components/TabuGame';
import Landing from './components/Landing';
import { Player, GameMode } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'landing' | 'menu' | 'setup' | 'game'>('landing');
  const [activeGame, setActiveGame] = useState<GameMode>('dianoia');
  const [players, setPlayers] = useState<Player[]>([]);

  const handleEnterApp = () => {
    setScreen('menu');
  };

  const handleGameSelect = (mode: GameMode) => {
    setActiveGame(mode);
    setScreen('setup');
  };

  const handleStartGame = (gamePlayers: Player[]) => {
    setPlayers(gamePlayers);
    setScreen('game');
  };

  const handleExitGame = () => {
    setScreen('setup');
  };

  const handleBackToMenu = () => {
    setScreen('menu');
    setPlayers([]);
  };

  return (
    <Layout 
      withHeader={screen !== 'landing'} 
      headerVariant={screen === 'game' ? 'compact' : 'default'}
    >
      <AnimatePresence mode="wait">
        {screen === 'landing' && (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-full flex items-center justify-center"
          >
            <Landing onEnter={handleEnterApp} />
          </motion.div>
        )}

        {screen === 'menu' && (
          <motion.div 
            key="menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-full flex items-center justify-center"
          >
            <GameMenu onSelect={handleGameSelect} />
          </motion.div>
        )}

        {screen === 'setup' && (
          <motion.div 
            key="setup"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full min-h-full flex flex-col items-center justify-center relative"
          >
            <Setup 
              onStart={handleStartGame} 
              onShowFavorites={() => {}} 
              favoritesCount={0}
              onBack={handleBackToMenu}
              initialPlayers={players}
            />
          </motion.div>
        )}

        {screen === 'game' && (
          <motion.div 
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full min-h-full flex flex-col"
          >
            {activeGame === 'dianoia' ? (
              <DianoiaGame players={players} onExit={handleExitGame} />
            ) : activeGame === 'impostor' ? (
              <ImpostorGame players={players} onExit={handleExitGame} />
            ) : (
              <TabuGame players={players} onExit={handleExitGame} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
