



import User from '../Models/User.Model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../Utils/error.js';

import jwt from 'jsonwebtoken';


export  const SignUp=  async(req,res,next)=>{



   const {username,email,password}= req.body;
   const hashedPassword= bcryptjs.hashSync(password,10);
   const newUser= new User({username,email,password:hashedPassword});





   try{
    await  newUser.save();
    res.status(201).json( "User Created Successfully");

   }catch(error){
next(error);
   }

}

/// SignIn 

export const SignIn=async(req,res,next)=>{


   const {email,password}= req.body;

   try{
      const ValidUser= User.findOne({ email  });
      if(!ValidUser) return next(errorHandler(404, "User Not Found!"));
      
      const ValidPassword= bcryptjs.compareSync(password, ValidUser.password);
      
      if(!ValidPassword) return next(errorHandler(401, "Wrong Credentials!"));
      
      const token= jwt.sign({id: ValidUser._id}, process.env.JWT_SECRET);
      res.cookie('access_token',  token, {httpOnly:true } ).status(200).json(ValidUser);


      const {password: pass ,  ...rest} = ValidUser._doc;
      
      
      
      
      
      
         }catch(error){
      
      
            next(error);
         }
}


// Sign in With Google

export   const  Google=async(req,res,next)=>{



   try{

const user= await User.findOne({ email:  req.body.email })
if(user){

const token= jwt.sign({id: ValidUser._id}, process.env.JWT_SECRET);


const {password: pass ,  ...rest} = ValidUser._doc;

res.cookie('access_token',  token, {httpOnly:true } ).status(200).json(rest);

}else{

const generedPassword= Math.random().toString(36).slice(-8)+ Match.random().toString(36).slice(-8);

const hashedPassword= bcryptjs.hashSync(generetedPassword, 10);
const newUser= new User({username: req.body.name.split("").join("").toLowerCase()+ 
 Math.random(). toString(36).slice(-4),
 email: req.body.email, password:hashedPassword  , avatar: req.body.photo});

 await newUser.save();
 const token= jwt.sign({id: ValidUser._id}, process.env.JWT_SECRET);


const {password: pass ,  ...rest} = ValidUser._doc;

res.cookie('access_token',  token, {httpOnly:true } ).status(200).json(rest);
}
   }catch(error){

console.log(error);
   }
}