import { Component, useState } from "react";
import "./style.css";

let interval;

// class Timer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       second: 0,
//       minute: 0,
//       hour: 0,
//       isStart: false,
//     };
//   }

//   startInterval = () => {
//     this.setState({
//       isStart: true,
//     });

//     interval = setInterval(() => {
//       this.setState({
//         second: this.state.second + 1,
//       });

//       if (this.state.second == 60) {
//         this.setState({
//           second: 0,
//           minute: this.state.minute + 1,
//         });
//       }

//       if (this.state.minute == 60) {
//         this.setState({
//           minute: 0,
//           hour: this.state.hour + 1,
//         });
//       }
//     }, 1000);
//   };

//   stopInterval = () => {
//     this.setState({
//       isStart: false,
//     });
//     clearInterval(interval);
//   };

//   resetInterval = () => {
//     this.stopInterval();
//     this.setState({
//       second: 0,
//       minute: 0,
//       hour: 0,
//     });
//   };

//   render() {
//     let h = this.state.hour;
//     let m = this.state.minute;
//     let s = this.state.second;
//     return (
//       <>
//         <h1 className="timer">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h1>
//         <div className="buttons">
//           <button className="btn" onClick={this.props.changeTitle}>
//             change title
//           </button>
//           <button className="btn-start" onClick={this.startInterval}>
//             Start
//           </button>
//           <button className="btn-stop" onClick={this.stopInterval}>
//             Stop
//           </button>
//           <button className="btn-reset" onClick={this.resetInterval}>
//             Reset
//           </button>
//         </div>
//       </>
//     );
//   }
// }

const Timer = ({ changeBgColor }) => {
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

  let h = hour;
  let m = minute;
  let s = second;
  return (
    <>
      <h1 className="timer">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h1>
      <div className="buttons">
        <button className="btn" onClick={changeBgColor}>
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
    </>
  );
};

export default Timer;
