//had to add export default for other files to be able to import it
export default function Square({ value }) {
    return <button className="square">{value}</button>;
}