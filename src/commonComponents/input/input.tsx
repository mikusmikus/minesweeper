import React, { FC, useRef, useEffect } from 'react';
import style from './input.module.scss';
import type { TypeInput } from '../../helpers/types/types';

const Input: FC<TypeInput> = ({
  value,
  placeholder='...',
  className = 'input',
  focus = false,
  handleInputName,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focus &&
      inputEl.current?.focus();
  }, []);

  return (
    <input
      type="text"
      ref={inputEl}
      placeholder={placeholder}
      className={style[`${className}`]}
      value={value}
      onChange={(e) => handleInputName(e)}
    />
  );
};

export default Input;
