

import {FaSearch} from 'react-icons/fa'

import { Link } from 'react-router-dom'   
//import {useSelector} from 'react-redux'

const Header = () => {

  const {currentUser}=  (( state )=>   state.user)
  return (
   <header className="  bg-pink-600 shadow-md">
<div  className="flex justify-between items-center  max-w-6xl mx-auto p-3 ">


<Link to="/">
<h1  className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span  className="   text-slate-100  ">Rayhan</span>
        <span  className="text-slate-200 ">RealState</span>
    </h1></Link>
    <form  className="bg-slate-100 p-3 rounded-lg   flex items-start">

        <input type="text" placeholder="...Search Here"   className="bg-transparent focus:outline-none w-24 sm:w-64"/>
   <FaSearch  className="text-slate-500"/>
    </form>
    <ul className='flex gap-4'>
<Link  to="/"><li className='hidden sm:inline text-slate-800 hover:underline'>Home</li></Link>
        
      <Link to="/about"> <li className='hidden sm:inline text-slate-800 hover:underline'>About</li></Link> 
      <Link to="/profile">
      {

        currentUser ?(
          <img src={currentUser.avatar} className="rounded-full
           h-7 w-7 object-cover" alt="profile"/>

        ):(<li  className='hidden sm:inline text-slate-800 hover:underline'>SignIn</li>
      

     ) }
    </Link> 
        
    </ul>
</div>
 

   </header>
  )
}

export default Header