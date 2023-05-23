"use client"
import {logout,selectUser} from "@app/global_redux/features/userSlice.js"
import {useSelector,useDispatch} from 'react-redux'
import Image from "next/image"
import Link from "next/link"

function randomInt(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}

const NavBar=()=>{
	const user=useSelector(selectUser);
	const dispatch=useDispatch();
	return (
		<div className="nav">
			<section className="title_bar">
				<Image 
					src="/assets/video_logo.svg"
					height={40}
					width={40}
					alt="logo"
				/>	
				<p>Text To Video Generation</p>
			</section>
			{
				(user.isLoggedIn) ?
				<section className="user_info">
				<p>{user.userData.username}</p>
				<Image 
					src={`/users/user${randomInt(0,5)}.jpg`}
					height={40}
					width={40}
					alt="logo"
				/>
				<button onClick={()=>{
					dispatch(logout());
				}} className="btn_logout">Logout</button>
			</section>:''
			}
		</div>
	);
}

export default NavBar;