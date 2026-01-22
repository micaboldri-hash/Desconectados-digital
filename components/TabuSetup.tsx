
import React, { useState } from 'react';
import { Player, TabuConfig, Team, TabuDifficulty } from '../types';

interface TabuSetupProps {
  players: Player[];
  onStartGame: (config: TabuConfig) => void;
  onBack: () => void;
}

const TabuSetup: React.FC<TabuSetupProps> = ({ players, onStartGame, onBack }) => {
  const [teamCount, setTeamCount] = useState<number>(2);
  const [turnDuration, setTurnDuration] = useState<number>(60);
  const [difficulty, setDifficulty] = useState<TabuDifficulty>('medio');

  const maxTeams = Math.max(2, Math.floor(players.length / 1)); // At least 1 player per team? Ideally 2.

  const handleStart = () => {
    // Shuffle players
    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
    
    // Create Teams
    const newTeams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
      id: i + 1,
      name: `Equipo ${i + 1}`,
      players: [],
      score: 0
    }));

    // Distribute players
    shuffledPlayers.forEach((player, index) => {
      const teamIndex = index % teamCount;
      newTeams[teamIndex].players.push(player);
    });

    onStartGame({
      teams: newTeams,
      turnDuration,
      difficulty
    });
  };

  return (
    <div className="bg-[#F5F1E3] w-[300px] md:w-[380px] rounded-[2.5rem] p-8 shadow-2xl border-4 border-white/40 flex flex-col items-center gap-6 relative">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#5C4D42]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          🚫
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#5C4D42]">Configurar Tabú</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#5C4D42]/50 mt-2">
          {players.length} Jugadores
        </p>
      </div>

      <div className="w-full space-y-4">
        {/* Teams */}
        <div className="bg-white/50 p-4 rounded-2xl border border-[#D4CDB4]/50">
          <label className="block text-xs uppercase tracking-widest text-[#5C4D42]/60 mb-3 text-center">
            Cantidad de Equipos
          </label>
          <div className="flex items-center justify-between px-4">
            <button 
              onClick={() => setTeamCount(Math.max(2, teamCount - 1))}
              disabled={teamCount <= 2}
              className="w-10 h-10 rounded-full bg-[#5C4D42]/10 text-[#5C4D42] font-bold disabled:opacity-30 hover:bg-[#5C4D42]/20 transition-colors"
            >
              -
            </button>
            <span className="text-3xl font-serif font-bold text-[#5C4D42]">{teamCount}</span>
            <button 
              onClick={() => setTeamCount(Math.min(4, teamCount + 1))}
              disabled={teamCount >= 4}
              className="w-10 h-10 rounded-full bg-[#5C4D42]/10 text-[#5C4D42] font-bold disabled:opacity-30 hover:bg-[#5C4D42]/20 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Time */}
        <div className="bg-white/50 p-4 rounded-2xl border border-[#D4CDB4]/50">
          <label className="block text-xs uppercase tracking-widest text-[#5C4D42]/60 mb-2 text-center">
            Tiempo de Turno
          </label>
          <div className="flex justify-center gap-2">
            {[30, 60, 90, 120].map(t => (
              <button
                key={t}
                onClick={() => setTurnDuration(t)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${turnDuration === t ? 'bg-[#5C4D42] text-[#F5F1E3]' : 'bg-[#5C4D42]/10 text-[#5C4D42]'}`}
              >
                {t}s
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="bg-white/50 p-4 rounded-2xl border border-[#D4CDB4]/50">
          <label className="block text-xs uppercase tracking-widest text-[#5C4D42]/60 mb-2 text-center">
            Dificultad
          </label>
          <div className="flex justify-center gap-2">
            {(['facil', 'medio', 'dificil'] as TabuDifficulty[]).map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-3 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${difficulty === d ? 'bg-[#5C4D42] text-[#F5F1E3]' : 'bg-[#5C4D42]/10 text-[#5C4D42]'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full space-y-3 pt-2">
        <button
          onClick={handleStart}
          className="w-full bg-[#5C4D42] text-[#F5F1E3] py-5 rounded-[1.5rem] font-bold shadow-xl active:scale-95 text-[12px] uppercase tracking-widest transition-colors hover:bg-[#4A3E35]"
        >
          ¡A Jugar!
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

export default TabuSetup;
