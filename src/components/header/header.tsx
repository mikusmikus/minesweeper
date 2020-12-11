import React, { FC } from 'react';
import style from './header.module.scss';
import Options from '../options/options';
import type { GameSize, GameDifficulty } from '../../helpers/optionArrays';
import { timeConvertor } from '../../helpers/helperFunctions';

type Props = {
  isGameStarted: boolean;
  isFirstMoveDone: boolean;
  showResults: boolean;
  gameSize: number;
  gameDifficulty: number;
  gameSizeArr: GameSize[];
  gameDifficultyArr: GameDifficulty[];
  timer: number;
  handleShowResults: () => void;
  handleStart: () => void;
  handleRestart: () => void;
  handleGridSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: FC<Props> = ({
  isFirstMoveDone,
  showResults,
  gameSizeArr,
  gameSize,
  gameDifficulty,
  isGameStarted,
  gameDifficultyArr,
  timer,
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
            <div className="col-xs-4">
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
            <div className="col-xs-8">
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
            <div className="col-xs-4">
              <button type="button" onClick={handleStart} className={style.button}>
                END
              </button>
            </div>
            <div className="col-xs-4 col-xs-offset-4">
              {timer > 0 && <span className={style.timer}>{timeConvertor(timer)}</span>}
            </div>
            {isFirstMoveDone && (
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
