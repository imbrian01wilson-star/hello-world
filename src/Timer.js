import { Component } from "react";
import "./style.css";

let interval;

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <h1 className="timer">{this.state.time}</h1>
        <button className="btn" onClick={this.props.changeTitle}>change title</button>
      </>
    );
  }
}

export default Timer;
