import React, { FC, useEffect, useRef } from 'react';
import style from './winner.module.scss';

type Props = {
  winnerName:string;
  handleWinnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWinner:() => void
};

const Winner: FC<Props> = ({ winnerName, handleWinnerName, handleWinner }) => {
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
            placeholder="enter name here..."
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
