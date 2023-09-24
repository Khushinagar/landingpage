import React from 'react'
import Navbar from '../componets/Navbar'
import img2 from '../Assets/26.png'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import image1 from '../Assets/carouselImage/1.jpeg'
import image2 from '../Assets/carouselImage/2.jpg'
import image3 from '../Assets/carouselImage/14.jpg'
const Home = (props) => {
return (
<>
 <div className='main'>
<Navbar />
<div className='content'>
  <div className='right-div'>
      <div className='right-div-content'>
        <h1><span>e</span>xplore <span>t</span>he <span>w</span><span><img src={img2}className='bg-img' alt="compass"></img></span><span>rld</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
  </div>
  <div className='left-div'>
      <div className='left-img'>
        <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        >
          <div className='carousel-img'>
            <img src={image1} alt='img1' className='c-image'/>
            
          </div>
          <div className='carousel-img'>
            <img src={image2 }alt='img2'className='c-image'/>
            
          </div>
          <div className='carousel-img'>
            <img src={image3} alt='img3'className='c-image'/>
          </div>
        </Carousel>
      </div>
  </div>
  </div>
</div>
</>
    
)
}

export default Home