

import   { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {



  const [formdata, setFormdata]=useState({});

  const [Error,setError]=useState(null);
  const [Loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{

    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,

    });
  
  };

    const  handleClick=async(e)=>{
      e.preventDefault();
    try{
  
      setLoading(true);
      const res = await fetch('/api/auth/Sign-Up',({
    
    
        method:'POST',
        headers:{
    
          'Content-Type':'Application/json',
          
          },
          body:  JSON.stringify(formdata),
    
      }));
      
      const data =await res.json();
      console.log(data);
      if(data.success===false){
        setLoading(false);
setError(data.message);

return;
      }


      setError(null);
      setLoading(false);
      navigate('/Sign-In')
    }
catch(error){
setLoading(false);
setError(error.message);

}

       };
  
  

  return (
    <div  className="p-3 max-w-lg  mx-auto"><h1  className="text-3xl text-center
     font-semibold  my-7 ">SignUp</h1>
     
     
     <form   onSubmit={handleClick}  className="flex gap-4 flex-col"    >
      <input type="text" onChange={handleChange}className="border  p-3 rounded-lg" id="username" placeholder="user name"/>

      <input type="email"  onChange={handleChange} className="border  p-3 rounded-lg" id="useremail" placeholder="email"/>
      <input type="password"  onChange={handleChange} className="border  p-3 rounded-lg" id="userpassword" placeholder="user password"/>
      
      
      <button  disabled={Loading} className=" bg-pink-600 text-white p-3 rounded-lg
       hover:opacity-80  disabled:opacity-80">{Loading?  'Loading...' :  'Sign Up'}</button>
      </form>

      <div  className="flex gap-2 mt-5 ">
        <p>Have an account?</p>
        <Link to="/Sign-in"><span className="text-blue-500">Sign In</span></Link>
      </div>

      {Error   && <p  className="text-red-500 mt-5"> {Error}</p>}
       </div>
  );
  };

export default SignUp