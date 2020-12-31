import React, { useContext, useState } from "react";
import { LangContext } from '../shared/LangContext';
import { ThemeContext } from '../shared/ThemeContext';
import { HomeContext } from '../shared/HomeContext'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { ReactComponent as Logo } from './logo-navbar-white.svg'

const Navigation = () => {
	const { inEnglish, toggleLang } = useContext(LangContext);
	const { theme, setTheme } = useContext(ThemeContext);
	

	return (
		<Navbar expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="">
				<Logo style={{ height: 40, width: 100 }} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Link
						href=""
						className={inEnglish && "disabled"}
						onClick={toggleLang}
					>
						EN
					</Nav.Link>
					/
					<Nav.Link
						href=""
						className={!inEnglish && "disabled"}
						onClick={toggleLang}
					>
						ES
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link
						href=""
						className={(theme === "light" && "disabled")}
						onClick={()=>setTheme("light")}
					>
						LIGHT
					</Nav.Link>
					/
					<Nav.Link
						href=""
						className={(theme === "dark" && "disabled")}
						onClick={()=>setTheme("dark")}
					>
						DARK
					</Nav.Link>
					<Nav.Link
						href=""
						className={(theme === "neon" && "disabled")}
						onClick={()=>setTheme("neon")}
					>
						NEON
					</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					<Nav.Link key="home" href="">
						{inEnglish ? "Home" : "Inicio"}
					</Nav.Link>
					<Nav.Link key="about" href="">
						{inEnglish ? "About Me" : "Sobre Mí"}
					</Nav.Link>
					<Nav.Link key="projects" href="">
						{inEnglish ? "Projects" : "Proyectos"}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
//<div onClick={toggleLang}>PEPI</div>;