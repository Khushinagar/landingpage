

import {projectAuth} from './pages/firebase'


let error = null;
const login = async(email, password) =>{
  let  err = null;
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email,password);
        err =null;
        console.log(res.user);
        return res;

    }catch(err){
        err = err.message;
        console.log(error);


    } 
};


const userLogin =() =>{
    return { error, login};
};

export default userLogin;

