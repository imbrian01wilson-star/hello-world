import { Component } from "react";
import "./style.css";

class Title extends Component {
  render() {
    return <h1>time is:</h1>;
  }
}

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  render() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return <h1 className="timer">{this.state.time}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="main">
        <Title />
        <Timer />
      </div>
    );
  }
}

export default App;
