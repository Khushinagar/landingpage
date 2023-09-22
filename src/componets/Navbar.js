import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
const [display, setDisplay] = useState(false)
return (
<>
<div className='navbar'>
    <div className='right-nav'>
        <h2> Logo</h2>
    </div>
<div className= {display ?'left-nav':'left-nav-phone'}>
    <ul className='list'>
        <li> <Link path to='/'>Home</Link></li>
        <li> <Link path to='/Destination'>Destination</Link></li>
        <li> <Link path to='/Contact Us'>Contact Us</Link></li>
        <li> <Link path to='/Blog'>Blog</Link></li>
        <li> <Link path to='/Profile'>Profile</Link></li>
    </ul>
</div>   
       <i onClick={()=>setDisplay(!display)} class="ri-menu-3-line "></i>
</div> 
</>
)
}

export default Navbar

























// import { useState } from 'react'
// const Header = () => {
//     // const [display, setDisplay]= useState(true)
//   return (
//     <>
//     <div className='navbar'>
//         <div className='right-nav'>
//             <h2> Logo</h2>
//         </div>
//         <div className='left-nav'>
//             <h3>Home</h3>
//             <h3>Destination </h3>
//             <h3>Contact Us </h3>
//             <h3>Blog</h3>      
//         </div>
//         <i class="ri-menu-3-line"></i>
//     </div>
//     </>
//   )
// }



