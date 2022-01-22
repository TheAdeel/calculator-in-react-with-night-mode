import { useState } from "react";

import Keyboard from "./Keyboard/Keyboard";
import Screen from "./Screen/Screen";
import moonIcon from "../assets/moon-icon.png";
import sunIcon from "../assets/sun-icon.png";

import "./Calculator.css";

function Calculator() {
    const [isDark, setIsDark] = useState(false);
    const [expression, setExpression] = useState("");
    const [output, setOutput] = useState("");
    const [history, setHistory] = useState([]);
    const modeHandler = () => {
        setIsDark(!isDark);
    }
    const availableNumValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const availableOperators = ["+", "-", "*", "/"];
    const onPressHandler = (value) => {
        if (value === "C") {
            setExpression("");
            setOutput("");
        }
        if (value === "<") {
            if (expression.length === 0 || expression === "") {
                return;
            }
            setExpression(expression.slice(0, expression.length - 1));
            solveExpression(expression.slice(0, -1))
        }
        if (value === "+/-") {
            if (expression[0] === "-") {
                setExpression(expression.slice(1));
            } else {
                setExpression("-" + expression)
            }
        }
        if (value === "0") {
            if (expression.length === 0) return
            setExpression(expression + (+value));
        }

        // If pressed dot

        if (value === ".") {
            if (expression.length === 0) {
                setExpression( "0" + value)
            }
            if (availableOperators.includes(expression.slice(-1))) {
                setExpression(expression + "0" + value)
            }
            if (expression[expression.length - 1] === ".") {
                return;
            }
            if (availableNumValues.includes(+expression.slice(-1))) {
                setExpression(expression + value)
            }
        }
        if (availableNumValues.includes(+value)) {
            setExpression(expression + +value);
            solveExpression((expression + value))
        }
        // If Pressed any operator
        if (availableOperators.includes(value)) {
            let lastChar = expression[expression.length - 1];
            if (lastChar === value) { return };
            if (lastChar === ".") { return };
            if (availableOperators.includes(lastChar)) {
                let removeOperator = expression.slice(0, expression.length - 1); // remove previous operator
                setExpression(removeOperator + value);
            } else {
                setExpression(expression + value)
            }
        }

        // If pressed equal button
        if (value === "=") {
            if (expression.length === 0 || expression === "") {
                return
            }
            solveExpression(expression);
            let TEMP_HISTORY = [...history];
            if (TEMP_HISTORY.length > 21) {
                TEMP_HISTORY = TEMP_HISTORY.slice(0, -1);
            }
            TEMP_HISTORY.unshift(expression);
            setHistory(TEMP_HISTORY);
        }
    }

    const solveExpression = (exp) => {
        if (exp === "" || exp.length === 0) {
            setOutput("");
            return;
        }
        let lastChar = exp.slice(-1);
        if (!availableNumValues.includes(+lastChar)) {
            exp = exp.slice(0, -1);
        }
        let ans = eval(exp) + "";
        setOutput(ans);
    }
  return (
      <>
      <div className={`container ${isDark? "container_dark": ""}`}>
        <div className={`mobile ${isDark? "mobile_dark": ""}`}>
          <div className="mode" style={{cursor: "pointer"}} onClick={modeHandler}>
            <div className={`mode_toggle ${isDark? "mode_toggle_active": ""}`}>
              <span></span>
            </div>
            <img src={isDark? moonIcon : sunIcon} alt="" className="mode_image" />
                  </div>
          <Screen history={history} output={output} expression={expression} isDark={isDark} />
          <Keyboard onPress={onPressHandler} isDark={isDark} />
        </div>
      </div>
    </>
  );
}
export default Calculator;
