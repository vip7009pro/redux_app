import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socket =  io('http://192.168.1.21:3005')
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

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
    update_socket: (state, action)=> {
      socket.emit('notification','redux emit');
    }
  },
});

export const { update,update_socket } = userSlice.actions;
export default userSlice.reducer;
