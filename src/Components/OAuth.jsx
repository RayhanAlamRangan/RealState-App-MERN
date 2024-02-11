

/*

import { app } from '../firebase';
//import {GoogleAuthProvider ,getAuth} from 'firebase/auth'
//import { useDispatch  } from 'react-redux';
//import { signInSuccess, signInWithPopup  } from '../Redux/User/UserSlice';
//import { useNavigate } from 'react-router-dom';
const OAuth = () => {

const dispatch= useDispatch();
const navigate=useNavigate();
    const handleSubmit= async()=>{

try{

    const provider= new GoogleAuthProvider();
    const auth=getAuth(app);

    const result=   await   signInWithPopup( auth, provider);
    console.log(result);
   
    const  res= await fetch('/api/auth/google',{


        method:'POST',
        headers:{

            "Content-Type":"application/json",
        },


        body:JSON.stringify({ name: result.user.displayName, email: result.user.email,
             photo: result.user.photoURL}),
    })

    const data= await res.json();
    dispatch(signInSuccess(data));
    navigate('/');

}catch(error){


    console.log("Could Not Sign in With Google", error);

}

    }
  return (
    <button type="button"  onClick={handleSubmit} className="bg-red-700 p-3 rounded-lg text-white hover: opacity-95">
    Signin With Google</button>
  )
}

export default OAuth


*/