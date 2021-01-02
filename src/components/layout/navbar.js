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
				<Nav className="ml-auto">
					<Nav.Item className="ml-auto">
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
					</Nav.Item>

					<Nav.Item>
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
					</Nav.Item>
					<Nav.Item>
						<Nav.Link key="home" href="">
							{inEnglish ? "Home" : "Inicio"}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link key="about" href="">
							{inEnglish ? "About Me" : "Sobre Mí"}
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link key="projects" href="">
							{inEnglish ? "Projects" : "Proyectos"}
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
//<div onClick={toggleLang}>PEPI</div>;