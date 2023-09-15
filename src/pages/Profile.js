import React from 'react'
import Login from '../componets/Login'
import Signup from '../componets/Signup'
import { useState } from 'react'

const Profile = () => {

  const [toggle, setToggle] = useState(true);

 const  handleToggle =() =>{
    setToggle(!toggle);
  }
  return (
    <>
    <div className='profile'>
     {toggle ? <Login toggleForm={handleToggle}/> : <Signup toggleForm={handleToggle}/>}
   {/* toggleForm= prpos name */}
   </div>
    </>
  )
}

export default Profile
