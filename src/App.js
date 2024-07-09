import Square from "./Square";
//The export JavaScript keyword makes this function accessible outside of this file. 
//The default keyword tells other files using your code that it’s the main function in your file.
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="1"/>
        <Square value="1"/>
      </div>
      <div className="board-row">
        <Square value="1"/>
        <Square value="1"/>
        <Square value="1"/>
      </div>
      <div className="board-row">
        <Square value="1"/>
        <Square value="1"/>
        <Square value="1"/>
      </div>
    </>
  );
}