import { useContext } from "react";
import { Context } from "./Context";

const Items = (props) => {
  const context=useContext(Context)
  const handleDelet=(e)=>{
   
    context.setTimerList(context.timerList.filter(t=>t!=e.target.innerHTML))
    
  }
  return <div className="time-list" onClick={handleDelet}>{props.children}</div>;
};

export default Items;
