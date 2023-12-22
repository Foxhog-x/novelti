import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  usersData: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: uuidv4(),
        ...action.payload,
      };
      state.usersData.push(newUser);
      console.log(state);
    },

    deleteAllUser: (state, action) => {
      state.usersData = [];
    },
    deleteOneUser(state, action) {
      state.usersData = state.usersData.filter((val, i) => {
        return val.id !== action.payload;
      });
    },
    editUser: (state, action) => {},
  },
});

export const { addUser, deleteOneUser, deleteAllUser, editUser } =
  userSlice.actions;

export default userSlice.reducer;
