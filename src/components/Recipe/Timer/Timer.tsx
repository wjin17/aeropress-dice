import { useState, useRef } from "react";

type TimerInput = {
  label: string;
  time: number;
};

const Timer = ({ label, time }: TimerInput) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const countRef = useRef<number | undefined>(undefined);

  let tempTime = 0.0;

  const startTime = () => {
    setTimerActive(true);
    countRef.current = window.setInterval(() => {
      if (tempTime < time) {
        setElapsedTime(tempTime);
        tempTime += 0.1;
      } else {
        setTimerActive(false);
        window.clearInterval(countRef.current);
      }
    }, 100);
  };

  const stopTime = () => {
    setTimerActive(false);
    window.clearInterval(countRef.current);
  };

  const remainingTime = time - elapsedTime;
  const displayTime = remainingTime.toLocaleString(undefined, {
    minimumFractionDigits: 1,
  });

  return (
    <div className="timer-button">
      {timerActive ? (
        <button className="btn btn-timer-stop" onClick={stopTime}>
          {label} {displayTime}s
        </button>
      ) : (
        <button className="btn btn-timer-start" onClick={startTime}>
          {label} {displayTime}s
        </button>
      )}
    </div>
  );
};

export default Timer;
