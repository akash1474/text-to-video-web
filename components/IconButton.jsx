"use client"
import Image from "next/image"
const IconButton=({src,onClick})=>{

	return (
		<button className="iconButton"
			onClick={onClick}
		>
			<p>Create Video</p>
			<Image 
				src={src}
				height={30}
				width={30}
				alt={"button"}
			/>	
		</button>
	);
}


export default IconButton;