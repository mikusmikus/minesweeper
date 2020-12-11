import React, { FC } from 'react';
import style from './restart.module.scss';

type Props = {
  handleRestart: () => void;
};
const Restart: FC<Props> = ({ handleRestart }) => {
  return (
    <div className={style.triangleWrapper}>
      <span className={style.triangle}>
        <button type="button" onClick={handleRestart} className={style.button}>
          restart
        </button>
      </span>
    </div>
  );
};

export default Restart;
