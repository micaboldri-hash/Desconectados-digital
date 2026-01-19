
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

export interface GameState {
  players: Player[];
  currentQuestionIndex: number;
  deck: Question[];
  favorites: number[];
  status: 'intro' | 'setup' | 'playing' | 'favorites' | 'finished';
}

export type TurnType = 'ALL' | 'SINGLE' | 'DUO' | 'GROUP' | 'READER' | 'LEAST_SPOKEN' | 'FAVORITE';

export interface TurnInfo {
  type: TurnType;
  players: string[];
}
