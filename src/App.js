import { Component, useState } from "react";
import "./style.css";
import Timer from "./Timer";
import Title from "./Title";
import TimerList from "./TimerList";



const App = () => {
  const [title, setTitle] = useState("timer:");
  const [isLight, setBgColor] = useState(false);
  const [timerList, setTimerList] = useState(["00 : 05 : 03"]);

  const changeBgColor = () => {
    setBgColor(!isLight);
  };

  return (
    <div className={isLight ? "main" : "main dark-bg"}>
      <Title title={title} />
      <Timer changeBgColor={changeBgColor} timerList={timerList} setTimerList={setTimerList}/>
    </div>
  );
};

export default App;
