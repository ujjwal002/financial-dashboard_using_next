"use client"

import { useState } from "react"

export default function Template({ children }) {
    const [count, setCount] = useState(0);
    function handelClick(){
        setCount(count+1);
        console.log("hello");
    }

    return <>
        <h1>Hello from template</h1>
        <h4>{count}</h4>
        <button onClick={handelClick}>Click</button>
        {children}
    </>
}