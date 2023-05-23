"use client"

import {useDispatch,useSelector} from 'react-redux'
import {login,signup} from '@app/global_redux/features/userSlice'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'


const LoginForm=()=>{
	const [username,setUsername]=useState("");
	const [password,setPassword]=useState("");
	const [email,setEmail]=useState("");
	const [isLogging,setIsLogging]=useState(true);
	const isLoggedIn = useSelector(state=>state.user)?.isLoggedIn;
	const dispatch=useDispatch();

	useEffect(()=>{
		if(isLoggedIn){
			window.location="/";
		}
	},[])


	return (
		<div className="LoginPage"
			onSubmit={(e)=>{
				e.preventDefault();
					if(isLogging){
						dispatch(login({email,password}))
					}else{
						dispatch(signup({email,username,password}))
					}
				}}
		>
		<Image 
				src={isLogging ? "/assets/login.svg" : "/assets/signup.svg"}
				height={450}
				width={450}
				alt="logo"
				className="login_vector"
		/>
		<form method="GET" className="LoginForm">
				<Image 
					src="/assets/user_shield.svg"
					height={50}
					width={50}
					alt="logo"
					className="login_logo"
				/>	
				<p className="login_title">{isLogging ? "Login" :"SignUp"}</p>
				<input placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
				{(!isLogging) ? <input placeholder="Username"  onChange={(e)=>{setUsername(e.target.value)}} type="text"/> : '' }
				<input placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
				<input onClick={()=>{
					if(isLogging){
						dispatch(login({email,password}))
					}else{
						dispatch(signup({email,username,password}))
					}
				}} text={isLogging ? "Login" :"Create Account"} className="event__button login" type="submit"/>
			    <div className="signup_prompt">
			        {isLogging ? "Don't Have An Account, Try " : "Already Have An Account, Try "}
			        <p onClick={()=>setIsLogging(prev=>!prev)} >{isLogging ? "SignUp" : "Login"}</p>
			    </div>
		</form>
		</div>
	);
};

export default LoginForm;