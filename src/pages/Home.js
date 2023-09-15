import React from 'react'
import Navbar from '../componets/Navbar'
import img2 from '../Assets/image-removebg-preview (1).png'
import { Link } from 'react-router-dom'

const Home = (props) => {
return (
<>
    <Navbar />
    <div className='main'>
    <div className='content'>
    <div className='right-div'>
        <h1><span>e</span>xplore <span>t</span>he <span>w</span><span><img src={img2}className='bg-img' alt="compass"></img></span><span>rld</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <h2>{props.name?`welcome-${props.name}`:"login please"}</h2>
        {/* <Link path to='/Login'><button type='submit' className='btn-login btn-dark'>log in</button></Link>
        <Link path to='/Signup'><button type='submit' className='btn-signup btn-dark'>sign up</button></Link> */}
    </div>
    <div className='left-div'>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Home