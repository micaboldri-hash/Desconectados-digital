
import React, { useState } from 'react';
import { Player } from '../types';

interface SetupProps {
  onStart: (players: Player[]) => void;
  onShowFavorites: () => void;
  favoritesCount: number;
}

const Setup: React.FC<SetupProps> = ({ onStart, onShowFavorites, favoritesCount }) => {
  const [names, setNames] = useState<string[]>(['', '']);

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

  return (
    <div className="bg-[#F5F1E3] w-[320px] min-h-[580px] md:w-[400px] md:min-h-[620px] rounded-[2.5rem] p-10 shadow-2xl border-4 border-white/40 flex flex-col animate-fade-in relative overflow-hidden">
      <div className="flex-1 flex flex-col space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-[#5C4D42] mb-1">Configuración</h2>
          <div className="w-12 h-0.5 bg-[#8B735B]/30 mx-auto mt-2"></div>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex justify-between items-center mb-2 px-2">
              <label className="text-[11px] font-bold text-[#5C4D42]/50 uppercase tracking-[0.2em]">Amigos</label>
            </div>
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-3 custom-scrollbar transition-all duration-300">
              {names.map((name, index) => (
                <div key={index} className="flex gap-2 group animate-fade-in-up" style={{ animationDelay: `${index * 40}ms` }}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                    placeholder={`¿Cómo se llama?`}
                    className="flex-1 bg-white/60 border border-[#D4CDB4] rounded-2xl px-5 py-4 text-[#5C4D42] text-sm focus:bg-white focus:ring-2 focus:ring-[#8B735B]/20 outline-none transition-all placeholder:text-[#5C4D42]/20 shadow-sm"
                    required={index < 2}
                  />
                  {names.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemovePlayer(index)}
                      className="text-[#5C4D42]/30 hover:text-red-400/60 transition-colors px-1"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddPlayer}
                className="w-full py-4 text-[#8B735B]/70 hover:text-[#5C4D42] text-[11px] font-bold transition-all uppercase tracking-[0.2em] border-2 border-dashed border-[#8B735B]/10 rounded-2xl mt-2 hover:bg-[#8B735B]/5"
              >
                + Añadir participante
              </button>
            </div>
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-4">
             {favoritesCount > 0 && (
              <button
                type="button"
                onClick={onShowFavorites}
                className="w-full bg-white/60 border-2 border-[#8B735B]/20 text-[#8B735B] font-bold py-4 rounded-[1.5rem] transition-all hover:bg-white active:scale-95 text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                TUS FAVORITAS ({favoritesCount})
              </button>
            )}
            
            <button
              type="submit"
              className="w-full bg-[#5C4D42] hover:bg-[#4A3E35] text-[#F5F1E3] font-bold py-5 rounded-[1.5rem] transition-all shadow-xl active:scale-95 text-[13px] uppercase tracking-[0.2em]"
            >
              Comenzar Juego
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setup;
