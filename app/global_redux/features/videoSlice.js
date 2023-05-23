"use client"
import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoData: [
    {
      title:"a black cat running on a lawn with green grass",
      src:"/videos/cat_running.gif",
      date:new Date("2023-05-21 07:30 AM").toString()
    },
    {
      title:"an astronaut dancing with a spacesuit in space with planets in the background",
      src:"/videos/astronaut.gif",
      date:new Date("2023-05-19 07:30 PM").toString()
    },
    {
      title:"a brown horse running in a city street",
      src:"/videos/horse.gif",
      date:new Date("2023-05-17 11:30 PM").toString()
    },
    {
      title:"a deer drinking water from a river in the foreset",
      src:"/videos/deer.gif",
      date:new Date("2023-05-20 01:30 PM").toString()
    },
    {
      title:"a kid running in the playground",
      src:"/videos/kid_running.gif",
      date:new Date("2023-05-10 03:30 PM").toString()
    }
  ]
  },
  reducers: {
    insertVideo: (state, actions) => {
      const data = {
        ...actions.payload,
      };
      state.push(data);
    }
  },
});

export const { insertVideo } = videoSlice.actions;

export const selectVideo = (state) => state.video;

export default videoSlice.reducer;
