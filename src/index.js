
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from '@material-ui/core/Button';
 var count=0;

function Square({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

ReactDOM.render(<Square />, document.getElementById("root"));

function Game() {
  
const [ squares, setSquares ] = useState(Array(9).fill(null));
function Result() {
  const s = [...squares];
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return alert(`${squares[a]} WON THE MATCH`);
    }
    // else
    // return alert('THE MATCH WAS A DRAW')
  }
}

function Restart() {
  return(
  setSquares(Array(9).fill(null)))
    }
  

function renderSquare(i) {
  return <Square
    value={squares[i]}
    onClick={() => {

      const nextSquares = [...squares];
      if(count%2===0)
      nextSquares[i] = 'X';
      else
      nextSquares[i] = 'O';

      setSquares(nextSquares);
      console.log(...nextSquares)
      count++;
    }}
  />;
}
  return (
    
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <button className="restart" onClick={Restart}>
      Play again
    </button>
    <Button variant="contained" color="primary" onClick={Result}>
      Result
      </Button> 
        
      </div>
    </div>
 
     
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
