import React, { FC } from 'react';
import style from './header.module.scss';
import Options from '../options/options';

type Props = {
  gameOver: boolean;
  gameSize: number;
  gameDifficulty: number;
  isGameStarted: boolean;
  handleStart: () => void;
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: FC<Props> = ({
  gameOver,
  gameSize,
  gameDifficulty,
  isGameStarted,
  handleStart,
  handleGridSizeChange,
  handleDifficultyChange,
}) => {
  return (
    <div className="row">
      <div className={style.header}>
        {!isGameStarted ? (
          <>
            <div className="col-xs-3">
              <div className={style.startFinish}>
                <button type="button" onClick={handleStart} className={style.button}>
                  Start
                </button>
              </div>
            </div>
            <div className="col-xs-6">
              <Options
                gameSize={gameSize}
                gameDifficulty={gameDifficulty}
                handleGridSizeChange={handleGridSizeChange}
                handleDifficultyChange={handleDifficultyChange}
              />
            </div>
            <div className="col-xs-3">Results</div>
          </>
        ) : (
          <>
            <div className="col-xs-3">
              <button type="button" onClick={handleStart} className={style.button}>
                END
              </button>
            </div>
            <div className="col-xs-6">count / time</div>
            <div className="col-xs-3">Results</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
