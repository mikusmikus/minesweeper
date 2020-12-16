import React, { FC } from 'react';
import style from './winner.module.scss';
import type { typeWinner } from '../../helpers/types/types';
import Input from '../../commonComponents/input/input';
import Button from '../../commonComponents/button/button';

const Winner: FC<typeWinner> = ({ winnerName, handleWinnerName, handleWinner }) => {
  return (
    <div className={style.Winner}>
      <h1 className={style.heading}>Winner!!!</h1>
      <div className={style.textAndInputWrapper}>
        <p className={style.paragraph}>enter your name to save results</p>
        <div className={style.inputWrapper}>
          <Input
            placeholder="enter name..."
            value={winnerName}
            className="input"
            handleInputName={(e) => handleWinnerName(e)}
            focus
          />
          <Button handleClick={handleWinner} className="saveButton" label="save" />
        </div>
      </div>
    </div>
  );
};

export default Winner;
