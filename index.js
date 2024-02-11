


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();



import userRouter from './Routes/user.route.js';
import authRouter from './Routes/auth.route.js';
const app =express();
app.use(express.json());






mongoose.connect(process.env.MONGO_URI).then(()=>{


    console.log("Mongodb Connected Successfully");
}).catch((error)=>{

    console.log(error);
})




app.listen(5080,()=>{


    console.log("Server Is Running On Port 5080")
});


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req,res, next)=>{


const statusCode= err.statusCode || 500;

const message= err.message || 'Internal Server Error';

return res.status(statusCode).json({ 


    success:false,
    statusCode,
    message, 
 }) ;
})
