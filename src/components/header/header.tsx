import React, { FC } from 'react';
import style from './header.module.scss';
import Timer from '../timer/timer';
import Button from '../../commonComponents/button/button';
import type { typeHeader } from '../../helpers/types/types';

const Header: FC<typeHeader> = ({
  // isGameStarted,
  isTimerStarted,
  resetTimer,
  // showResults,
  getTimerValue,
  handleShowOptions,
  handleShowResults,
  // handleStart,
}) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.row}>
          <Button handleClick={handleShowOptions} className="optionResultButton" label="options" />
          <Button handleClick={handleShowResults} className="optionResultButton" label="results" />
        </div>
        <div className={style.row}>
          {/* {!isGameStarted ? (
            <Button
              handleClick={handleStart}
              className="button"
              disabled={showResults}
              label="START"
            />
          ) : (
            <Button
              handleClick={handleStart}
              className="button"
              disabled={showResults}
              label="END"
            />
          )} */}
          <Timer
            isTimerStarted={isTimerStarted}
            resetTimer={resetTimer}
            getTimerValue={getTimerValue}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
