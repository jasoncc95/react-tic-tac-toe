import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "./WinnerCalculator";
//The export JavaScript keyword makes this function accessible outside of this file. 
//The default keyword tells other files using your code that it’s the main function in your file.
export default function Board() {
  //by declaring this variables with useState we can maintain and change the state of the board
  const [xIsNext, setXIsNext] = useState(true); //to alternate between X and O
  const [squares, setSquares] = useState(Array(9).fill(null)); //creates an array with nine elements and sets each of them to null
  
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return; //if there is already a winner or a value, do nothing

    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    setSquares(nextSquares); //setting the next state of the board
    setXIsNext(!xIsNext); //setting which letter is next
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner == "Draw" ? "Its a draw" : 'Winner is ' + winner;
  } else {
    status = 'Next player is ' + (xIsNext ? 'X' : 'O');
  }
  //each Square is a component and we pass down the props it requires: the value to display 
  //and a callback function to keep the state of the game
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={ squares[0] } onSquareClick={ () => handleClick(0) }/>
        <Square value={ squares[1] } onSquareClick={ () => handleClick(1) }/>
        <Square value={ squares[2] } onSquareClick={ () => handleClick(2) }/>
      </div>
      <div className="board-row">
        <Square value={ squares[3] } onSquareClick={ () => handleClick(3) }/>
        <Square value={ squares[4] } onSquareClick={ () => handleClick(4) }/>
        <Square value={ squares[5] } onSquareClick={ () => handleClick(5) }/>
      </div>
      <div className="board-row">
        <Square value={ squares[6] } onSquareClick={ () => handleClick(6) }/>
        <Square value={ squares[7] } onSquareClick={ () => handleClick(7) }/>
        <Square value={ squares[8] } onSquareClick={ () => handleClick(8) }/>
      </div>
    </>
  );
}