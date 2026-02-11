import { Component } from "react";
import "./style.css";
import Timer from "./Timer";
import Title from "./Title";

class App extends Component {
  constructor(){
    super()
    this.state={
      title:'time is:'
    }
  }

  changeTitle=()=>{
    this.setState({
      title:'this is what you see!'
    })
  }

  render() {
    return (
      <div className="main">
        <Title title={this.state.title}/>
        <Timer changeTitle={this.changeTitle}/>
      </div>
    );
  }
}

export default App;
