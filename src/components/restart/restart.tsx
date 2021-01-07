import React, { FC } from 'react';
import style from './restart.module.scss';
import type { typeRestart } from '../../helpers/types/types';
import Button from '../../commonComponents/button/button';
import sad from '../../assets/images/sad.png';
import happy from '../../assets/images/happy.png';

const Restart: FC<typeRestart> = ({ handleRestart, isGameOver }) => {
  return (
    <div className={style.restartButtonWrapper}>
      <div className={style.restartButton}>
        <img src={isGameOver ? sad : happy} alt="smile" className={style.image} />
        <Button handleClick={handleRestart} className="restartButton" label="" />
      </div>
    </div>
  );
};

export default Restart;
