import React, {useState} from 'react';
import Navbar from './Navbar';

const Signup = (props) => {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
 
return (
<>
<Navbar />
    

<div className='signup-form'>
<h1> create your account</h1>
     <form>
     <input type='text' placeholder='enter name' 
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <input type='email' placeholder='enter email'  
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='enter password'  
      value={password}
      onChange={(e)=>setPassword(e.target.value)}/>
      <button  type='submit'>signup</button>
     </form>

     <p> have an account?</p>
     <button onClick={props.toggleForm}>login</button>
     </div>
    </>
  )
}

export default Signup