
/*
import { UseSelector   } from "react-redux/es/hooks/useSelector"
import { useRef  } from "react";
import { useState } from "react";
import {getStorage}  from 'firebase/storage';
import { app } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";

const Profile = () => {  
  const fileRef=useRef(null);
  const currentUser=  UseSelector((state) => state.user);
  const [file, setFile]= useState(undefined);
  console.log(file);
  const [fileperc,setFileperc]=useState(0);


  //firebase storage


   //  allow read, write: if false;
    //  allow  write:if request.resource.size <2 *1024 *1024 && 
    //  request.resource.contentType.matches('/image.')


useEffect(()=>{

   if(file){
    handleFileUpload(file);

   }
},[file]);

const  handleFileUpload=(file)=>{


  const  storage = getStorage(app);
  const  filename=  new Date().getTime()+file.name;
  const storageRef=  ref(storage,filename);
  const UploadTask=  uploadBytesResumable(storageRef,file);   


  UploadTask.on('state_changed' ,
  (snapshot)=>{

    const progress=(  snapshot.bytesTransfarred / snapshot.totalBytes)*100;

    console.log('upload is'+ progress+ '%done');
  } ,
  
  
  
  
  )
}



  return (
    <div className="p-3 max-w-lg mx-auto "><h1  className="text-3xl font-semibold  my-7  text-center">Profile</h1>
    
    <form className="flex flex-col">
<input   onChange={(e)=>setFile(e.target.files[0])} type="file"  ref={fileRef} hidden accept="image/*" />
      <img   onClick={()=>fileRef.current.click()}src={currentUser.avatar}  alt="userprofile_img"   
      className="rounded-full  object-cover h-24 w-24 cursor-pointer   self-center mt-2"/>
      <input type="text" id="username"  placeholder="username" className="p-3 border rounded-lg" />
      <input type="email" id="email"  placeholder="name" className="p-3 border rounded-lg" />
      <input type="text" id="password"  placeholder="password" className="p-3 border rounded-lg" />
      <button className="text-red-600 text-white rounded-lg  
      p-3 uppercase hover:opacity-95  disabled:opacity-80">Update</button>
      </form>
      
      <div className="flex justify-between mt-5"><span className="text-red-600 cursor-pointer">Delete Account</span>
      <span className="text-red-600 cursor-pointer">Sign Out</span>
        </div></div>
  )
}

export default Profile


*/