import React, { useState } from "react";
import Screen from "./Screen";
import KeyBoard from "./KeyBoard";

export default function Calculator() {
    const [firstOp, setFirstOp] = useState("");
    const [secondOp, setSecondOp] = useState("");
    const [operator, setOperator] = useState("");

    const updateFirstOp = (text) => {
        try {
            if (text.className === "clear") {
                setFirstOp("");
            } else if (text.className === "delete") {
                setFirstOp((prevFirstOp) => prevFirstOp.slice(0, -1));
            } else if (
                text.className === "plus" ||
                text.className === "minus" ||
                text.className === "multiply" ||
                text.className === "divide" ||
                text.className === "percent"
            ) {
                if (parseFloat(firstOp)) {
                    setSecondOp(firstOp);
                    setOperator(text.innerText);
                    setFirstOp("");
                } else {
                    setFirstOp((prevFirstOp) => prevFirstOp + text.innerText);
                }
            } else if (text.innerText === "=") {
                if (secondOp && firstOp) {
                    let result;
                    switch (operator) {
                        case "+":
                            result = parseFloat(secondOp) + parseFloat(firstOp);
                            break;
                        case "-":
                            result = parseFloat(secondOp) - parseFloat(firstOp);
                            break;
                        case "*":
                            result = parseFloat(secondOp) * parseFloat(firstOp);
                            break;
                        case "÷":
                            if (firstOp == 0) {
                                alert("Don't divide by Zero 🤬🤬🤬");
                            }
                            result = parseFloat(secondOp) / parseFloat(firstOp);
                            break;
                        case "%":
                            result =
                                (parseFloat(secondOp) / 100) *
                                parseFloat(firstOp);
                            break;
                        default:
                    }
                    setFirstOp(result.toString());
                    setOperator("");
                }
            } else {
                setFirstOp((prevFirstOp) => prevFirstOp + text.innerText);
            }
        } catch (error) {
            console.error(error);
            setFirstOp("Error");
        }
    };

    const updateSecondOp = (text) => {
        if (text.className === "delete") {
            setSecondOp((prevSecondOp) => prevSecondOp.slice(0, -1));
            console.log(secondOp);
        } else if (text.className === "clear") {
            setSecondOp("");
        } else {
            setSecondOp((prevSecondOp) => prevSecondOp + text.innerText);
        }
    };

    return (
        <div className="calculator-grid">
            <Screen firstOp={firstOp} secondOp={secondOp} />
            <KeyBoard
                onClickFirst={updateFirstOp}
                onClickSecond={updateSecondOp}
            />
        </div>
    );
}
