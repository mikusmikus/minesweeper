import React, { FC, useState, useEffect, useRef } from 'react';
import { timeConvertor } from '../../helpers/helperFunctions/helperFunctions';
import style from './timer.module.scss';
import type { typeTimer } from '../../helpers/types/types';

const Timer: FC<typeTimer> = ({ isTimerStarted, resetTimer, getTimerValue }) => {
  const [timeCount, setTimeCount] = useState(0);
  const myInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (resetTimer) {
      setTimeCount(0);
    }
  }, [resetTimer]);

  useEffect(() => {
    if (isTimerStarted) {
      myInterval.current = setInterval(() => {
        setTimeCount((oldTimeCount) => oldTimeCount + 0.1);
      }, 100);
      return;
    }
    clearInterval(myInterval.current!);
    getTimerValue(timeCount);
  }, [isTimerStarted]);

  return <div className={style.timer}>{timeConvertor(timeCount)}</div>;
};

export default Timer;
