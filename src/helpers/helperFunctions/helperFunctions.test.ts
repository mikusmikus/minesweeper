import _ from 'lodash';
import {
  drawGrid,
  drawBombs,
  drawAroundFirstClicked,
  drawNumbers,
  adjacentCellsNoBombs,
  checkWinner,
  timeConvertor,
  Color,
} from './helperFunctions';
import {
  drawnGrid,
  GridWithBombs,
  firstCellAroundEmptyGrid,
  gridWithNumbers,
  adjacentCells,
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

describe('color function', () => {
  it('return color name depends on cell value', () => {
    const cellValue = 2;
    const result = Color(cellValue);
    expect(result).toEqual('blue');
    const cellValue2 = 'bomb';
    const result2 = Color(cellValue2);
    expect(result2).toEqual('');
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
      lodashRandomNumberSpy.mockReturnValueOnce(3);

      lodashRandomNumberSpy2.mockReturnValueOnce(1);
      lodashRandomNumberSpy2.mockReturnValueOnce(3);
      lodashRandomNumberSpy2.mockReturnValueOnce(4);
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
describe('adjacentCellsNoBombs function', () => {
  it('open all adjacentCell from clicked cell where cell value = 0', () => {
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
    const drawNumber = drawNumbers(size, firstClicked);
    const result = adjacentCellsNoBombs(cell, size, drawNumber);
    expect(result).toEqual(adjacentCells);
  });
});

describe('checkWinner function', () => {
  it('checks if all not bomb cells are open and return true then', () => {
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
    const drawNumber = drawNumbers(size, firstClicked);
    const adjacent = adjacentCellsNoBombs(cell, size, drawNumber);
    const result = checkWinner(adjacent);
    expect(result).toEqual(true);
    
  });
});