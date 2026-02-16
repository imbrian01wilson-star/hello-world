import { createContext } from "react";

export const Context = createContext({
  timerList: [],
  setTimerList: () => {},
});
