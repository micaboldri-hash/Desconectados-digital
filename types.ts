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

export type GameMode = 'dianoia' | 'impostor';

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