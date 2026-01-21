import React, { useState } from 'react';
import { Player, ImpostorConfig } from '../types';

interface ImpostorSetupProps {
  players: Player[];
  onStartGame: (config: ImpostorConfig) => void;
  onBack: () => void;
  initialConfig?: ImpostorConfig;
}

const ImpostorSetup: React.FC<ImpostorSetupProps> = ({ players, onStartGame, onBack, initialConfig }) => {
  const maxImpostors = Math.max(1, Math.floor((players.length - 1) / 2));
  // Use previous config or defaults
  const [impostorCount, setImpostorCount] = useState(initialConfig?.impostorCount || 1);
  const [allowHints, setAllowHints] = useState(initialConfig?.allowHints || false);

  const handleIncrement = () => {
    if (impostorCount < maxImpostors) setImpostorCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (impostorCount > 1) setImpostorCount(prev => prev - 1);
  };

  const handleStart = () => {
    onStartGame({ impostorCount, allowHints });
  };

  return (
    <div className="bg-[#F5F1E3] w-[300px] md:w-[380px] rounded-[2.5rem] p-8 shadow-2xl border-4 border-white/40 flex flex-col items-center gap-8 relative">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#5C4D42]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          🎭
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#5C4D42]">Ajustes de Partida</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#5C4D42]/50 mt-2">
          {players.length} Jugadores detectados
        </p>
      </div>

      <div className="w-full space-y-6">
        {/* Cantidad de Impostores */}
        <div className="bg-white/50 p-4 rounded-2xl border border-[#D4CDB4]/50">
          <label className="block text-xs uppercase tracking-widest text-[#5C4D42]/60 mb-3 text-center">
            Cantidad de Impostores
          </label>
          <div className="flex items-center justify-between px-4">
            <button 
              onClick={handleDecrement}
              disabled={impostorCount <= 1}
              className="w-10 h-10 rounded-full bg-[#5C4D42]/10 text-[#5C4D42] font-bold disabled:opacity-30 hover:bg-[#5C4D42]/20 transition-colors"
            >
              -
            </button>
            <span className="text-3xl font-serif font-bold text-[#5C4D42]">{impostorCount}</span>
            <button 
              onClick={handleIncrement}
              disabled={impostorCount >= maxImpostors}
              className="w-10 h-10 rounded-full bg-[#5C4D42]/10 text-[#5C4D42] font-bold disabled:opacity-30 hover:bg-[#5C4D42]/20 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Pistas Toggle */}
        <div className="bg-white/50 p-4 rounded-2xl border border-[#D4CDB4]/50 flex items-center justify-between cursor-pointer" onClick={() => setAllowHints(!allowHints)}>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#5C4D42]">Pistas al Impostor</span>
            <span className="text-[10px] text-[#5C4D42]/60 leading-tight">Palabra relacionada para ayudar</span>
          </div>
          <div className={`w-12 h-7 rounded-full p-1 transition-colors ${allowHints ? 'bg-[#8B735B]' : 'bg-[#D4CDB4]'}`}>
            <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${allowHints ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </div>
      </div>

      <div className="w-full space-y-3 pt-2">
        <button
          onClick={handleStart}
          className="w-full bg-[#5C4D42] text-[#F5F1E3] py-5 rounded-[1.5rem] font-bold shadow-xl active:scale-95 text-[12px] uppercase tracking-widest transition-colors hover:bg-[#4A3E35]"
        >
          Repartir Cartas
        </button>
        <button
          onClick={onBack}
          className="w-full text-[#5C4D42]/40 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#5C4D42]"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ImpostorSetup;