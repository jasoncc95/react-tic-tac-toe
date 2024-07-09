import { useState } from 'react';
//had to add export default for other files to be able to import it
export default function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue("X")
    }
    
    return <button className="square" onClick={handleClick}>{value}</button>;
}