
import React, { useState, useEffect } from 'react';
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
  const [teamNames, setTeamNames] = useState<string[]>(['Equipo 1', 'Equipo 2']);

  // Update names if team count changes
  useEffect(() => {
    setTeamNames(prev => {
      const newNames = [...prev];
      if (teamCount > prev.length) {
        for (let i = prev.length; i < teamCount; i++) {
          newNames.push(`Equipo ${i + 1}`);
        }
      } else {
        return newNames.slice(0, teamCount);
      }
      return newNames;
    });
  }, [teamCount]);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...teamNames];
    newNames[index] = value;
    setTeamNames(newNames);
  };

  const handleStart = () => {
    // 1. Shuffle players to create the Turn Order (Round Robin)
    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
    
    // 2. Create Teams Objects
    const newTeams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
      id: i + 1,
      name: teamNames[i].trim() || `Equipo ${i + 1}`,
      players: [],
      score: 0
    }));

    // 3. Distribute players into teams (interleaved)
    // This ensures that in the Turn Order (P1, P2, P3, P4), P1 is Team A, P2 is Team B, etc.
    shuffledPlayers.forEach((player, index) => {
      const teamIndex = index % teamCount;
      newTeams[teamIndex].players.push(player);
    });

    onStartGame({
      teams: newTeams,
      turnDuration,
      difficulty,
      turnOrder: shuffledPlayers
    });
  };

  return (
    <div className="bg-[#F5F1E3] w-[300px] md:w-[380px] h-[600px] rounded-[2.5rem] p-8 shadow-2xl border-4 border-white/40 flex flex-col items-center gap-6 relative overflow-hidden">
      <div className="text-center pt-2 shrink-0">
        <h2 className="text-2xl font-serif font-bold text-[#5C4D42]">CONFIGURAR TABÚ</h2>
        <p className="text-[10px] uppercase tracking-widest text-[#5C4D42]/50 mt-2">
          {players.length} INTEGRANTES
        </p>
      </div>

      <div className="w-full flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1">
        {/* Nombres de Equipos */}
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-widest text-[#5C4D42]/60 text-center mb-1">
            Nombres de Equipos
          </label>
          {teamNames.map((name, index) => (
            <input
              key={index}
              type="text"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder={`Nombre Equipo ${index + 1}`}
              className="w-full bg-white/60 border border-[#D4CDB4] rounded-xl px-4 py-3 text-[#5C4D42] text-sm focus:bg-white outline-none text-center font-bold"
            />
          ))}
          
          <div className="flex items-center justify-center gap-4 mt-2">
            <button 
              onClick={() => setTeamCount(Math.max(2, teamCount - 1))}
              disabled={teamCount <= 2}
              className="w-8 h-8 rounded-full bg-[#5C4D42]/10 text-[#5C4D42] font-bold disabled:opacity-30 hover:bg-[#5C4D42]/20"
            >
              -
            </button>
            <span className="text-xs uppercase tracking-widest text-[#5C4D42]/60">
              {teamCount} Equipos
            </span>
            <button 
              onClick={() => setTeamCount(Math.min(4, teamCount + 1))}
              disabled={teamCount >= 4}
              className="w-8 h-8 rounded-full bg-[#5C4D42]/10 text-[#5C4D42] font-bold disabled:opacity-30 hover:bg-[#5C4D42]/20"
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

      <div className="w-full space-y-3 pt-2 shrink-0">
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
