"use client"
import Image from 'next/image'


const VideoHistory=({onClick,prompt_text,date})=>{

	return (
		<div className="videoHistory">
			<main onClick={onClick} className="video_info">
				<Image 
					src="/assets/video_file.svg"
					height={35}
					width={35}
					alt="video_file"
				/>
				<p className="text">{prompt_text}</p>
			</main>	
			<div className="time">
				{date}
			</div>
		</div>
	);
};

export default VideoHistory;