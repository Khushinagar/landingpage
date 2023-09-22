import React from 'react'

const Cards = (props) => {
return (
<>
    <div className='card-container'>
        <img src={props.image} alt='img' className='card-img'/>
        <h1 className='heading'> {props.title}</h1>
    </div>
    
</>
)
}

export default Cards