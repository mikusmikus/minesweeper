import React, { FC, useState, useEffect, useRef } from 'react';
import { timeConvertor } from '../../helpers/helperFunctions';
import style from './timer.module.scss';

type Props = {
  isTimerStarted: boolean;
  isFirstMoveDone: boolean;
  getTimerValue: (time: number) => void;
};

const Timer: FC<Props> = ({ isTimerStarted, isFirstMoveDone, getTimerValue }) => {
  const [timeCount, setTimeCount] = useState(0);
  const myInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isFirstMoveDone) {
      setTimeCount(0);
    }
  }, [isFirstMoveDone]);

  useEffect(() => {
    if (isTimerStarted) {
      myInterval.current = setInterval(() => {
        setTimeCount((oldTimeCount) => oldTimeCount + 0.1);
      }, 100);
    } else {
      clearInterval(myInterval.current!);
      getTimerValue(timeCount);
    }
  }, [isTimerStarted]);

  return (
    <div className={style.timerWrapper}>
      <span className={style.timer}>{timeConvertor(timeCount)}</span>
    </div>
  );
};

export default Timer;
