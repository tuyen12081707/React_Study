import React from 'react'
import { useState, useEffect, useRef } from "react";
export default function HookRef() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef("");

    useEffect(() => {
        count.current = inputValue;
    });
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {count.current}</h2>
        </>
    );
}
