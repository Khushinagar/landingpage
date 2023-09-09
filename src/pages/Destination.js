import React from 'react'
import Navbar from '../componets/Navbar'
import img1 from '../Assets/1.png'

const Destination = () => {
  return (
    <>
    <Navbar />
    <div className='destinations'>
        <div className='place-1'>
            <h3>road trip</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <img src={img1} alt='road trip'></img>
            {/* <h4>place-1</h4> */}
        </div>
        <div className='place-2'>
            <h3>hill station</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <img src={img1} alt='road trip'></img>
            {/* <h4>place-1</h4> */}
        </div>
        <div className='place-3'>
            <h3>tracking</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <img src={img1} alt='road trip'></img>
            {/* <h4>place-1</h4> */}
        </div>
    </div>



    </>
  )
}

export default Destination
