import React, { FC } from 'react';
import style from './restart.module.scss';
import type { typeRestart } from '../../helpers/types/types';
import Button from '../../commonComponents/button/button';

const Restart: FC<typeRestart> = ({ handleRestart }) => {
  return (
    <div className={style.triangleWrapper}>
      <span className={style.triangle}>
        <Button handleClick={handleRestart} className="restartButton" label="restart" />
      </span>
    </div>
  );
};

export default Restart;
