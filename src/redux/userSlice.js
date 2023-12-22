import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersData.push(action.payload);
    },

    deleteAllUser: (state, action) => {
      state.usersData = [];
    },
    deleteOneUser(state, action) {
      state.usersData = state.usersData.filter((val, i) => {
        return val.id !== action.payload;
      });
    },
  },
});

export const { addUser, deleteOneUser, deleteAllUser, editUser } =
  userSlice.actions;

export default userSlice.reducer;
