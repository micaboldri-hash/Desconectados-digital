
export interface Question {
  id: number;
  text: string;
  category?: string;
  followUps?: string[];
}

export interface Player {
  id: string;
  name: string;
}

export type GameMode = 'dianoia' | 'impostor' | 'tabu';
export type DianoiaMode = 'normal' | 'spicy';

export interface DianoiaState {
  currentQuestionIndex: number;
  deck: Question[];
  favorites: number[];
  turnInfo: TurnInfo | null;
  status: 'playing' | 'favorites' | 'finished';
}

export interface TurnInfo {
  type: TurnType;
  players: string[];
}

export type TurnType = 'ALL' | 'SINGLE' | 'DUO' | 'GROUP' | 'READER' | 'LEAST_SPOKEN' | 'FAVORITE';

export type ImpostorPhase = 'setup' | 'distribution' | 'round' | 'voting';

export interface ImpostorWord {
  word: string;
  hint: string; // Palabra relacionada
}

export interface ImpostorConfig {
  impostorCount: number;
  allowHints: boolean;
}

// TABÚ TYPES
export type TabuDifficulty = 'facil' | 'medio' | 'dificil';

export interface TabuWord {
  word: string;
  forbidden: string[];
}

export interface Team {
  id: number;
  name: string;
  players: Player[];
  score: number;
}

export interface TabuConfig {
  teams: Team[];
  turnDuration: number; // segundos
  difficulty: TabuDifficulty;
  turnOrder: Player[]; // Lista ordenada de jugadores para la rotación (1, 2, 3, 4...)
}