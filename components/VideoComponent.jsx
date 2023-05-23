import Image from 'next/image'
import {useState} from 'react'

const VideoComponent =({video,setIsGenerated,text})=>{
	const [isPlaying,setIsPlaying]=useState(true);
	const [isCopied,setIsCopied]=useState(false);

	return	<div className="container">
		{(!isPlaying)?
			<div className="video_placeholder">
				<Image onClick={()=>{
					setIsPlaying(true);
				}} className="control_play" src="/assets/play.svg" height={40} width={40} alt="play" />
			</div>
			:
			<Image onClick={()=>{
				setIsPlaying(false);
			}} className="video_player" src={video.src} height={200} width={200} alt="video" />
		}
		<p className="txt_info">"{video.title}"</p>
		<div className="button_container">
	          <a download href={video.src} className="event__button btn_download" onClick={
	          	()=>{}
	          }>
	            <p>Download</p> 
	            <Image
	              src={"/assets/download.svg"}
	              height={30}
	              width={30}
	              alt="download"
	            /> 
	          </a>
	          <div className="event__button btn_customize" onClick={
	          	()=>{
	          		setIsGenerated(false);
	          	}
	          }>
	            <p>Customize</p> 
	            <Image
	              src={"/assets/customize.svg"}
	              height={30}
	              width={30}
	              alt="customize"
	            /> 
	          </div>
	          <div className="event__button btn_share" onClick={
	          	()=>{
	          		navigator.clipboard.writeText(`http://localhost:3007${video.src}`);
	          		setIsCopied(true);
	          		setTimeout(()=>{
	          			setIsCopied(false);
	          		},5000);
	          	}
	          }>
	            <p>Copy URL</p> 
	            <Image
	              src={ isCopied ? "/assets/okay.svg" : "/assets/link.svg"}
	              height={30}
	              width={30}
	              alt="share"
	            /> 
	          </div>
		</div>

	</div>
}

export default VideoComponent;