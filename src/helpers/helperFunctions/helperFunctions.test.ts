import _ from 'lodash';
import {
  drawGrid,
  drawBombs,
  drawAroundFirstClicked,
  drawNumbers,
  countNumber,
  adjacentCellsNoBombs,
  drawGameOver,
  checkWinner,
  timeConvertor,
} from './helperFunctions';
import {
  drawnGrid,
  GridWithBombs,
  firstCellAroundEmptyGrid,
  gridWithNumbers,
} from './arraysForTesting';

describe('timerConverter function', () => {
  it('works with decimal number', () => {
    const time = 125.2353453;
    const result = timeConvertor(time);
    expect(result).toEqual('2m 5.2s');
  });
  it('works with integer', () => {
    const time = 326;
    const result = timeConvertor(time);
    expect(result).toEqual('5m 26.0s');
  });
});

describe('drawGrid function', () => {
  it('made 2 dimension array with size x size length', () => {
    const size = 6;
    const result = drawGrid(size);
    expect(result).toEqual(drawnGrid);
  });
});

describe('drawBombs function', () => {
  it('return grid with random filled cells, with value - bomb', () => {
    const size = 6;
    const cell = { rowI: 3, colI: 3 };
    const grid = drawGrid(size);
    const lodashRandomNumberSpy = jest.spyOn(_, 'random');
    const lodashRandomNumberSpy2 = jest.spyOn(_, 'random');

    for (let i = 0; i < size; i++) {
      lodashRandomNumberSpy.mockReturnValueOnce(4);
      for (let j = 0; j < 4; j++) {
        lodashRandomNumberSpy2.mockReturnValueOnce(j);
      }
    }
    const result = drawBombs(cell, 4, grid);
    expect(result).toEqual(GridWithBombs);
  });
});

describe('drawAroundFirstClicked function', () => {
  it('change cell value from bomb to 0 around first clicked cell', () => {
    const size = 6;
    const cell = { rowI: 3, colI: 3 };
    const grid = drawGrid(size);
    const lodashRandomNumberSpy = jest.spyOn(_, 'random');
    const lodashRandomNumberSpy2 = jest.spyOn(_, 'random');
    for (let i = 0; i < size; i++) {
      lodashRandomNumberSpy.mockReturnValueOnce(4);
      for (let j = 0; j < 4; j++) {
        lodashRandomNumberSpy2.mockReturnValueOnce(j);
      }
    }
    const gridBombs = drawBombs(cell, 4, grid);

    const result = drawAroundFirstClicked(cell, size, gridBombs);
    expect(result).toEqual(firstCellAroundEmptyGrid);
  });
});

describe('drawNumbers function', () => {
  it('check how many bombs around cell and put cell value to that bomb count around..', () => {
    const size = 6;
    const grid = drawGrid(size);
    const cell = { rowI: 3, colI: 3 };
    const lodashRandomNumberSpy = jest.spyOn(_, 'random');
    const lodashRandomNumberSpy2 = jest.spyOn(_, 'random');
    for (let i = 0; i < size; i++) {
      lodashRandomNumberSpy.mockReturnValueOnce(4);
      for (let j = 0; j < 4; j++) {
        lodashRandomNumberSpy2.mockReturnValueOnce(j);
      }
    }
    const gridBombs = drawBombs(cell, 4, grid);
    const firstClicked = drawAroundFirstClicked(cell, size, gridBombs);

    const result = drawNumbers(size, firstClicked);
    expect(result).toEqual(gridWithNumbers);
  });
});
