/* eslint-disable @typescript-eslint/naming-convention */
import type { GameSize, GameDifficulty } from './optionArrays';

export type Cell = { rowI: number; colI: number };
export type CellText = 'bomb' | 'empty' | number;
export type Grid = { id: number; cell: CellText; isOpen: boolean; haveFlag: boolean };


export type typeResultObj = {
  id: string;
  name: string;
  time: number;
  size: string;
  difficulty: string;
};


export type typeHeader = {
  isGameStarted: boolean;
  isTimerStarted: boolean;
  resetTimer: boolean;
  showResults: boolean;
  gameSize: number;
  gameDifficulty: number;
  gameSizeArr: GameSize[];
  gameDifficultyArr: GameDifficulty[];
  getTimerValue: (time: number) => void;
  handleShowResults: () => void;
  handleStart: () => void;
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type typeOneCell = {
  oneCell: Grid;
  hadleRightClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleOpen: () => void;
  isGridDisabled: boolean;
  gridSize: number;
};

export type typeOptions = {
  gameSize: number;
  gameDifficulty: number;
  gameSizeArr: GameSize[]
  gameDifficultyArr: GameDifficulty[]
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type typeRestart = {
  handleRestart: () => void;
};

export type typeResults = {
  showResults: boolean;
  results: typeResultObj[];
};

export type typeTimer = {
  isTimerStarted: boolean;
  resetTimer: boolean;
  getTimerValue: (time: number) => void;
};
export type typeWinner = {
  winnerName:string;
  handleWinnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWinner:() => void
};