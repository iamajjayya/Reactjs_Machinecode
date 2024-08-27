/*

UseCallback Hook 

Purpose :  Optimizes  performance by memoizing callback function  so they are't recreated on every  render 

Syntax  :  const memozedcalback  = useCallback( () => {
      dosomething(a,b)
    }, [a,b]);


    -> The first argument is the function to  memoize 
    -> The second argument is an array of depencencies  , The function  is only recreated when one  of the depencencies changes
*/

import { useCallback } from "react"

const ParentCompent = () => {
    
    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    })
    return <ChildCompoent onClick={handleClick} />
}

const ChildCompoent = ({ onClick }) => {

    return <button onClick={onClick}>Click me</button>
}

export default ParentCompent;


















