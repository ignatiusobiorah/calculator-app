import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  //handle click
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  //clear
  const clear = () => {
    setResult("");
  };

  //del
  const del = () => {
    setResult(result?.slice(0, -1));
  };

  const calc = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      if (result == "") {
        return result;
      }
      setResult("Syntax error");
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        {/* <div className="previous-operand">89</div> */}
        <div className="current-operand">{result}</div>
      </div>
      <button onClick={clear} className="span-two" id="ac">
        AC
      </button>
      <button onClick={del} id="del">
        DEL
      </button>
      <button onClick={handleClick} name="/">
        /
      </button>
      <button onClick={handleClick} name="1">
        1
      </button>
      <button onClick={handleClick} name="2">
        2
      </button>
      <button onClick={handleClick} name="3">
        3
      </button>
      <button onClick={handleClick} name="*">
        *
      </button>
      <button onClick={handleClick} name="4">
        4
      </button>
      <button onClick={handleClick} name="5">
        5
      </button>
      <button onClick={handleClick} name="6">
        6
      </button>
      <button onClick={handleClick} name="+">
        +
      </button>
      <button onClick={handleClick} name="7">
        7
      </button>
      <button onClick={handleClick} name="8">
        8
      </button>
      <button onClick={handleClick} name="9">
        9
      </button>
      <button onClick={handleClick} name="-">
        -
      </button>
      <button onClick={handleClick} name=".">
        .
      </button>
      <button onClick={handleClick} name="0">
        0
      </button>
      <button onClick={calc} className="span-two" id="equals">
        =
      </button>
    </div>
  );
}

export default App;
