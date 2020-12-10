import React, { FC } from 'react';
import style from './options.module.scss';
import { GAME_SIZE, GAME_DIFICULTY } from '../../helpers/optionArrays';

type Props = {
  gameSize: number;
  gameDifficulty: number;
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Options: FC<Props> = ({
  gameSize,
  gameDifficulty,
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
          {GAME_SIZE.map(({ name, size }) => (
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
          {GAME_DIFICULTY.map(({ name, difficulty }) => (
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
