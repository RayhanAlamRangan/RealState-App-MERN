


import express from 'express';
import { SignIn, SignUp,Google  } from '../Controllers/Auth.Controller.js';



const router= express.Router();

router.post('/signup', SignUp);
router.post('/signin', SignIn);
router.post('/google' ,  Google);



export default  router;