"use client"
import Image from 'next/image'
import VideoHistory from "@components/VideoHistory"
import VideoComponent from "@components/VideoComponent"
import VideoGeneration from "@components/VideoGeneration"
import {useDispatch} from 'react-redux'
import {insertVideo,removeVideo} from "@app/global_redux/features/videoSlice";
import {useSelector} from 'react-redux'
import {useState,useEffect} from "react"

const HomeComponent=()=>{
	const [isGenerating,setIsGenerating]=useState(false);
	const [isGenerated,setIsGenerated]=useState(false);
	const [isBookmarked,setIsBookmarked]=useState(false)
	const [text,setText]=useState("");
	const [currVideo,setCurrVideo]=useState({
      title:"a deer drinking water from a river in the foreset",
      src:"/videos/deer.gif",
      date:new Date().toString()
    });
	const isLoggedIn=useSelector(state=>state.user)?.isLoggedIn;
	const videoHistory=useSelector((state)=>state.video.videoData);

	useEffect(()=>{
		if(!isLoggedIn){
			window.location="/login";
			return;
		}
	},[]);

	useEffect(()=>{
		if(isBookmarked){
			dispatch(insertVideo({
				title:text,
				src:currVideo.src,
				date:new Date().toString()
			}));
		}
		if(!isBookmarked){
			dispatch(removeVideo({
				title:text,
				src:currVideo.src,
				date:new Date().toString()
			}));
		}
	},[isBookmarked])

	const dispatch=useDispatch();

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
	        {
	        	isGenerated ?
				<Image
					className="bookmark" 
					src={isBookmarked ? "/assets/bookmarked.svg" : "/assets/bookmark.svg"}
					height={30}
					width={30}
					alt="bookmark"
					onClick={()=>{
						setIsBookmarked((prev)=>!prev);
					}}
				/>
				:''
	        }
	      </header>
	      {
	      	isGenerated ? <VideoComponent
	      		setIsGenerated={setIsGenerated}
	      		text={text}
	      		video={currVideo}
	      		isBookmarked={isBookmarked}
	      		setIsBookmarked={setIsBookmarked}
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