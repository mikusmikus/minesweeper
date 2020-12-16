import React, { FC, useState } from 'react';
import style from './options.module.scss';
import SelectOption from '../../commonComponents/selectOption/selectOption';
import type { typeOptions, Option } from '../../helpers/types/types';
import Button from '../../commonComponents/button/button';

export const gameSizeArr: Option[] = [
  { optionName: ' small', optionValue: 10 },
  { optionName: 'medium', optionValue: 15 },
  { optionName: 'large', optionValue: 20 },
];

export const gameDifficultyArr: Option[] = [
  { optionName: 'easy', optionValue: 10 },
  { optionName: 'medium', optionValue: 3 },
  { optionName: 'hard', optionValue: 2 },
];

export const Options: FC<typeOptions> = ({ showOptions, handleShowOptions, saveOptionChanges }) => {
  const [gridSize, setGridSize] = useState(10);
  const [difficulty, setDifficulty] = useState(10);

  return (
    <div className={`${style.options} ${showOptions && style.active}`}>
      <Button handleClick={handleShowOptions} className="cancelResultsOptions" label="X" />
      <>
        <SelectOption
          value={gridSize}
          label="Choose game size"
          name="gameSize"
          onChangeHandler={(e) => setGridSize(parseInt(e.target.value, 10))}
          optionArr={gameSizeArr}
          classNameLabel="label"
          classNameSelect="select"
          classNameOption="option"
        />
        <SelectOption
          value={difficulty}
          name="gameDifficulty"
          label="Choose difficulty"
          onChangeHandler={(e) => setDifficulty(parseInt(e.target.value, 10))}
          optionArr={gameDifficultyArr}
          classNameLabel="label"
          classNameSelect="select"
          classNameOption="option"
        />
      </>
      <button
        type="button"
        onClick={() => saveOptionChanges(gridSize, difficulty)}
        className={style.saveButton}
      >
        {' '}
        Save
      </button>
    </div>
  );
};
