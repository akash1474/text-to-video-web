import "@styles/global.css"
import "@styles/home.css"
import "@styles/login.css"
import NavBar from "@components/Nav"
import Providers from "./global_redux/provider"

export const metadata={
	title:"Text To Video Generation",
	discription:"Generate and Customize Video from textual description"
};

const RootLayout=({children})=>{
	return (
		<html lang="en">
			<head>
			<link rel="icon" href="/assets/video_logo.svg" sizes="any" />
			</head>
			<body>
				<main className="app">
					<Providers>
						<NavBar />
						{children}
					</Providers>
				</main>
			</body>
		</html>
	);
};


export default RootLayout;
