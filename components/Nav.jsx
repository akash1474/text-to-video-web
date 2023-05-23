'use-client'

import {useSelector,useDispatch} from 'react-redux'
import {selectUser,logout} from '@app/global_redux/features/userSlice'
import Image from "next/image"
import Link from "next/link"

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
					src="/users/user1.jpg"
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