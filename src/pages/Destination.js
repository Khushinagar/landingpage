import React from 'react'
import Navbar from '../componets/Navbar'
import Cards from '../componets/Cards'
import content from '../content'
import userLogout from '../userLogout'
import { useNavigate } from 'react-router-dom'
import Grid from '../componets/Grid'
const Destination = () => {
  
  const navigate = useNavigate();
  const {error, logout} = userLogout();

  const handleLogout = async ()=>{
    await logout(); 
    if(!error){
      navigate("/");
    }
  }
  return (  
    <>
   <Navbar />
    <div className='destinations'>
  <section className='section-1'>
    <h1> explore your dream destination here</h1>
    <button onClick={handleLogout} type='submit' >logout</button>
  </section>
  <section className='section-2'>
      {/* <h2>...................</h2> */}
      <div className='content-section'>
           {content.productData.map(content =>(
           <Cards
             key={content.id}
             image={content.image}
             title={content.title}
          />
          ))}
       </div>
    </section>

    <section className='section-3'>
      <div className='img-grid'>
      {content.gridImage.map(content =>(
           <Grid
             key={content.id}
             img={content.img}
          />
          ))}

      </div>

    </section>
</div> 
</>
) }

export default Destination
  

