export default function KeyBoard() {
    return (
        <div className="KeyBoard">
            <div className="topRow">
                <button className="Delete">Del</button>
                <button className="Answer">=</button>
                <button className="Clear">Clr</button>
            </div>
            <div>
                <button className="Number">1</button>
                <button className="Number">2</button>
                <button className="Number">3</button>
                <button className="Operator">+</button>
            </div>
            <div>
                <button className="Number">4</button>
                <button className="Number">5</button>
                <button className="Number">6</button>
                <button className="Operator">-</button>
            </div>
            <div>
                <button className="Number">7</button>
                <button className="Number">8</button>
                <button className="Number">9</button>
                <button className="Operator">*</button>
            </div>
            <div>
                <button className="Decimal-Point">.</button>
                <button className="Number">0</button>
                <button className="Operator">%</button>
                <button className="Operator">÷</button>
            </div>
        </div>
    );
}
