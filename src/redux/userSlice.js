 
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
  

const initialState = {
  usersData : []
}


  

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
            addUser(state, action){
                state.usersData.push(action.payload)
                console.log(action.payload, "actionpayload")
            },
            deleteOneUser(state, action){
                const index = action.payload
              state.usersData.splice(index, 1)
              //too much time spend fixing this beacuse of mistake that i made is setting up direct array state to initial state
                 console.log(index ,"index")
                
            },
            deleteAllUser(state, action){
              state.usersData.splice([]);
            }

                
            },
        
})


 

export const {addUser, deleteOneUser, deleteAllUser} = userSlice.actions;

export default userSlice.reducer



