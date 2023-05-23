"use client"
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("userData")) || {}: {},
    accounts: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("accounts")) || []: [],
    isLoggedIn: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("isLoggedIn")) || false : false,
  },
  reducers: {

    login: (state, actions) => {
      const data = {
        ...actions.payload,
      };
      if(state.accounts.length == 0 ){
        alert("Provided email doesn't match our database.");
        return;
      }
      const idx=state.accounts.findIndex((el)=>{
        return el.email===data.email;
      })
      if(idx===-1 || state.accounts[idx].password!==data.password){
        alert("Invalid User Credentials");
        return;
      }
      data.username=state.accounts[idx].username;
      state = {
        ...state,
        userData: data,
        isLoggedIn:true,
      };
      window.localStorage.setItem("userData", JSON.stringify(data));
      window.localStorage.setItem("isLoggedIn", true);
      console.log("LoggedIn Successfully");
      window.location="/";
    },


    signup: (state, actions) => {
      const data = {
        ...actions.payload,
      };
      if(data.email.length<=5 || data.username.length <=5 || data.password.length <=8 ){
        alert("Invalid User Credentials");
        return;
      }
      const idx=state.accounts.findIndex((el)=>{
        return el.email===data.email;
      })
      if(idx >=0){
        alert("User Already Exists! Try SigningIn");
        return;
      }
      let oldusers=state.accounts;
      oldusers.push(data);
      state = {
        userData: data,
        accounts:oldusers,
        isLoggedIn:true,
      };
      window.localStorage.setItem("userData", JSON.stringify(data));
      window.localStorage.setItem("accounts", JSON.stringify(oldusers));
      window.localStorage.setItem("isLoggedIn", true);
      console.log(state.userData);
      window.location="/";
    },


    logout: (state) => {
      console.log("Logged Out Successfully!");
      window.localStorage.removeItem("userData");
      window.localStorage.removeItem("isLoggedIn");
      state={
        ...state,
        isLoggedIn:false,
        userData:{}
      }
      window.location="/login";
    },
  },
});


export const {login,logout,signup} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
