import React, { useContext, useState } from "react";
import {Link } from 'react-router-dom'
import { LangContext } from '../shared/LangContext';
import { ThemeContext } from '../shared/ThemeContext';
import { HomeContext } from '../shared/HomeContext'



import { ReactComponent as Logo } from './logo-navbar-white.svg'

const Navigation = () => {
	const { inEnglish, toggleLang } = useContext(LangContext);
	const { theme, setTheme } = useContext(ThemeContext);
	

	return (
		<div expand="lg" bg="dark" variant="dark">
			<div href="">
				<Logo style={{ height: 40, width: 100 }} />
			</div>
			<nav className="ml-auto">
					<div className="ml-auto">
						<span
							className={"nav-link" + inEnglish && "disabled"}
							onClick={toggleLang}
						>
							{" "}
							EN{" "}
						</span>
						/
						<span
							className={"nav-link" + !inEnglish && "disabled"}
							onClick={toggleLang}
						>
							{" "}
							ES{" "}
						</span>
					</div>

					<div>
						<span
							className={"nav-link" + (theme === "light") && "disabled"}
							onClick={() => setTheme("light")}
						>
							LIGHT
						</span>
						/
						<span
							className={"nav-link" + (theme === "dark") && "disabled"}
							onClick={() => setTheme("dark")}
						>
							DARK
						</span>
						/
						<span
							className={"nav-link" + (theme === "neon") && "disabled"}
							onClick={() => setTheme("neon")}
						>
							NEON
						</span>
					</div>
					<div>
						<Link key="home" href="">
							{inEnglish ? "Home" : "Inicio"}
						</Link>
					</div>
					<div>
						<Link key="about" href="">
							{inEnglish ? "About Me" : "Sobre Mí"}
						</Link>
					</div>
					<div>
						<Link key="projects" href="">
							{inEnglish ? "Projects" : "Proyectos"}
						</Link>
					</div>
				</nav>
			</div>
		
	);
};

export default Navigation;
//<div onClick={toggleLang}>PEPI</div>;