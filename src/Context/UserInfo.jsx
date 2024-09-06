import React, { useContext } from 'react'
import { userContext }  from    './Usercontext'

const UserInfo = () => {
    const { name , age } = useContext(userContext)
  return (
    <div>
        <h1>  Name is :   {name}</h1>
        <p> Age is  : {age}</p>
    </div>
  )
}

export default UserInfo
