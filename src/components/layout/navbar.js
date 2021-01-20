import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../shared/LangContext";
import { ThemeContext } from "../shared/ThemeContext";

import { themer } from "../shared/helpers";

import Sidebar from './Sidebar'
import PageLinks from './PageLinks'
import { ReactComponent as Logo } from "./logo-navbar-white.svg";
import { ReactComponent as Burger } from "./burger-white.svg";


const Navigation = () => {
	const { inEnglish, toggleLang } = useContext(LangContext);
	const { theme, setTheme } = useContext(ThemeContext);

	 useEffect(() => {
			const head = document.head;
		 let link = document.createElement("link");
		 
		 let stylePath 

		 switch (theme) {
				case "light":
					stylePath = "/css/main-light.css";
					break;
				case "dark":
					stylePath = "/css/main-dark.css";
					break;
			}

			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = `${process.env.PUBLIC_URL + stylePath}`
		 console.dir(stylePath)
		 
			head.appendChild(link);

			return () => {
				head.removeChild(link);
			};
		}, [theme]);

	const [showSidebar, setShowSidebar] = useState(false)
	const toggleSidebar = () => setShowSidebar(!showSidebar)

	return (
		<>
		<nav className="nav">
			<div className="nav__logo-box">
				<Link to="/" className="nav__item">
					<Logo className="nav__logo" />
				</Link>
			</div>
			<div className="nav__burger-box" onClick={toggleSidebar}>
				<Burger className="nav__burger" />
			</div>
<PageLinks placement="nav__link-box" />
			
			</nav>
			<Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
			</>
	);
};

export default Navigation;
//<div onClick={toggleLang}>PEPI</div>;
