import React, { FC } from 'react';
import style from './header.module.scss';
import Timer from '../timer/timer';
import Button from '../../commonComponents/button/button';
import type { typeHeader } from '../../helpers/types/types';

const Header: FC<typeHeader> = ({
  isTimerStarted,
  resetTimer,
  getTimerValue,
  handleShowOptions,
  handleShowResults,
}) => {
  return (
    <>
      <div className={style.header}>
        <div className="row">
          <div className="col-xs-12">
            <h3 className={style.title}>MINESWEEPER</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-3">
            <Button
              handleClick={handleShowOptions}
              className="optionResultButton"
              label="Options"
            />
          </div>
          <div className="col-xs-6">
            <Timer
              isTimerStarted={isTimerStarted}
              resetTimer={resetTimer}
              getTimerValue={getTimerValue}
            />
          </div>
          <div className="col-xs-3">
            <Button
              handleClick={handleShowResults}
              className="optionResultButton"
              label="Results"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
