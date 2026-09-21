import { useEffect, useState } from "react";
import "./ScientificCalse.css";

const rows = [
  ["sin", "cos", "tan", "ln", "log", "sqrt"],
  ["pi", "e", "x2", "xy", "(", ")"],
  ["MC", "MR", "M+", "M-", "Ans", "DEL"],
  ["AC", "7", "8", "9", "%", "/"],
  ["4", "5", "6", "*", "-", "+"],
  ["1", "2", "3", "0", ".", "="],
];
const functionKeys = new Set([
  "sin",
  "cos",
  "tan",
  "ln",
  "log",
  "sqrt",
  "pi",
  "e",
  "x2",
  "xy",
  "(",
  ")",
]);
const operators = new Set(["+", "-", "*", "/", "%", "^"]);

function calculateExpression(value, angleMode, answer) {
  const expression = value
    .replace(/\be\b/g, "Math.E")
    .replaceAll("pi", "Math.PI")
    .replaceAll("sqrt", "Math.sqrt")
    .replaceAll("ln", "Math.log")
    .replaceAll("log", "Math.log10")
    .replaceAll("sin", angleMode === "DEG" ? "sinD" : "Math.sin")
    .replaceAll("cos", angleMode === "DEG" ? "cosD" : "Math.cos")
    .replaceAll("tan", angleMode === "DEG" ? "tanD" : "Math.tan")
    .replaceAll("Ans", String(answer))
    .replaceAll("^", "**");
  if (!/^[0-9+\-*/().%\sA-Za-z.]+$/.test(expression))
    throw new Error("Invalid expression");
  const result = Function(
    "sinD",
    "cosD",
    "tanD",
    `return ${expression}`,
  )(
    (number) => Math.sin((number * Math.PI) / 180),
    (number) => Math.cos((number * Math.PI) / 180),
    (number) => Math.tan((number * Math.PI) / 180),
  );
  if (!Number.isFinite(result)) throw new Error("Math error");
  return Number(result.toFixed(10));
}

function ScientificCalse() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [answer, setAnswer] = useState(0);
  const [memory, setMemory] = useState(0);
  const [angleMode, setAngleMode] = useState("DEG");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const calculate = () => {
    if (!expression.trim()) return;
    try {
      const value = calculateExpression(expression, angleMode, answer);
      setResult(String(value));
      setAnswer(value);
      setHistory((items) => [{ expression, value }, ...items].slice(0, 4));
      setExpression("");
      setError("");
    } catch {
      setError("Invalid expression");
    }
  };

  const press = (key) => {
    setError("");
    if (key === "AC") {
      setExpression("");
      setResult("0");
      return;
    }
    if (key === "DEL") {
      setExpression((value) => value.slice(0, -1));
      return;
    }
    if (key === "=") {
      calculate();
      return;
    }
    if (key === "x2") key = "^2";
    if (key === "xy") key = "^";
    if (key === "sqrt" || ["sin", "cos", "tan", "ln", "log"].includes(key))
      key += "(";
    setExpression((value) =>
      operators.has(key) && operators.has(value.at(-1)) ? value : value + key,
    );
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        /^[0-9.]$/.test(event.key) ||
        ["+", "-", "*", "/", "(", ")", "%"].includes(event.key)
      ) {
        event.preventDefault();
        press(event.key);
      } else if (event.key === "Enter") {
        event.preventDefault();
        calculate();
      } else if (event.key === "Backspace") press("DEL");
      else if (event.key === "Escape") press("AC");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const memoryPress = (key) => {
    if (key === "MC") setMemory(0);
    if (key === "MR") setExpression((value) => value + memory);
    if (key === "M+") setMemory((value) => value + Number(result));
    if (key === "M-") setMemory((value) => value - Number(result));
    if (key === "Ans") setExpression((value) => value + answer);
  };

  return (
    <main className="calculator-shell">
      <section className="scientific-calculator">
        <header className="calculator-header">
          <div>
            <p className="eyebrow">PRECISION ENGINE / 01</p>
            <h1>
              Scientific <span>Calc</span>
            </h1>
          </div>
          <button
            className="angle-button"
            onClick={() =>
              setAngleMode((value) => (value === "DEG" ? "RAD" : "DEG"))
            }
          >
            {angleMode}
          </button>
        </header>
        <div className="calculator-layout">
          <div className="calculator-body">
            <div className="display">
              <div className="display-info">
                <span>
                  {angleMode} · M {memory}
                </span>
                <span>{error || "READY"}</span>
              </div>
              <div className="expression">{expression || "0"}</div>
              <div className="result">{result}</div>
            </div>
            <div className="keypad">
              {rows.flat().map((key) => (
                <button
                  key={key}
                  className={`${functionKeys.has(key) ? "function-key" : ""} ${key === "AC" ? "clear-key" : ""} ${["MC", "MR", "M+", "M-", "Ans"].includes(key) ? "memory-key" : ""}`}
                  onClick={() =>
                    ["MC", "MR", "M+", "M-", "Ans"].includes(key)
                      ? memoryPress(key)
                      : press(key)
                  }
                >
                  {key === "sqrt"
                    ? "√"
                    : key === "pi"
                      ? "π"
                      : key === "x2"
                        ? "x²"
                        : key === "xy"
                          ? "xʸ"
                          : key === "*"
                            ? "×"
                            : key === "/"
                              ? "÷"
                              : key === "-"
                                ? "−"
                                : key}
                </button>
              ))}
            </div>
          </div>
          <aside className="history">
            <div className="history-heading">
              Recent <span />
            </div>
            {history.length ? (
              history.map((item, index) => (
                <button
                  className="history-item"
                  key={`${item.expression}-${index}`}
                  onClick={() => setExpression(item.expression)}
                >
                  <span>{item.expression}</span>
                  <strong>{item.value}</strong>
                </button>
              ))
            ) : (
              <p>
                Your calculations
                <br />
                will appear here.
              </p>
            )}
            <small>
              <i /> SYSTEM ONLINE
            </small>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default ScientificCalse;
