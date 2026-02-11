import { Component } from "react";



class Title extends Component {
  render(){
    return <h1>time is:</h1>
  }
}

class Timer extends Component {
  render() {
    return new Date().toLocaleTimeString();
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Timer />
      </div>
    );
  }
}

export default App;
