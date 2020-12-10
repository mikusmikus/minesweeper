import React, { FC } from 'react';
import style from './header.module.scss';
import Options from '../options/options';

type Props = {
  gameOver: boolean;
  gameSize: number;
  gameDifficulty: number;
  isGameStarted: boolean;
  showResults: boolean;
  handleShowResults: () => void;
  handleStart: () => void;
  handleRestart: () => void;
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: FC<Props> = ({
  gameOver,
  gameSize,
  handleShowResults,
  gameDifficulty,
  isGameStarted,
  showResults,
  handleStart,
  handleRestart,
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
                <button
                  type="button"
                  onClick={handleStart}
                  className={style.button}
                  disabled={showResults}
                >
                  Start
                </button>
              </div>
            </div>
            <div className="col-xs-9">
              <Options
                gameSize={gameSize}
                gameDifficulty={gameDifficulty}
                handleGridSizeChange={handleGridSizeChange}
                handleDifficultyChange={handleDifficultyChange}
              />
            </div>
            <span className={style.triangle}>
              <button type="button" onClick={handleShowResults} className={style.triangleButton}>
                {showResults ? 'close' : 'results'}
              </button>
            </span>
          </>
        ) : (
          <>
            <div className="col-xs-3">
              <button type="button" onClick={handleStart} className={style.button}>
                END
              </button>
            </div>
            <div className="col-xs-6">count / time</div>
            <span className={style.triangle}>
              <button type="button" onClick={handleRestart} className={style.triangleButton}>
                restart
              </button>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
