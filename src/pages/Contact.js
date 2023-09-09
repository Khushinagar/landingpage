import React, {useState} from 'react'
import Navbar from '../componets/Navbar'

const Contact = () => {
        const [userData, setUserData] = useState(
        {
         Name: '', City:'', Email:'', Message:'',
        }
        );
        let name,value;
        const postUserData=(e)=>{
                name= e.target.name;
                value= e.target.value;
                setUserData({...userData,[name]:value});
        };
        // connect with firebase
        const submitData= async (e) =>{
                const {Name,City,Email, Message} = userData
                e.preventDefault();
                   const option= {
                        method:"POST",
                        headers:{
                             "Content-Type" : "application/json"
        },
            body:JSON.stringify({
                Name,City,Email, Message
        })
            }
            if( Name && City && Email && Message){
            const res = await fetch('https://landingpage-c8834-default-rtdb.firebaseio.com/Messages.json',option)
            console.log(res)
            if(res){
                setUserData({
                        Name: '', City:'', Email:'', Message:'',
                        
                })
                alert("Data Stored");
        } else{alert("please fill the data");
        }
}
else{alert("please fill the data");
        
}       
     
        }
        

return (
<>
<Navbar />
<div className='form'>
    <main>
        <h1>Contact Form</h1>
    <form method='POST'>
<div>
        <label>Name</label>
        <input
        type='text' 
        name='Name'
        id=""
        placeholder='enter your name' 
        value={userData.Name} 
        onChange={postUserData}
        />
</div>
<div>
        <label>Your city </label>
        <input 
        type='text'
        name='City'
         placeholder='enter your city'
         value={userData.City}
          onChange={postUserData}
         />
</div>
<div>
        <label>Email Id</label>
        <input
         type='email-id'
         name='Email'
         placeholder='enter your mail-id'
         value={userData.Email} 
         onChange={postUserData}

         />

</div>
<div>
        <label>Your Message</label>
        <input type='text'
        name='Message' 
        placeholder='enter your message'
        value={userData.Message} 
        onChange={postUserData}
        />
</div>
<button type='submit' className='btn btn-primary' onClick={submitData}>Submit</button>
    </form>
    </main>
</div>
</>
)
}

export default Contact