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
import { Options, gameSizeArr, gameDifficultyArr } from '../options/options';
import type { typeResultObj } from '../../helpers/types/types';

import {
  drawBombs,
  drawGrid,
  drawNumbers,
  drawAroundFirstClicked,
  adjacentCellsNoBombs,
  drawGameOver,
  checkWinner,
} from '../../helpers/helperFunctions/helperFunctions';
import 'react-toastify/dist/ReactToastify.css';
import style from './minesweeper.module.scss';

let isGameOver = false;
let isWinner = false;
let isFirstMoveDone = false;
let isTimerStarted = false;
let isGridDisabled = false;
let resetTimer = false;
let gridSize = 10;
let difficulty = 10;

export const Minesweeper = () => {
  const [grid, setGrid] = useState(drawGrid(gridSize));
  const [showResults, setShowResults] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [results, setResults] = useState<typeResultObj[]>([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const minesweeperStorage = localStorage.getItem('minesweeper');
    minesweeperStorage && setResults(JSON.parse(minesweeperStorage));
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
      const bombCount = round(gridSize / difficulty);
      const gridWithBombs = drawBombs(cell, bombCount, copyGrid);
      const gridEmtptyFirst = drawAroundFirstClicked(cell, gridSize, gridWithBombs);
      const gridWithNumber = drawNumbers(gridSize, gridEmtptyFirst);
      const gridAdjacent = adjacentCellsNoBombs(cell, gridSize, gridWithNumber);
      isTimerStarted = true;
      // isGameStarted = true;
      resetTimer = false;
      setGrid(gridAdjacent);
      isFirstMoveDone = true;
    } else {
      const gridAdjacent = adjacentCellsNoBombs(cell, gridSize, copyGrid);
      gridAdjacent[rowI][colI].isOpen = true;
      if (checkWinner(gridAdjacent)) {
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

  const handleRestart = () => {
    const copyGrid = drawGrid(gridSize);
    setGrid(copyGrid);
    isFirstMoveDone = false;
    isGameOver = false;
    isGridDisabled = false;
    isWinner = false;
    isTimerStarted = false;
    resetTimer = true;
    setTimer(0);
  };
  const handleWinner = () => {
    if (!winnerName) {
      alert('enter name!');
      return;
    }
    const copyResults = [...results];
    const findSizeIndex = gameSizeArr.findIndex((item) => item.optionValue === gridSize);
    const findDiffIndex = gameDifficultyArr.findIndex((item) => item.optionValue === difficulty);

    const newWinner: typeResultObj = {
      id: uuidv4(),
      name: winnerName,
      time: timer,
      size: gameSizeArr[findSizeIndex].optionName,
      difficulty: gameDifficultyArr[findDiffIndex].optionName,
    };

    isWinner = false;
    // isGameStarted = false;
    localStorage.setItem('minesweeper', JSON.stringify([...copyResults, newWinner]));
    setResults([...copyResults, newWinner]);
    setWinnerName('');
    setTimer(0);
    toast('Result Added!', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
    });
  };

  const saveOptionChanges = (size: number, diff: number) => {
    gridSize = size;
    difficulty = diff;
    isTimerStarted = false;
    resetTimer = true;
    isFirstMoveDone = false;
    isGridDisabled = false;
    setShowOptions(false);
    setGrid(drawGrid(size));
  };

  return (
    <div className="conatainer">
      <div className={style.minesweeper}>
        <div className="row">
          <div className="col-xs-12">
            <Header
              isTimerStarted={isTimerStarted}
              resetTimer={resetTimer}
              handleShowOptions={() => setShowOptions(!showOptions)}
              handleShowResults={() => setShowResults(!showResults)}
              getTimerValue={(time: number) => {
                setTimer(time);
              }}
            />
            <Results
              showResults={showResults}
              results={results}
              handleShowResults={() => setShowResults(false)}
            />
            <Options
              gameSize={gridSize}
              gameDifficulty={difficulty}
              showOptions={showOptions}
              handleShowOptions={() => setShowOptions(false)}
              saveOptionChanges={saveOptionChanges}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div
              className={style.grid}
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

              <Restart handleRestart={() => handleRestart()} isGameOver={isGameOver} />

              {isGameOver && <GameOver />}
              {isWinner && (
                <Winner
                  winnerName={winnerName}
                  handleWinnerName={(e) => setWinnerName(e.target.value)}
                  handleWinner={() => handleWinner()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Minesweeper;
