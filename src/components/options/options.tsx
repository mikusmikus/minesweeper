import React, { FC } from 'react';
import style from './options.module.scss';
import type {GameSize, GameDifficulty} from '../../helpers/optionArrays';

type Props = {
  gameSize: number;
  gameDifficulty: number;
  gameSizeArr: GameSize[]
  gameDifficultyArr: GameDifficulty[]
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Options: FC<Props> = ({
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
