/* eslint-disable max-len */
import React, { FC } from 'react';
import style from './oneCell.module.scss';
import type { Grid } from '../../helpers/helperFunctions';

type Props = {
  oneCell: Grid;
  hadleRightClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleOpen: () => void;
  disabled: boolean;
  gridSize: number;
};

const OneCell: FC<Props> = ({ oneCell, handleOpen, hadleRightClick, gridSize, disabled }) => {
  const { isOpen, haveFlag, cell } = oneCell;

  const cellStyle = {
    flexBasis: `${100 / gridSize}%`,
    paddingTop: `${100 / gridSize}%`,
  };

  return (
    <>
      {isOpen ? (
        <div className={style.cellOpen} onContextMenu={(e) => e.preventDefault()} style={cellStyle}>
          <span className={style.cellOpenText}>
            {cell > 0 && cell}
            {cell === 'bomb' && (
              <img
                className={style.image}
                src="https://w7.pngwing.com/pngs/220/369/png-transparent-minesweeper-pro-classic-mine-sweeper-minesweeper-plus-likeminesweeper-bomb-game-computer-wallpaper-video-game.png"
                alt="bomb"
              />
            )}
          </span>
        </div>
      ) : (
        <button
          type="button"
          className={`${style.cellClose} ${haveFlag && style.flag}`}
          style={cellStyle}
          onClick={handleOpen}
          disabled={disabled}
          onContextMenu={(e) => hadleRightClick(e)}
        >
          {' '}
          {/* {isOpen && cell > 0 && cell} */}
        </button>
      )}
    </>
  );
};

export default OneCell;
