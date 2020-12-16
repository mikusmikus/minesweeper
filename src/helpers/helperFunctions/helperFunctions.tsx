/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { cloneDeep, random } from 'lodash';
import type { Grid, Cell, CellText } from '../types/types';

export const drawGrid = (size: number) => {
  let gridArr: Grid[] = [];
  const gridArr2d: Grid[][] = [];
  let id = 1;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      gridArr.push({ id, cell: 0, isOpen: false, haveFlag: false });
      id += 1;
    }
    gridArr2d.push(gridArr);
    gridArr = [];
  }
  return gridArr2d;
};

export const drawBombs = (cell: Cell, bombCount: number, grid: Grid[][]): Grid[][] => {
  const gridCopy = cloneDeep(grid);
  gridCopy.forEach((arr) => {
    const bombCountEachRow = random(1, bombCount);

    for (let i = 0; i < bombCountEachRow; i++) {
      const randomIndex = random(arr.length - 1);
      arr[randomIndex].cell = 'bomb';
    }
  });
  gridCopy[cell.rowI][cell.colI].cell = 0;
  return gridCopy;
};

export const drawAroundFirstClicked = (cell: Cell, size: number, grid: Grid[][]): Grid[][] => {
  const gridCopy = cloneDeep(grid);
  const { rowI, colI } = cell;
  for (let i = Math.max(rowI - 1, 0); i <= Math.min(rowI + 1, size - 1); i++) {
    for (let j = Math.max(colI - 1, 0); j <= Math.min(colI + 1, size - 1); j++) {
      if (gridCopy[i][j].cell === 'bomb') {
        gridCopy[i][j].cell = 0;
      }
    }
  }
  return gridCopy;
};

export const drawNumbers = (size: number, grid: Grid[][]): Grid[][] => {
  const gridCopy = cloneDeep(grid);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (gridCopy[i][j].cell === 0) {
        const cell = { rowI: i, colI: j };
        const count = countNumber(cell, size, gridCopy);
        if (count === 0) {
          gridCopy[i][j].cell = 'empty';
        } else {
          gridCopy[i][j].cell = count;
        }
      }
    }
  }
  return gridCopy;
};

export const countNumber = (cell: Cell, size: number, gridCopy: Grid[][]): number => {
  const { rowI, colI } = cell;
  let count = 0;
  for (let i = Math.max(rowI - 1, 0); i <= Math.min(rowI + 1, size - 1); i++) {
    for (let j = Math.max(colI - 1, 0); j <= Math.min(colI + 1, size - 1); j++) {
      if (gridCopy[i][j].cell === 'bomb') count += 1;
    }
  }
  return count;
};

export const firstMoveDrawGrid =(cell: Cell, bombCount:number, size:number, grid: Grid[][]): Grid[][] => {
  const copyGrid = cloneDeep(grid);
  const gridWithBombs = drawBombs(cell, bombCount, copyGrid);
  const gridEmtptyFirst = drawAroundFirstClicked(cell, size, gridWithBombs);
  const gridWithNumber = drawNumbers(size, gridEmtptyFirst);
  return adjacentCellsNoBombs(cell, size, gridWithNumber);
};

export const adjacentCellsNoBombs = (cell: Cell, size: number, grid: Grid[][]): Grid[][] => {
  const { rowI, colI } = cell;
  const gridCopy = [...grid];
  const count = countNumber(cell, size, gridCopy);
  gridCopy[rowI][colI].isOpen = true;

  if (count === 0) {
    for (let i = Math.max(rowI - 1, 0); i <= Math.min(rowI + 1, size - 1); i++) {
      for (let j = Math.max(colI - 1, 0); j <= Math.min(colI + 1, size - 1); j++) {
        if (gridCopy[i][j].cell !== 'bomb' && gridCopy[i][j].isOpen === false) {
          adjacentCellsNoBombs({ rowI: i, colI: j }, size, gridCopy);
        }
      }
    }
  }
  return gridCopy;
};

export const drawGameOver = (size: number, grid: Grid[][]): Grid[][] => {
  const gridCopy = cloneDeep(grid);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (gridCopy[i][j].cell === 'bomb') {
        gridCopy[i][j].isOpen = true;
      }
    }
  }
  return gridCopy;
};

export const checkWinner = (grid: Grid[][]): boolean => {
  return !grid.some((array) =>
    array.some((item) => {
      return item.cell !== 'bomb' && !item.isOpen;
    })
  );
};

export const timeConvertor = (time: number): string => {
  const minutes: number = Math.floor(time / 60);
  const seconds: number = time - minutes * 60;
  let converted = '';
  if (minutes > 0) {
    converted += `${minutes}m ${seconds.toFixed(1)}s`;
  } else {
    converted += `${seconds.toFixed(1)}s`;
  }
  return converted;
};

export const Color = (cell: CellText) => {
  switch (cell) {
    case 1:
      return 'red';
    case 2:
      return 'blue';
    case 3:
      return 'green';
    case 4:
      return 'purple';
    case 5:
      return 'red';
    case 6:
      return 'yellow';
    case 7:
      return 'black';
    case 8:
      return 'grey';
    default:
      return '';
  }
};
