import React from 'react';
import style from './gameOver.module.scss';

const GameOver = () => {
  return (
    <div className={style.gameOver}>
      <span className={style.gameOverGG}> GG</span>
      <span className={style.gameOverText}>better luck next time</span>
    </div>
  );
};

export default GameOver;
