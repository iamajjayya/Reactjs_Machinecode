/*

UseEffect Hook 

Purpose : Handles  Side Effects in Functional  Components,  like data fetching, subscriptions, and Manual  DOM manipulations,

Syntax :

useEffect( () => {
     Effect code is here    
    
    }, 
    [dependices ]
    
    )


    -> The first argument is a  function that contains the effect logic  
    -> The second argument is an optional array  of  dependencies, the effect runs only when one of these depencies changes if  omitted , the effect  runs after every render
    -> the function can return a clean up function to run when the component  unmounts or before or before the effect re-runs 


*/




import { useState, useEffect } from "react";

const DataFetch = () => {
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null)

    useEffect(() => {
      const  Fetchdata =  async () => {
       
         try {

            const  resposne = await fetch('https://jsonplaceholder.typicode.com/posts')

            if(!resposne.ok) {
                throw new Error (`HTTP error: ${resposne}`)
            }

            const data  = await resposne.json();
            setData(data)
            console.log(JSON.stringify(data,null,2))
         }

         catch (error) {
            setError(error.message)

         }



      }

      Fetchdata();

    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <>
           { error && <p> {error} </p> }

           {
              data.map((item,index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
              ))

           }
            
        </>
    );
}

export default DataFetch;
