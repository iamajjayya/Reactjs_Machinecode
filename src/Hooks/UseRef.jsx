/*

UseRef
-------

UseRef is used  to Access  DOM elements , store mutable values ,  persist data 

Syntax : 

const refContainer = useRef(initialValue);

refContainer -> The mutable refernce object , It has a  .current property that can hold a  value  

initialValue :  the  initial value of the  reference .






*/

import { useRef } from "react"


const TextInputFocus  = () => {
const inputRef = useRef(null);

const focusInput = () => {
    inputRef.current.focus();
}

return (
    <>
        <input  type="text" placeholder="enter a  text "   ref={inputRef}   />
        <button onClick={focusInput}>Focus</button>
    </>
)
}

export default TextInputFocus;