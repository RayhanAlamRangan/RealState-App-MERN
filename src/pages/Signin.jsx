


import   { useState } from "react";
import { Link, useNavigate } from "react-router-dom";






const Signin = () => {



  const [formdata, setFormdata]=useState({});

const {loading, error}= useSelector((state)=> state.user);
  const navigate=useNavigate();
  const dispatch= useDispatch();

  const handleChange=(e)=>{

    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,

    });
  
  };

    const  handleClick=async(e)=>{
      e.preventDefault();
    try{
  
    dispatch(signInStart());
      const res = await fetch('/api/auth/signin',({
    
    
        method:'POST',
        headers:{
    
          'Content-Type':'Application/json',
          
          },
          body:  JSON.stringify(formdata),
    
      }));
      
      const data =await res.json();
      console.log(data);
      if(data.success===false){
  dispatch(signInFailur(data.message));

return;
      }


  dispatch(signInSuccess(data));
      navigate('/')
    }
catch(error){
dispatch(signInFailur(error.message));

}

       };
  
  

  return (
    <div  className="p-3 max-w-lg  mx-auto"><h1  className="text-3xl text-center
     font-semibold  my-7 ">Sign In</h1>
     
     
     <form   onSubmit={handleClick}  className="flex gap-4 flex-col"    >
      <input type="text" onChange={handleChange}className="border  p-3 rounded-lg" id="username" placeholder="user name"/>

      <input type="password"  onChange={handleChange} className="border  p-3 rounded-lg" id="userpassword" placeholder="user password"/>
      
      
      <button  disabled={loading} className=" bg-pink-600 text-white p-3 rounded-lg
       hover:opacity-80  disabled:opacity-80">{loading?  'Loading...' :  'Sign In'} </button>
       <OAuth/>
      </form>

      <div  className="flex gap-2 mt-5 ">
        <p>Dont Have an account? </p> 
        <Link to= "/Sign-Up" > <span className="text-blue-500">Sign Up</span></Link>
      </div>

      {error   && <p  className="text-red-500 mt-5"> {error}</p>}
       </div>
  );
  };

export default Signin