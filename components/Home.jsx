"use client"
import Image from 'next/image'
import VideoHistory from "@components/VideoHistory"
import VideoComponent from "@components/VideoComponent"
import VideoGeneration from "@components/VideoGeneration"
import {useSelector} from 'react-redux'
import {useState,useEffect} from "react"

const HomeComponent=()=>{
	const [isGenerating,setIsGenerating]=useState(false);
	const [isGenerated,setIsGenerated]=useState(false);
	const [text,setText]=useState("");
	const [currVideo,setCurrVideo]=useState({});
	const isLoggedIn=useSelector(state=>state.user)?.isLoggedIn;
	const videoHistory=useSelector((state)=>state.video.videoData);
	useEffect(()=>{
		if(!isLoggedIn){
			window.location="/login";
		}
	},[])


	useEffect(()=>{
		setCurrVideo(videoHistory[3]);
	},[]);


	return (
		<>
	    <section className="history">
	      <header>
	        <Image
	          src="/assets/history.svg"
	          height={40}
	          width={40}
	          alt="history"
	        /> 
	        <p>History</p>
	      </header>
	      <div className="container">
	      	{
	      		videoHistory.map((el)=>{
	      			return <VideoHistory
	      			key={new Date(el.date).getTime()} 
	      			onClick={()=>{
	      				setCurrVideo(el);
	      				setIsGenerated(true);
	      			}} 
	      			prompt_text={el.title} date={el.date}
	      			/>;
	      		}
	      		)
	      	}
	      </div>
	    </section> 
	    <section className="generation">
	      <header>
	        <Image
	          src="/assets/video_call.svg"
	          height={40}
	          width={40}
	          alt="video"
	          onClick={()=>{
	          	setIsGenerated(false);
	          	setText("");
	          }}
	        /> 
	        <p>Video Generation</p>
	      </header>
	      {
	      	isGenerated ? <VideoComponent
	      		setIsGenerated={setIsGenerated}
	      		text={text}
	      		video={currVideo}
	      	/>
	      	:
	      	<VideoGeneration 
	      		isGenerating={isGenerating}
	      		setIsGenerating={setIsGenerating}
	      		setIsGenerated={setIsGenerated}
	      		text={text}
	      		setText={setText}
	      		/>
	      }
	          
	      </section> 
		</>
	);
}


export default HomeComponent;