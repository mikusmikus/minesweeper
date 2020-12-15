/* eslint-disable @typescript-eslint/naming-convention */

export type Cell = { rowI: number; colI: number };
export type CellText = 'bomb' | 'empty' | number;
export type Grid = { id: number; cell: CellText; isOpen: boolean; haveFlag: boolean };

export type Option = {
  optionName: string;
  optionValue: number;
};

export type typeResultObj = {
  id: string;
  name: string;
  time: number;
  size: string;
  difficulty: string;
};

export type typeSelectOption = {
  value: number;
  name: string;
  label: string;
  optionArr: Option[];
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type TypeButton = {
  handleClick: () => void;
  className?: string;
  disabled?: boolean;
  label: string;
};

export type TypeInput = {
  value: string;
  placeholder?: string;
  className?: string;
  focus?: boolean;
  handleInputName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TypeTable = {
  tableData: typeResultObj[];
};

export type typeHeader = {
  isGameStarted: boolean;
  isTimerStarted: boolean;
  resetTimer: boolean;
  showResults: boolean;
  gameSize: number;
  gameDifficulty: number;
  gameSizeArr: Option[];
  gameDifficultyArr: Option[];
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
  gameSizeArr: Option[]
  gameDifficultyArr: Option[]
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