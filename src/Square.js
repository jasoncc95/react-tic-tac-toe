import { useState } from 'react';
//had to add export default for other files to be able to import it
//each parameter passed when creating a Square is prop that is set on creation
export default function Square({ value, onSquareClick }) {
    //const [value, setValue] = useState(null);
    //function handleClick() {
    //    setValue("X")
    //}
    //return <button className="square" onClick={handleClick}>{value}</button>;

    //onSquareClick is a callback function that will get executed when the square is clicked
    return <button className="square" onClick={ onSquareClick }>{ value }</button>;
}