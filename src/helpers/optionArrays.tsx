export type GameSize = {
  name: string;
  size: number;
};
export type GameDifficulty = {
  name: string;
  difficulty: number;
};

export const GAME_SIZE: GameSize[] = [
  { name: ' small', size: 10 },
  { name: 'medium', size: 15 },
  { name: 'large', size: 25 },
];

export const GAME_DIFICULTY: GameDifficulty[] = [
  { name: 'easy', difficulty: 5 },
  { name: 'medium', difficulty: 3 },
  { name: 'hard', difficulty: 2 },
];
