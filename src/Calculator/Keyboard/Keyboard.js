import { useState } from "react";
import "./Keyboard.css";

function Keyboard(props) {
    const { isDark, onPress} = props;
  return (
    <>
      <div className={`keyboard ${isDark? "keyboard_dark" : ""}`}>
        <button key="C" value="C" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">C</button>
        <button key="<" value="<" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">⌫</button>
        <button key="+/-" value="+/-" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">+/-</button>
        <button key="/" value="/" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">&#247;</button>
        <button key="9" value="9" onClick={(e)=>{onPress(e.target.value)}} className="btn">9</button>
        <button key="8" value="8" onClick={(e)=>{onPress(e.target.value)}} className="btn">8</button>
        <button key="7" value="7" onClick={(e)=>{onPress(e.target.value)}} className="btn">7</button>
        <button key="*" value="*" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">x</button>
        <button key="6" value="6" onClick={(e)=>{onPress(e.target.value)}} className="btn">6</button>
        <button key="5" value="5" onClick={(e)=>{onPress(e.target.value)}} className="btn">5</button>
        <button key="4" value="4" onClick={(e)=>{onPress(e.target.value)}} className="btn">4</button>
        <button key="-" value="-" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">-</button>
        <button key="3" value="3" onClick={(e)=>{onPress(e.target.value)}} className="btn">3</button>
        <button key="2" value="2" onClick={(e)=>{onPress(e.target.value)}} className="btn">2</button>
        <button key="1" value="1" onClick={(e)=>{onPress(e.target.value)}} className="btn">1</button>
        <button key="+" value="+" onClick={(e)=>{onPress(e.target.value)}} className="btn blue">+</button>
        <button key="." value="." onClick={(e)=>{onPress(e.target.value)}} className="btn round dot">dot</button>
        <button key="0" value="0" onClick={(e)=>{onPress(e.target.value)}} className="btn">0</button>
        <button key="00" value="00" onClick={(e)=>{onPress(e.target.value)}} className="btn">00</button>
        <button key="=" value="=" onClick={(e)=>{onPress(e.target.value)}} className="btn round equal blue">=</button>
      </div>
    </>
  );
}

export default Keyboard;
