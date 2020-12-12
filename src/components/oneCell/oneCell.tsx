/* eslint-disable max-len */
import React, { FC } from 'react';
import style from './oneCell.module.scss';
import type { typeOneCell } from '../../helpers/types';
import bomb from '../../images/bomb.png';

const OneCell: FC<typeOneCell> = ({
  oneCell,
  handleOpen,
  hadleRightClick,
  gridSize,
  isGridDisabled,
}) => {
  const { isOpen, haveFlag, cell } = oneCell;

  const cellStyle = {
    flexBasis: `${100 / gridSize}%`,
    paddingTop: `${100 / gridSize}%`,
  };

  const cellColor = {
    color: '',
  };

  switch (cell) {
    case 1:
      break;
    case 2:
      cellColor.color = 'blue';
      break;
    case 3:
      cellColor.color = 'green';
      break;
    case 4:
      cellColor.color = 'purple';
      break;
    case 5:
      cellColor.color = 'red';
      break;
    case 6:
      cellColor.color = 'yellow';
      break;
  }

  return (
    <>
      {isOpen ? (
        <div className={style.cellOpen} onContextMenu={(e) => e.preventDefault()} style={cellStyle}>
          <span className={`${style.cellOpenText} `} style={cellColor}>
            {cell > 0 && cell}
            {cell === 'bomb' && <img className={style.image} src={bomb} alt="bomb" />}
          </span>
        </div>
      ) : (
        <button
          type="button"
          className={`${style.cellClose} ${haveFlag && style.flag}`}
          style={cellStyle}
          onClick={handleOpen}
          disabled={isGridDisabled}
          onContextMenu={(e) => hadleRightClick(e)}
        >
          {' '}
        </button>
      )}
    </>
  );
};

export default OneCell;
