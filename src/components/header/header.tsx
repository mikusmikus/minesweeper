import React, { FC } from 'react';
import style from './header.module.scss';
import Options from '../options/options';
import type { GameSize, GameDifficulty } from '../../helpers/optionArrays';

type Props = {
  isGameStarted: boolean;
  firstMoveDone: boolean;
  showResults: boolean;
  gameSize: number;
  gameDifficulty: number;
  gameSizeArr: GameSize[];
  gameDifficultyArr: GameDifficulty[];
  handleShowResults: () => void;
  handleStart: () => void;
  handleRestart: () => void;
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: FC<Props> = ({
  firstMoveDone,
  showResults,
  gameSizeArr,
  gameSize,
  gameDifficulty,
  isGameStarted,
  gameDifficultyArr,
  handleShowResults,
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
                gameSizeArr={gameSizeArr}
                gameDifficultyArr={gameDifficultyArr}
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
            {firstMoveDone && (
              <span className={style.triangle}>
                <button type="button" onClick={handleRestart} className={style.triangleButton}>
                  restart
                </button>
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
