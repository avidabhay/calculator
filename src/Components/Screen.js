export default function Screen({ firstOp, secondOp, result }) {
    if(firstOp==="") {
        firstOp = 0;
    }

    return (
        <div className="output">
            <div className="previous-operand">{firstOp}</div>
            <div className="current-operand">{firstOp}</div>
        </div>
    );
}
