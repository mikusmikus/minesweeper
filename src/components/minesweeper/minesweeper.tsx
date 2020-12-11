/* eslint-disable max-len */
import React, { useState } from 'react';
import { cloneDeep, round } from 'lodash';
import OneCell from '../oneCell/oneCell';
import Header from '../header/header';
import Results from '../results/results';
import GameOver from '../gameOver/gameOver';
import Winner from '../winner/winner';
import { GAME_SIZE, GAME_DIFICULTY } from '../../helpers/optionArrays';

import {
  drawBombs,
  drawGrid,
  drawNumbers,
  drawAroundFirstClicked,
  adjacentCellsNoBombs,
  drawGameOver,
  checkWinner,
} from '../../helpers/helperFunctions';
import style from './minesweeper.module.scss';

let isGameStarted = false;
let isGameOver = false;
let isWinner = false;
let firstMoveDone = false;
let isGridDisabled = false;

const Minesweeper = () => {
  const [gridSize, setGridSize] = useState(10);
  const [difficulty, setDifficulty] = useState(10);
  const [grid, setGrid] = useState(drawGrid(gridSize));
  const [showResults, setShowResults] = useState(false);
  const [winnerName, setWinnerName] = useState('');

  const handleOpen = (rowI: number, colI: number) => {
    const copyGrid = cloneDeep(grid);
    const cell = { rowI, colI };

    if (grid[rowI][colI].haveFlag) {
      return;
    }
    if (grid[rowI][colI].cell === 'bomb') {
      const gameOverGrid = drawGameOver(gridSize, copyGrid);
      isGameOver = true;
      isGridDisabled = true;
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
      if (checkWinner(gridSize, gridAdjacent)) {
        isWinner = true;
      }
      setGrid(gridAdjacent);
    }
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

  const handleStart = () => {
    const copyGrid = drawGrid(gridSize);
    setGrid(copyGrid);
    isGameStarted = !isGameStarted;
    firstMoveDone = false;
    isGameOver = false;
    isGridDisabled = false;
    isWinner = false;
  };
  const handleRestart = () => {
    const copyGrid = drawGrid(gridSize);
    setGrid(copyGrid);
    firstMoveDone = false;
    isGameOver = false;
    isGridDisabled = false;
    isWinner = false;
  };
  const handleWinner = () => {
    console.log(winnerName);
    setWinnerName('');
  };

  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-xs-12">
          <Header
            isGameStarted={isGameStarted}
            firstMoveDone={firstMoveDone}
            showResults={showResults}
            gameSizeArr={GAME_SIZE}
            gameDifficultyArr={GAME_DIFICULTY}
            gameSize={gridSize}
            gameDifficulty={difficulty}
            handleStart={() => handleStart()}
            handleRestart={() => handleRestart()}
            handleShowResults={() => setShowResults(!showResults)}
            handleGridSizeChange={(e) => setGridSize(parseInt(e.target.value, 10))}
            handleDifficultyChange={(e) => setDifficulty(parseInt(e.target.value, 10))}
          />
          <Results showResults={showResults} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {isGameStarted && (
            <div
              className={style.minesweeper}
              style={{
                maxWidth: `${gridSize * 25}px`,
              }}
            >
              {grid.map((RowArr, rowI) =>
                RowArr.map((oneCell, colI) => (
                  <OneCell
                    key={oneCell.id}
                    oneCell={oneCell}
                    hadleRightClick={(e) => hadleRightClick(e, rowI, colI)}
                    handleOpen={() => handleOpen(rowI, colI)}
                    isGridDisabled={isGridDisabled}
                    gridSize={gridSize}
                  />
                ))
              )}
              {isGameOver && <GameOver />}
              {isWinner && (
                <Winner
                  winnerName={winnerName}
                  handleWinnerName={(e) => setWinnerName(e.target.value)}
                  handleWinner={() => handleWinner()}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;
