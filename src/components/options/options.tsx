import React, { FC } from 'react';
import style from './options.module.scss';
import SelectOption from '../../commonComponents/selectOption/selectOption';
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
      <SelectOption
        value={gameSize}
        label="Choose game size"
        name="gameSize"
        onChangeHandler={handleGridSizeChange}
        optionArr={gameSizeArr}
        classNameLabel="label"
        classNameSelect="select"
        classNameOption="option"
      />
      <SelectOption
        value={gameDifficulty}
        name="gameDifficulty"
        label="Choose difficulty"
        onChangeHandler={handleDifficultyChange}
        optionArr={gameDifficultyArr}
        classNameLabel="label"
        classNameSelect="select"
        classNameOption="option"
      />
    </div>
  );
};

export default Options;
