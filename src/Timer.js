import { Component, useState } from "react";
import "./style.css";
import TimerList from "./TimerList";

let interval;

const Timer = (props) => {
  let [second, setSecond] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);
  let [isStart, setIsStart] = useState(false);

  const startInterval = () => {
    setIsStart(true);

    interval = setInterval(() => {
      setSecond(second++);

      if (second == 60) {
        setMinute(minute++);
      }

      if (minute == 60) {
        setHour(hour++);
      }
    }, 1000);
  };

  const stopInterval = () => {
    setIsStart(false);
    clearInterval(interval);
  };

  const resetInterval = () => {
    stopInterval();
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  const handleSaveTime = () => {
    props.setTimerList([...props.timerList, newTime]);
  };

  let h = hour;
  let m = minute;
  let s = second;
  let newTime = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`;
  return (
    <>
      <h1 className="timer" onClick={handleSaveTime}>{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h1>
      <div className="buttons">
        <button className="btn" onClick={props.changeBgColor}>
          change bgColor
        </button>
        <button className="btn-start" onClick={startInterval}>
          Start
        </button>
        <button className="btn-stop" onClick={stopInterval}>
          Stop
        </button>
        <button className="btn-reset" onClick={resetInterval}>
          Reset
        </button>
      </div>
      <TimerList>{props.timerList}</TimerList>
    </>
  );
};

export default Timer;
