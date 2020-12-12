import React, { FC } from 'react';
import style from './restart.module.scss';
import type { typeRestart } from '../../helpers/types';

const Restart: FC<typeRestart> = ({ handleRestart }) => {
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
