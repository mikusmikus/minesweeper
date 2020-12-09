/* eslint-disable max-len */
import React, { useState } from 'react';
import { cloneDeep, round } from 'lodash';
import OneCell from '../minesweeperCell/oneCell';
import Header from '../header/header';
import {
  drawBombs,
  drawGrid,
  drawNumbers,
  drawAroundFirstClicked,
  adjacentCellsNoBombs,
  drawGameOver,
} from '../../helpers/helperFunctions';
import style from './minesweeper.module.scss';

let isGameStarted = false;
let gameOver = false;
let firstMoveDone = false;
let disabled = false;


const Minesweeper = () => {
  const [gridSize, setGridSize] = useState(15);
  const [difficulty, setDifficulty] = useState(3);
  const [grid, setGrid] = useState(drawGrid(gridSize));

  const handleOpen = (rowI: number, colI: number) => {
    const copyGrid = cloneDeep(grid);
    const cell = { rowI, colI };

    if (grid[rowI][colI].haveFlag) {
      return;
    }
    if (grid[rowI][colI].cell === 'bomb') {
      const gameOverGrid = drawGameOver(gridSize, copyGrid);
      gameOver = true;
      disabled = true;
      setGrid(gameOverGrid);
      return;
    }
    if (!firstMoveDone) {
      const BOMB_COUNT = round(gridSize / difficulty);
      const gridWithBombs = drawBombs(cell, BOMB_COUNT, copyGrid);
      const gridEmtptyFirst = drawAroundFirstClicked(cell, gridSize, gridWithBombs);
      const gridWithNumber = drawNumbers(gridSize, gridEmtptyFirst);
      const gridAdjacent = adjacentCellsNoBombs(cell, gridSize, gridWithNumber);
      setGrid(gridAdjacent);
      firstMoveDone = true;
    } else {
      const gridAdjacent = adjacentCellsNoBombs(cell, gridSize, copyGrid);
      gridAdjacent[rowI][colI].isOpen = true;
      setGrid(gridAdjacent);
    }
  };

  const handleStart = () => {
    const copyGrid = drawGrid(gridSize);
    setGrid(copyGrid);
    isGameStarted = !isGameStarted;
    firstMoveDone = false;
    gameOver = false;
    disabled = false;
  };

  const handleGridSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGridSize(parseInt(e.target.value, 10));
  };
  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(parseInt(e.target.value, 10));
  };

  const hadleRightClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index1: number,
    index2: number
  ) => {
    e.preventDefault();
    const copyGrid = cloneDeep(grid);
    copyGrid[index1][index2].haveFlag = !copyGrid[index1][index2].haveFlag;
    setGrid(copyGrid);
  };

  const minesweeperStyle = {
    maxWidth: `${gridSize * 20}px`,
  };

  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-xs-12">
          <Header
            handleStart={() => handleStart()}
            gameOver={gameOver}
            handleGridSizeChange={(e) => handleGridSizeChange(e)}
            gameSize={gridSize}
            isGameStarted={isGameStarted}
            gameDifficulty={difficulty}
            handleDifficultyChange={(e) => handleDifficultyChange(e)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {isGameStarted && (
            <div className={style.minesweeper} style={minesweeperStyle}>
              {grid.map((RowArr, rowI) =>
                RowArr.map((oneCell, colI) => (
                  <OneCell
                    key={oneCell.id}
                    oneCell={oneCell}
                    hadleRightClick={(e) => hadleRightClick(e, rowI, colI)}
                    handleOpen={() => handleOpen(rowI, colI)}
                    disabled={disabled}
                    gridSize={gridSize}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;
