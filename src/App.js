import { Component, useState } from "react";
import "./style.css";
import Timer from "./Timer";
import Title from "./Title";
import { Context } from "./Context";
import TimerList from "./TimerList";

const App = () => {
  const [title, setTitle] = useState("timer:");
  const [isLight, setBgColor] = useState(false);
  const [timerList, setTimerList] = useState(["00 : 05 : 03"]);

  const changeBgColor = () => {
    setBgColor(!isLight);
  };

  return (
    <Context.Provider
      value={{ timerList: timerList, setTimerList: setTimerList }}
    >
      <div className={isLight ? "main" : "main dark-bg"}>
        <Title title={title} />
        <Timer changeBgColor={changeBgColor} />
        <TimerList></TimerList>
      </div>
    </Context.Provider>
  );
};

export default App;
