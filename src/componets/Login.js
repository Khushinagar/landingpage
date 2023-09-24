import React from 'react'
import Navbar from './Navbar'
import { useState} from 'react'
import userLogin from '../userLogin'
import { useNavigate, useLocation } from 'react-router-dom'


const Login = (props) => {
     
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/destination';
  const {error, login} = userLogin();
  const handleLogin = async(e) =>
      {
        e.preventDefault();
        await login(email, password);
        if (!error)
        {
          setEmail("");
          setPassword("");
          navigate(from, {replace:true});
        return;
        }else
            {
            setErrorMessage(error)
            }
      }
return(
<>
<Navbar />
<div className='login-form'>
      {/* <h1> log in to your account</h1> */}
<form onSubmit= {handleLogin} >
      <input type='email' placeholder='enter email'  
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input type='password' placeholder='enter password'  
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      {error && <p>{errorMessage}</p>}
      <button type='submit'className='login-btn' >login</button>
      </form>
      <p> have no account?</p> 
      <button onClick={props.toggleForm}>sign up</button>
</div>

</>
)
}

export default Login



 
// const [submitted, setSubmitted] = useState(false)
// const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     await login(email, password);
//     if (!error) {
//       setSubmitted(true); // Set submitted to true after successful login
//       navigate(from, { replace: true });
//       setEmail("");
//       setPassword("");
//     } else {
//       setErrorMessage(error);
//     }
//   } catch (error) {
//     // Handle any errors that occur during the login process
//     console.error("Login error:", error);
//     setErrorMessage("An error occurred during login.
// xsi-zevm-kxd