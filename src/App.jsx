import { useState } from "react";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState('0')

  function handleInput (value) {
    if (input === '0' || input === 'Error') {
      setInput(value)
    } else {
      setInput(prev => prev + value)
    }
  }

  function handleClear () {
    setInput('0')
  }

  function incrementOne () {
    try {
      const result = eval(input)
      setInput((+result + 1).toString())
    } catch {
      setInput('Error')
    }
  }

  function decrementOne () {
    try {
      const result = eval(input)
      setInput((+result - 1).toString())
    } catch {
      setInput('Error')
    }
  }

  function roundResult (value, decimals = 6) {
    return parseFloat(parseFloat(value).toFixed(decimals)).toString()
  }

  function equals () {
    try {
      const result = eval(input)
      const rounded = roundResult(result)
      setInput(rounded)
    } catch {
      setInput('Error')
    }
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button className="increment" onClick={incrementOne}>+1</button>
          <button className="decrement" onClick={decrementOne}>-1</button>
        </div>
        <div className="buttons">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button className="operator" onClick={() => handleInput('+')}>+</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button className="operator" onClick={() => handleInput('-')}>-</button>
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button className="operator" onClick={() => handleInput('*')}>×</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button className="equals" onClick={equals}>=</button>
          <button className="operator" onClick={() => handleInput('/')}>÷</button>
          <button className="clear" onClick={handleClear}>C</button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events
          handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
