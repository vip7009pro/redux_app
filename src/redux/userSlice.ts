import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "nguyen van hung",
    age: "20",
    about: " software engineer",
    avatar: "avatar url",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
