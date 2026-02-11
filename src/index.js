import { createRoot } from "react-dom/client";
import App from "./App";



setInterval(()=>{
    createRoot(document.getElementById("root")).render(<App />);
},1000)
