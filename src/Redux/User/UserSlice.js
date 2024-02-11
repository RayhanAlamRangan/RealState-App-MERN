

import { createSlice} from "@reduxjs/toolkit";

const initialState={

    currentUser:null,
    error:null,
    loading:false,


};


const userSlice =  createSlice({


    name:"user",
    initialState,
    reducer:{

        signInStart:(state)=>{

            state.loading= true;
        },

        signInSuccess:(state,action)=>{

            state.currentUser= action.playload;
            state.loading=false;
            state.error=null;
        },
        signInFailur:(state,action)=>{

state.error=action.playload;
state.loading= false;

        }


    }


});

export const {signInStart, signInSuccess,signInFailur}= userSlice.actions;

export default userSlice.reducer;