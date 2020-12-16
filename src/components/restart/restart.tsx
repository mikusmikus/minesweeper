import React, { FC } from 'react';
import style from './restart.module.scss';
import type { typeRestart } from '../../helpers/types/types';
import Button from '../../commonComponents/button/button';

const Restart: FC<typeRestart> = ({ handleRestart, isGameOver }) => {
  return (
    <div className={style.restartButtonWrapper}>
      <div className={style.restartButton}>
        {isGameOver ? (
          <img
            src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089"
            alt="img"
            className={style.image}
          />
        ) : (
          <img
            src="https://esraa-alaarag.github.io/Minesweeper/images/smilyhappy.png"
            alt="img"
            className={style.image}
          />
        )}
        <Button handleClick={handleRestart} className="restartButton" label="" />
      </div>
    </div>
  );
};

export default Restart;
