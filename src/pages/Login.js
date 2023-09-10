import React from 'react'
import Navbar from '../componets/Navbar'
import { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Email:'',Password:''
  });
  const [errorMessage, setErrorMessage] = useState();
  const [sendDataDisabled, setSendDataDisabled ]= useState(false);
  let name, value;
  const sendData = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setValues({...values,[name]:value})
  };

  const handleSubmission = ()=>{
    if(!values.Email || !values.Password){
      setErrorMessage('fill all fields')
      return;
    }
    setErrorMessage();
    setSendDataDisabled(true);
    signInWithEmailAndPassword(auth,values.Email, values.Password)
    .then(async(res)=>{
      setSendDataDisabled(false);
      navigate('/');
    })
    .catch((err)=>{ setSendDataDisabled(false);
     setErrorMessage(err.message);
    });
  };
  
  return (
    <>
    <Navbar />
   
   <div className='login-main'>
    <div className='login'>
      <form className='login-form'>
        <input type='text' name='' id='' placeholder='enter ypur email'
        value={values.Email}
        onChange={sendData}/>
        <input type='text' name='' id='' placeholder='password'
        value={values.Password}
        onChange={sendData}/>
        <p> {errorMessage}</p>
        <button type='submit'  onClick={handleSubmission}
        disabled={sendDataDisabled} 
         className='btn-login btn-dark'> log in</button>
      </form>
      
    </div>
    </div>
    
    
    </>
  )
}

export default Login