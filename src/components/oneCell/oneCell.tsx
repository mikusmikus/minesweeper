import React, { FC } from 'react';
import type { typeOneCell } from '../../helpers/types/types';
import { Color } from '../../helpers/helperFunctions/helperFunctions';
import bomb from '../../assets/images/bomb.png';
import style from './oneCell.module.scss';

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

  return (
    <>
      {isOpen ? (
        <div className={style.cellOpen} onContextMenu={(e) => e.preventDefault()} style={cellStyle}>
          <span className={`${style.cellOpenText} `} style={{ color: Color(cell) }}>
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
