import { configureStore } from "@reduxjs/toolkit";
import addReducer from './redux/userSlice'


const store = configureStore({
    reducer:{
        allusers: addReducer
    }
})



export default store