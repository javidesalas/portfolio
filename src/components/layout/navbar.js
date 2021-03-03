import React, { useState} from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
import PageLinks from "./PageLinks";
import { ReactComponent as Logo } from "./logo-navbar-white.svg";
import { ReactComponent as Burger } from "./burger-white.svg";

const Navigation = () => {
	
	const [showSidebar, setShowSidebar] = useState(false);
	const toggleSidebar = () => setShowSidebar(!showSidebar);

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