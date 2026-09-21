import React, { useState } from "react";
import "./Calculatour.css";

function Calculatour() {
  const [input, setInput] = useState(" ");
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  const handleClear = () => {
    setInput(" ");
  };
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    const evaluted = eval(input);
    setInput(evaluted);
  };

  return (
    <>
      <table style={{ borderRadius: "20px" }}>
        <tr>
          <td colSpan={4}>
            <br />
            <br />

            <input
              style={{ height: "100px", width: "460px" }}
              id="input"
              value={input}
              type="text"
              readOnly
            />
            <br />
            <br />
            <br />
            <br />
            <div className="solar">
              <div className="card" style={{ float: "right" }}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <button
              style={{ backgroundColor: "rgb(105, 14, 123)" }}
              onClick={handleClear}
            >
              <b>AC</b>
            </button>
          </td>
          <td>
            <button onClick={handleDelete}>C</button>
          </td>
          <td>
            <button onClick={() => handleClick("%")}>%</button>
          </td>
          <td>
            <button onClick={() => handleClick("/")}>÷</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => handleClick("7")}>7</button>
          </td>
          <td>
            <button onClick={() => handleClick("8")}>8</button>
          </td>
          <td>
            <button onClick={() => handleClick("9")}>9</button>
          </td>
          <td>
            <button onClick={() => handleClick("*")}>X</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => handleClick("4")}>4</button>
          </td>
          <td>
            <button onClick={() => handleClick("5")}>5</button>
          </td>
          <td>
            <button onClick={() => handleClick("6")}>6</button>
          </td>
          <td>
            <button onClick={() => handleClick("-")}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => handleClick("1")}>1</button>
          </td>
          <td>
            <button onClick={() => handleClick("2")}>2</button>
          </td>
          <td>
            <button onClick={() => handleClick("3")}>3</button>
          </td>
          <td>
            <button onClick={() => handleClick("+")}>+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => handleClick("0")}>0</button>
          </td>
          <td>
            <button onClick={() => handleClick("00")}>00</button>
          </td>
          <td>
            <button onClick={() => handleClick(".")}>.</button>
          </td>
          <td>
            <button onClick={handleCalculate}>=</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Calculatour;
