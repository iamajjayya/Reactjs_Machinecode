

import { useContext } from "react"
import { userContext } from "./Usercontext"

const Alteruserinfo = () => {

    const { name , age } =  useContext(userContext)
  return (
    <div>
         <p> Nmae  is : {name} and Age is  {age}</p>
    </div>
  )
}

export default Alteruserinfo
