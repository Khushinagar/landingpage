import React, {useState} from 'react';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';
import Navbar from '../componets/Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Name:'',Email:'',Password:''
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
    if(!values.Name || !values.Email || !values.Password){
      setErrorMessage('fill all fields')
      return;
    }
    setErrorMessage();
    setSendDataDisabled(true);
    createUserWithEmailAndPassword(auth,values.Email, values.Password)
    .then(async(res)=>{
      setSendDataDisabled(false);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.Name,
      });
      navigate('/');
      console.log(res);
    })
    .catch((err)=>{ setSendDataDisabled(false);
     setErrorMessage(err.message);
    });
  };
  
  return (
    <>
    <Navbar />
    <div className='signup'>
      <form className='signup-form'>
        <div>
        <label> Name</label>
        <input type='text' name='Name' placeholder='your name'
        value={values.Name}
        onChange={sendData}/>
        </div>
        <div>
        <label> Email</label>
        <input type='email' name='Email' placeholder='your email'
        value={values.Email}
        onChange={sendData}/>
        </div>
        <div>
        <label> password</label>
        <input type='text' name='Password' placeholder='password'
        value={values.Password}
        onChange={sendData}/>
        </div>
        <p> {errorMessage}</p>
        <button type='submit'  onClick={handleSubmission} 
        disabled={sendDataDisabled}   
        className='signup-btn btn-dark'>signup</button>
      </form>

    </div>
    </>
  )
}

export default Signup