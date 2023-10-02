export default function Screen({ firstOp, secondOp }) {
    if (firstOp === "") {
        firstOp = 0;
    }

    return (
        <div className="output">
            <div className="previous-operand">{secondOp}</div>
            <div className="current-operand">{firstOp}</div>
        </div>
    );
}
