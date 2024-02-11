


import mongoose from 'mongoose';

const UserSchema= new mongoose.Schema({



    username:{

        type:String,
        required:true,
        unique:true,



    },


    email:{

        type:String,
        required:true,
        unique:true,



    },
    password:{

        type:String,
        required:true,
   



    },
    avatar:{

        type:String,
        default: " data:image/png;base64,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",

    }


},{timestamps:true});


const User=mongoose.model("User",UserSchema);

export default User;