import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    //if the game is set to a certain move number, we keep the history only up to that moment
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0); //since the game starts with X
  };

  const moves = history.map((squares, move) => { //no need to do anything with squares, we just need the move number
    const description = move > 0 ? 'Go to move #' + move : 'Go to game start';
    return (
      //all react components should have a key
      <li key={ move }> 
        <button onClick={ () => jumpTo(move) }>{ description }</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={ xIsNext } squares={ currentSquares } onPlay={ handlePlay }/>
      </div>
      <div className="game-info">
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}