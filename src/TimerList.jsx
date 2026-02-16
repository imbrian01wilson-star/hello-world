import { useContext } from "react";
import Items from "./Items";
import { Context } from "./Context";

const TimerList = () => {
  const context = useContext(Context);

  return (
    <div>
      {context.timerList.map((c) => (
        <Items key={Math.random()}>{c}</Items>
      ))}
    </div>
  );
};

export default TimerList;
