import React from 'react'
import userLogout from '../userLogout'
import { useNavigate } from 'react-router-dom'
import Navbar from '../componets/Navbar'
import '../styles/profile.scss'
import Login from '../componets/Login'
const Profile = () => {
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
    < Navbar/>
    <Login />
    <div className='proflie'>
   <button onClick={handleLogout} type='submit' className='logout-btn'>logout</button> </div>
      </>
  )
}

export default Profile


















// import React from 'react'
// import Login from '../componets/Login'
// import Signup from '../componets/Signup'
// import { useState } from 'react'

// const Profile = () => {
// const [toggle, setToggle] = useState(true);
// const  handleToggle =() =>
//       {
//        setToggle(!toggle);
//       }
// return (
// <>
//    <div className='profile'>
//      {toggle ? <Login toggleForm={handleToggle}/> : <Signup toggleForm={handleToggle}/>} 
//       {/* toggleForm= prpos name  */}
//  </div> 
// </>
  
// )
// }

// export default Profile
