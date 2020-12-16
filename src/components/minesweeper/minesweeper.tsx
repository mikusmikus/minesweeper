/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef } from 'react';
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
  drawGrid,
  adjacentCellsNoBombs,
  drawGameOver,
  checkWinner,
  firstMoveDrawGrid,
} from '../../helpers/helperFunctions/helperFunctions';
import 'react-toastify/dist/ReactToastify.css';
import style from './minesweeper.module.scss';

export const Minesweeper = () => {
  const [grid, setGrid] = useState(drawGrid(10));
  const [showResults, setShowResults] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [results, setResults] = useState<typeResultObj[]>([]);
  const [timer, setTimer] = useState(0);

  const options = useRef({
    gridSize: 10,
    difficulty: 10,
    isGameOver: false,
    isWinner: false,
    isFirstMoveDone: false,
    isTimerStarted: false,
    isGridDisabled: false,
    resetTimer: false,
  });

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
      const gameOverGrid = drawGameOver(options.current.gridSize, copyGrid);
      options.current.isGameOver = true;
      options.current.isGridDisabled = true;
      options.current.isTimerStarted = false;
      setGrid(gameOverGrid);
      return;
    }
    if (!options.current.isFirstMoveDone) {
      options.current.isTimerStarted = true;
      options.current.resetTimer = false;
      options.current.isFirstMoveDone = true;
      const bombCount = round(options.current.gridSize / options.current.difficulty);
      const gridFirstMove = firstMoveDrawGrid(cell, bombCount, options.current.gridSize, copyGrid);
      setGrid(gridFirstMove);
    } else {
      const gridAdjacent = adjacentCellsNoBombs(cell, options.current.gridSize, copyGrid);
      gridAdjacent[rowI][colI].isOpen = true;
      if (checkWinner(gridAdjacent)) {
        options.current.isTimerStarted = false;
        options.current.isWinner = true;
      }
      setGrid(gridAdjacent);
    }
  };

  const hadleRightClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    rowI: number,
    colI: number
  ) => {
    e.preventDefault();
    const copyGrid = cloneDeep(grid);
    copyGrid[rowI][colI].haveFlag = !copyGrid[rowI][colI].haveFlag;
    setGrid(copyGrid);
  };

  const handleRestart = () => {
    options.current.isFirstMoveDone = false;
    options.current.isGameOver = false;
    options.current.isGridDisabled = false;
    options.current.isWinner = false;
    options.current.isTimerStarted = false;
    options.current.resetTimer = true;
    setTimer(0);
    const copyGrid = drawGrid(options.current.gridSize);
    setGrid(copyGrid);
  };

  const handleWinner = () => {
    if (!winnerName) {
      alert('enter name!');
      return;
    }
    const copyResults = [...results];
    copyResults.forEach((result) => {
      result.newResult = false;
    });

    const findSizeIndex = gameSizeArr.findIndex(
      (item) => item.optionValue === options.current.gridSize
    );
    const findDiffIndex = gameDifficultyArr.findIndex(
      (item) => item.optionValue === options.current.difficulty
    );
    const newWinner: typeResultObj = {
      id: uuidv4(),
      name: winnerName,
      time: timer,
      size: gameSizeArr[findSizeIndex].optionName,
      difficulty: gameDifficultyArr[findDiffIndex].optionName,
      newResult: true,
    };
    toast.success('Result added!', {
      autoClose: 5000,
      style: {
        background: '#e07a5f',
        fontSize: '40px',
        color: '#3d405b',
        width: '400px',
        minHeight: '100px',
      },
    });
    localStorage.setItem('minesweeper', JSON.stringify([...copyResults, newWinner]));
    setResults([...copyResults, newWinner]);
    setWinnerName('');
    setTimer(0);
    handleRestart();
    setShowResults(true);
  };

  const saveOptionChanges = (size: number, diff: number) => {
    options.current.gridSize = size;
    options.current.difficulty = diff;
    handleRestart();
    setShowOptions(false);
  };

  return (
    <div className="container">
      <div className={style.minesweeper}>
        <div className="row">
          <div className="col-xs-12">
            <Header
              isTimerStarted={options.current.isTimerStarted}
              resetTimer={options.current.resetTimer}
              handleShowOptions={() => {
                setShowOptions(!showOptions);
                setShowResults(false);
              }}
              handleShowResults={() => {
                setShowResults(!showResults);
                setShowOptions(false);
              }}
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
              gameSize={options.current.gridSize}
              gameDifficulty={options.current.difficulty}
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
                maxWidth: `${options.current.gridSize * 25}px`,
              }}
            >
              {grid.map((RowArr, rowI) =>
                RowArr.map((oneCell, colI) => (
                  <OneCell
                    key={oneCell.id}
                    oneCell={oneCell}
                    hadleRightClick={(e) => hadleRightClick(e, rowI, colI)}
                    handleOpen={() => handleOpen(rowI, colI)}
                    isGridDisabled={options.current.isGridDisabled}
                    gridSize={options.current.gridSize}
                  />
                ))
              )}

              <Restart
                handleRestart={() => handleRestart()}
                isGameOver={options.current.isGameOver}
              />

              {options.current.isGameOver && <GameOver />}
              {options.current.isWinner && (
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
