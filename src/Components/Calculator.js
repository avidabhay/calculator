import React, { useState } from "react";
import Screen from "./Screen";
import KeyBoard from "./KeyBoard";

export default function Calculator() {
    const [firstOp, setFirstOp] = useState("");

    const updateFirstOp = (text) => {
        setFirstOp((firstOp) => firstOp+text.innerText);
        if(text.innerText==="Clr") {
            setFirstOp((firstOp) => "");
        }

        if(text.innerText==="Del") {
            setFirstOp((firstOp) => firstOp.slice(0, -4));
        }
    }


    
    return (
        <div className="calculator-grid">
            <Screen firstOp={firstOp}/>
            <KeyBoard onClick={updateFirstOp} />
        </div>
    );
}
