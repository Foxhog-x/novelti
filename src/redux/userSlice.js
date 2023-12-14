 
import { createSlice } from "@reduxjs/toolkit";
  




 

const userSlice = createSlice({
    name: 'users',
    initialState:[],
    reducers:{
            addUser(state, action){
                state.push(action.payload)
                console.log(action.payload, "actionpayload")
            } 

                
            },
        
})


 

export const {addUser} = userSlice.actions;

export default userSlice.reducer



