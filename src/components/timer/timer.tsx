import React, { FC, useState, useEffect, useRef } from 'react';
import style from './timer.module.scss';

type Props = {
  isTimerStarted: boolean;
  getTimerValue: (x: number) => void;
};

const Timer: FC<Props> = ({ isTimerStarted, getTimerValue }) => {
  const [count, setCount] = useState(0);
  //   const [startTimer1, setStartTimer1] = useState(false);
  const myInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isTimerStarted) {
      myInterval.current = setInterval(() => {
        setCount((oldCount) => oldCount + 0.1);
      }, 100);
    } else {
      clearInterval(myInterval.current!);
      getTimerValue(count);
      setCount(0);
      //   console.log(count);
    }
  }, [isTimerStarted]);

  return (
    <div className={style.timerWrapper}>
      <span className={style.timer}>{count.toFixed(1)}s</span>
    </div>
  );
};

export default Timer;
