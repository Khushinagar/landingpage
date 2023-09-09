import React from 'react'
import Navbar from '../componets/Navbar'

const Login = () => {
  return (
    <>
    <Navbar />
   <div className='login-main'>
    <div className='login'>
      <form className='login-form'>
        <input type='text' name='' id='' placeholder='username'></input>
        <input type='text' name='' id='' placeholder='password'></input>
        <button type='submit' className='btn-login btn-dark'> log in</button>
      </form>

    </div>
    </div>
    
    
    </>
  )
}

export default Login