/*

useState Hook  
-------------

Purpose : Manages state in Functional Components 

Syntax  : const [state, setState] =  useState(initialValue);

state : the Current state Value 

setState : The Function to update the state 

*/

import { useState } from "react";



const UseState = () => {
    const [count, setCount] =  useState(0);
    const [error, setError] = useState("")

    const increseCount =  () => {
        setError("")
        setCount(() => count + 1)

    }

    const decreseCount = () => {
        if(count > 0) {
            setCount(() => count - 1)
            setError("")
        } else {
             setError(" Count should  be greater than zero")
        }
        
    }

    return (
        <>
            
            <button onClick={increseCount}>Increase</button>
            <p>Count : {count}</p>
            <button onClick={decreseCount}>Decrease</button>
            { error && <p style={{ color : 'red' }}>{error}</p>}
        </>
    )
}

export default UseState;


