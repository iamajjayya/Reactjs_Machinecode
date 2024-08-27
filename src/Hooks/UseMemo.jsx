/*
UseMemo Hook 

Purpose : Optimizes performance  by  memoizing expensive calculations  so that  they  only re-compute when depencies change  

Syntax :  
const memozedValue  = useMemo(() => computeExpensiveValue(a,b),[a,b]);

-> the  firts  argument is a function  that compute te value 
->  the second argument is  an array  of dependencies . The function  only re-runs when  one of  the dependencies changes 


*/

import { useMemo, useState } from "react"


const items = [
     'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'
]

 const FilterlistComponent = () => {

const [searcTerm, setSerachTerm] = useState('');

const  filterdItems = useMemo(() => {

    return items.filter(item =>  item.toLocaleLowerCase().includes(searcTerm.toLocaleLowerCase()))
},[searcTerm])


return (
    <>
        <input 
           type="text"
           placeholder="Search..."
           value={searcTerm}
           onChange={(e) => setSerachTerm(e.target.value)}
        />

        {
            filterdItems.map((item,index) => (
                <li key={index}>{item}</li>
            ))
        }
    </>
)


}


export default FilterlistComponent;















