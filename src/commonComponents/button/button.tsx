import React, { FC } from 'react';
import style from './button.module.scss';
import type { TypeButton } from '../../helpers/types/types';

const Button: FC<TypeButton> = ({ handleClick, className='button', disabled, label }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={style[`${className}`]}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
