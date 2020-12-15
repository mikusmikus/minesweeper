import React, { FC } from 'react';
import style from './header.module.scss';
import Options from '../options/options';
import Timer from '../timer/timer';
import Button from '../../commonComponents/button/button';
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
            <div className={style.buttonWrapper}>
              <Button
                handleClick={handleStart}
                className="button"
                disabled={showResults}
                label="START"
              />
            </div>
            <div className={style.optionsWrapper}>
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
                {showResults ? (
                  <Button
                    handleClick={handleShowResults}
                    className="triangleButton"
                    label="close"
                  />
                ) : (
                  <Button
                    handleClick={handleShowResults}
                    className="triangleButton"
                    label="results"
                  />
                )}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={style.buttonWrapper}>
              <Button
                handleClick={handleStart}
                className="button"
                disabled={showResults}
                label="END"
              />
            </div>
            <div className={style.timerWrapper}>
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
