/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { cloneDeep, round } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import OneCell from '../oneCell/oneCell';
import Header from '../header/header';
import Results from '../results/results';
import GameOver from '../gameOver/gameOver';
import Winner from '../winner/winner';
import Restart from '../restart/restart';
import { GAME_SIZE, GAME_DIFICULTY } from '../../helpers/optionArrays';
import type { typeWinner } from '../../helpers/types';

import {
  drawBombs,
  drawGrid,
  drawNumbers,
  drawAroundFirstClicked,
  adjacentCellsNoBombs,
  drawGameOver,
  checkWinner,
} from '../../helpers/helperFunctions';
import 'react-toastify/dist/ReactToastify.css';
import style from './minesweeper.module.scss';

let isGameStarted = false;
let isGameOver = false;
let isWinner = false;
let isFirstMoveDone = false;
let isTimerStarted = false;
let isGridDisabled = false;

const Minesweeper = () => {
  const [gridSize, setGridSize] = useState(10);
  const [difficulty, setDifficulty] = useState(10);
  const [grid, setGrid] = useState(drawGrid(gridSize));
  const [showResults, setShowResults] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [winners, setWinners] = useState<typeWinner[]>([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const minesweeperStorage = localStorage.getItem('minesweeper');
    minesweeperStorage && setWinners(JSON.parse(minesweeperStorage));
  }, []);

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
      isTimerStarted = false;
      setGrid(gameOverGrid);
      return;
    }
    if (!isFirstMoveDone) {
      const BOMB_COUNT = round(gridSize / difficulty);
      const gridWithBombs = drawBombs(cell, BOMB_COUNT, copyGrid);
      const gridEmtptyFirst = drawAroundFirstClicked(cell, gridSize, gridWithBombs);
      const gridWithNumber = drawNumbers(gridSize, gridEmtptyFirst);
      const gridAdjacent = adjacentCellsNoBombs(cell, gridSize, gridWithNumber);
      isTimerStarted = true;
      setGrid(gridAdjacent);
      isFirstMoveDone = true;
    } else {
      const gridAdjacent = adjacentCellsNoBombs(cell, gridSize, copyGrid);
      gridAdjacent[rowI][colI].isOpen = true;
      if (checkWinner(gridSize, gridAdjacent)) {
        isTimerStarted = false;
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
    isFirstMoveDone = false;
    isGameOver = false;
    isGridDisabled = false;
    isWinner = false;
    isTimerStarted = false;
    setTimer(0);
  };
  const handleRestart = () => {
    const copyGrid = drawGrid(gridSize);
    setGrid(copyGrid);
    isFirstMoveDone = false;
    isGameOver = false;
    isGridDisabled = false;
    isWinner = false;
    isTimerStarted = false;
    setTimer(0);
  };
  const handleWinner = () => {
    const copyWinners = [...winners];
    const findSizeIndex = GAME_SIZE.findIndex((item) => item.size === gridSize);
    const findDiffIndex = GAME_DIFICULTY.findIndex((item) => item.difficulty === difficulty);

    const newWinner: typeWinner = {
      id: uuidv4(),
      name: winnerName,
      time: timer,
      size: GAME_SIZE[findSizeIndex].name,
      difficulty: GAME_DIFICULTY[findDiffIndex].name,
    };

    isWinner = false;
    isGameStarted = false;
    localStorage.setItem('minesweeper', JSON.stringify([...copyWinners, newWinner]));
    setWinners([...copyWinners, newWinner]);
    setWinnerName('');
    setTimer(0);
    toast('Result Added!', {
      position: 'top-left',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const getTimerValue = (time: number) => {
    setTimer(time);
    return time;
  };

  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-xs-12">
          <Header
            isGameStarted={isGameStarted}
            showResults={showResults}
            gameSizeArr={GAME_SIZE}
            gameDifficultyArr={GAME_DIFICULTY}
            gameSize={gridSize}
            gameDifficulty={difficulty}
            handleStart={() => handleStart()}
            handleShowResults={() => setShowResults(!showResults)}
            handleGridSizeChange={(e) => setGridSize(parseInt(e.target.value, 10))}
            handleDifficultyChange={(e) => setDifficulty(parseInt(e.target.value, 10))}
            isTimerStarted={isTimerStarted}
            getTimerValue={getTimerValue}
          />
          <Results showResults={showResults} winners={winners} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {isGameStarted && (
            <div
              className={style.minesweeper}
              style={{
                maxWidth: `${gridSize * 30}px`,
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
              {isFirstMoveDone && <Restart handleRestart={() => handleRestart()} />}
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
      <ToastContainer />
    </div>
  );
};

export default Minesweeper;
