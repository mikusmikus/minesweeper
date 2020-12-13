import React, { FC } from 'react';
import style from './options.module.scss';
import type { typeOptions } from '../../helpers/types/types';

const Options: FC<typeOptions> = ({
  gameSize,
  gameDifficulty,
  gameSizeArr,
  gameDifficultyArr,
  handleGridSizeChange,
  handleDifficultyChange,
}) => {
  return (
    <div className={style.options}>
      <label htmlFor="gameSize" className={style.label}>
        Choose game size{' '}
        <select
          id="gameSize"
          name="gameSize"
          value={gameSize}
          onChange={handleGridSizeChange}
          className={style.select}
        >
          {gameSizeArr.map(({ name, size }) => (
            <option key={name} value={size} className={style.option}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="difficulty" className={style.label}>
        Choose difficulty{' '}
        <select
          id="difficulty"
          name="difficulty"
          value={gameDifficulty}
          onChange={handleDifficultyChange}
          className={style.select}
        >
          {gameDifficultyArr.map(({ name, difficulty }) => (
            <option key={name} value={difficulty} className={style.option}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Options;
