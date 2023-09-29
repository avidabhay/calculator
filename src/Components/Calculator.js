import React from "react";
import Screen from "./Screen";
import KeyBoard from "./KeyBoard";

export default function Calculator() {
    return (
        <div className="Calculator">
            <Screen />
            <KeyBoard />
        </div>
    );
}
