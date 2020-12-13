import React, { FC } from 'react';
import style from './header.module.scss';
import Options from '../options/options';
import Timer from '../timer/timer';
import type { typeHeader } from '../../helpers/types/types';

const Header: FC<typeHeader> = ({
  isGameStarted,
  isTimerStarted,
  resetTimer,
  showResults,
  gameSizeArr,
  gameSize,
  gameDifficulty,
  gameDifficultyArr,
  getTimerValue,
  handleShowResults,
  handleStart,
  handleGridSizeChange,
  handleDifficultyChange,
}) => {
  return (
    <div className="row">
      <div className={style.header}>
        {!isGameStarted ? (
          <>
            <div className="col-xs-4">
              <div className={style.startFinish}>
                <button
                  type="button"
                  onClick={handleStart}
                  className={style.button}
                  disabled={showResults}
                >
                  Start
                </button>
              </div>
            </div>
            <div className="col-xs-8">
              <Options
                gameSize={gameSize}
                gameDifficulty={gameDifficulty}
                handleGridSizeChange={handleGridSizeChange}
                handleDifficultyChange={handleDifficultyChange}
                gameSizeArr={gameSizeArr}
                gameDifficultyArr={gameDifficultyArr}
              />
            </div>
            <div className={style.triangleWrapper}>
              <span className={style.triangle}>
                <button type="button" onClick={handleShowResults} className={style.triangleButton}>
                  {showResults ? 'close' : 'results'}
                </button>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="col-xs-4">
              <button type="button" onClick={handleStart} className={style.button}>
                END
              </button>
            </div>
            <div className="col-xs-6 col-xs-offset-2">
              <Timer
                isTimerStarted={isTimerStarted}
                resetTimer={resetTimer}
                getTimerValue={getTimerValue}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
