import React from 'react'
import userLogout from '../userLogout'
import { useNavigate } from 'react-router-dom'

import '../styles/profile.scss'
const LogOut = () => {
  const navigate = useNavigate();
const {error, logout} = userLogout();
const handleLogout = async ()=>
   {
    await logout(); 
    if(!error)
    {navigate("/");}
  }
 
  return (
  <>
    
    <div className='proflie'>
   <button onClick={handleLogout} type='submit' className='logout-btn'>logout</button> </div>
      </>
  )
}

export default LogOut
