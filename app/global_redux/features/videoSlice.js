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
      if(data.title.length==0){
        alert("Please provide a video description");
        return;
      }
      const copy=state.videoData;
      copy.unshift(data);
      state={
        ...copy
      }
    },

    removeVideo:(state,actions) =>{
      const data={
        ...actions.payload
      }

      const idx=state.videoData.findIndex((el)=>{
        return el.title===data.title;
      });

      if(idx===-1){
        return;
      }

      const copy=state.videoData;
      copy.splice(idx,1);
      state={
        ...copy
      }
    }
  },
});

export const { insertVideo,removeVideo } = videoSlice.actions;

export const selectVideo = (state) => state.video;

export default videoSlice.reducer;
