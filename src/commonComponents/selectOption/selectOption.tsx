/* eslint-disable max-len */
import React, { FC } from 'react';
import style from './selectOption.module.scss';
import type { typeSelectOption } from '../../helpers/types/types';

const SelectOption: FC<typeSelectOption> = ({
  value,
  name,
  label,
  optionArr,
  classNameLabel= 'label',
  classNameSelect = 'select',
  classNameOption='option',
  onChangeHandler,
}) => {
  return (
    <label htmlFor={name} className={style[`${classNameLabel}`]}>
      {label}{' '}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChangeHandler}
        className={style[`${classNameSelect}`]}
      >
        {optionArr.map(({ optionName, optionValue }) => (
          <option key={optionName} value={optionValue} className={style[`${classNameOption}`]}>
            {optionName}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectOption;
