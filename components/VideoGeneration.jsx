"use client"
import Image from 'next/image'
const VideoGeneration=({isGenerating,setIsGenerated,setIsGenerating,text,setText})=>{
	return <div className="container">
	          <textarea value={text} onChange={(e)=>{setText(e.target.value);}} noresize="true" placeholder="Video Discription">
	          </textarea>
	          <div className="event__button gen_video" onClick={
	          	()=>{
	          		if(text.length <=0){
	          			alert("Please enter video description!");
	          			return;
	          		}
	          		setIsGenerating(true);
	          		setTimeout(()=>{
	          			setIsGenerating(false);
	          			setIsGenerated(true);
	          		},3000);
	          	}
	          }>
	            <p>{isGenerating ? "Generating":"Generate Video"}</p> 
	            <Image
	              src={isGenerating ? "/assets/spinner.svg":"/assets/send.svg"}
	              height={30}
	              width={30}
	              alt="video"
	            /> 
	          </div>
	    </div>
}

export default VideoGeneration;