import React, { FC, useEffect, useRef } from 'react';
import style from './winner.module.scss';
import type { typeWinner } from '../../helpers/types/types';


const Winner: FC<typeWinner> = ({ winnerName, handleWinnerName, handleWinner }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    // @ts-ignore
    inputEl.current.focus();
  }, []);

  return (
    <div className={style.Winner}>
      <h1 className={style.heading}> Winner!!!</h1>
      <label htmlFor="input" className={style.label}>
        enter your name to save results
        <div className={style.inputWrapper}>
          <input
            type="text"
            placeholder="enter name..."
            className={style.input}
            ref={inputEl}
            value={winnerName}
            onChange={(e) => handleWinnerName(e)}
          />
          <button type="button" className={style.button} onClick={handleWinner}>
            save
          </button>
        </div>
      </label>
    </div>
  );
};

export default Winner;
