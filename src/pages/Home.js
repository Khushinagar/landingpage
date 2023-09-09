import React from 'react'
import Navbar from '../componets/Navbar'
import img2 from '../Assets/image-removebg-preview (1).png'
import { Link } from 'react-router-dom'


const Home = () => {
     
  return (
    <>
    <Navbar />
    <div className='main'>
    <div className='content'>
    <div className='right-div'>
        <h1><span>e</span>xplore <span>t</span>he <span>w</span><span><img src={img2} alt="compass"></img></span><span>rld!!!</span></h1>
        {/* <div className='searchbox'><i class="ri-search-2-line">Search More...</i></div>  */}
       {/* <button type='search' className='btn-search btn-light'><i class="ri-search-2-line"></i>search more...</button> */}
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <Link path to='/Login'><button type='submit' className='btn-login btn-dark'>log in</button></Link>
        <Link path to='/Signup'><button type='submit' className='btn-signup btn-dark'>sign up</button></Link>
        
    </div>
    <div className='left-div'>
        {/* <h1>Explore The World</h1> */}
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Home