import './App.css';
import Info from "./componants/Info.js"
import About from "./componants/About.js"
import Interests from "./componants/Interests.js"
import SMedia from "./componants/SMedia.js"
// import { IconName } from "react-icons/fa";

export default function App(){
    return (
        <div className="App">
           <Info /> 
           <About /> 
           <Interests /> 
           <SMedia /> 
        </div>
    )
}
