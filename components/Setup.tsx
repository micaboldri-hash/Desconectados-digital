
import React, { useState } from 'react';
import { Player, DianoiaMode } from '../types';

interface SetupProps {
  onStart: (players: Player[]) => void;
  onShowFavorites: () => void;
  onBack: () => void;
  favoritesCount: number;
  initialPlayers?: Player[];
  activeGameMode?: string;
  dianoiaMode?: DianoiaMode;
}

const Setup: React.FC<SetupProps> = ({ onStart, onShowFavorites, onBack, favoritesCount, initialPlayers, activeGameMode, dianoiaMode }) => {
  const [names, setNames] = useState<string[]>(() => {
    if (initialPlayers && initialPlayers.length > 0) {
      return initialPlayers.map(p => p.name);
    }
    return ['', ''];
  });
  
  const handleAddPlayer = () => {
    setNames([...names, '']);
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleRemovePlayer = (index: number) => {
    if (names.length > 2) {
      setNames(names.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const players: Player[] = names
      .filter(n => n.trim() !== '')
      .map((name, i) => ({ id: `p-${i}-${Date.now()}`, name: name.trim() }));
    
    if (players.length >= 2) {
      onStart(players);
    } else {
      alert("Por favor, ingresa al menos 2 nombres.");
    }
  };

  const getTitle = () => {
    if (activeGameMode === 'dianoia') {
      return dianoiaMode === 'spicy' ? 'DICIENDO DE MÁS' : 'DICIENDO TODO';
    }
    return 'INTEGRANTES';
  };

  return (
    <div className="bg-[#F5F1E3] w-[300px] h-[580px] md:w-[400px] md:h-[680px] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white/40 flex flex-col animate-fade-in relative overflow-hidden">
      
      {/* Botón Volver (Flecha) */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#5C4D42]/10 text-[#5C4D42] hover:bg-[#5C4D42] hover:text-[#F5F1E3] transition-all z-20"
        title="Volver"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <div className="flex-1 flex flex-col overflow-hidden mt-12">
        <div className="text-center shrink-0 mb-6">
          <h2 className="text-2xl font-serif font-bold text-[#5C4D42]">
            {getTitle()}
          </h2>
          <p className="text-[10px] text-[#5C4D42]/40 uppercase tracking-widest mt-1">Configuración de partida</p>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 mb-6">
            {names.map((name, index) => (
              <div key={index} className="flex gap-2 group animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  placeholder={`Amigo ${index + 1}`}
                  className="flex-1 bg-white/60 border border-[#D4CDB4] rounded-2xl px-5 py-4 text-[#5C4D42] text-sm focus:bg-white focus:ring-2 focus:ring-[#8B735B]/10 outline-none transition-all placeholder:text-[#5C4D42]/20"
                  required={index < 2}
                />
                {names.length > 2 && (
                  <button
                    type="button"
                    onClick={() => handleRemovePlayer(index)}
                    className="text-[#5C4D42]/20 hover:text-red-400 transition-colors w-8"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPlayer}
              className="w-full py-4 text-[#8B735B]/60 hover:text-[#5C4D42] text-[10px] font-bold transition-all uppercase tracking-[0.2em] border-2 border-dashed border-[#8B735B]/10 rounded-2xl"
            >
              + Añadir
            </button>
          </div>

          <div className="shrink-0 space-y-3">
            {activeGameMode === 'dianoia' && favoritesCount > 0 && (
              <button
                type="button"
                onClick={onShowFavorites}
                className="w-full py-4 bg-white/40 border border-[#8B735B]/20 text-[#8B735B] font-bold rounded-[1.2rem] text-[10px] uppercase tracking-[0.2em]"
              >
                Favoritas ({favoritesCount})
              </button>
            )}
            <button
              type="submit"
              className="w-full bg-[#5C4D42] text-[#F5F1E3] py-5 rounded-[1.5rem] font-bold shadow-xl active:scale-95 text-[12px] uppercase tracking-widest transition-colors hover:bg-[#4A3E35]"
            >
              Comenzar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setup;
