import "./Screen.css";

function Screen(props) {
    const { isDark, expression, output, history} = props;
  return (
    <>
      <div className={`screen scrollbar ${isDark? "screen_dark" : ""}`}>
        <div className="history scrollbar">
          { history.length >= 1 ? <h3>history</h3> : ""}
          {history.map((item, index)=> <p key={index+item}  >{item}</p>)}
        </div>
        {output === "" && expression === "" && history.length === 0 ? <div className="greeting_message">Happy Hacing!</div> : ""}
        <div>
        <div className="expression scrollbar"><p>{expression}</p></div>
        <div className="output">{output.length > 0 ? `=${output}` : ""}</div>

        </div>
      </div>
    </>
  );
}

export default Screen;
