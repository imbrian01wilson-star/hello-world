import Items from "./Items";

const TimerList = (props) => {
  return (
    <div>
      {props.children.map((c) => (
        <Items key={Math.random()}>{c}</Items>
      ))}
    </div>
  );
};

export default TimerList;
