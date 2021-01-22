import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../shared/LangContext";
import { ThemeContext } from "../shared/ThemeContext";

import { themer } from "../shared/helpers";

const PageLinks = ({ placement }) => {
	const { inEnglish, toggleLang } = useContext(LangContext);
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<ul className={placement}>
			<li className="nav__item">
				<Link to="" key="home" className="nav__link">
					{inEnglish ? "Home" : "Inicio"}
				</Link>
			</li>
			<li className="nav__item">
				<Link to="about" key="about" className="nav__link">
					{inEnglish ? "About Me" : "Sobre Mí"}
				</Link>
			</li>
			<li className="nav__item">
				<Link to="projects" key="projects" className="nav__link">
					{inEnglish ? "Projects" : "Proyectos"}
				</Link>
			</li>

			<li className="nav__item">
				<span
					className={`nav__link ${inEnglish && "nav__link--disabled"}`}
					onClick={!inEnglish && toggleLang}
				>
					EN
				</span>
				/
				<span
					className={`nav__link ${!inEnglish && "nav__link--disabled"}`}
					onClick={inEnglish && toggleLang}
				>
					ES
				</span>
			</li>

			<li className="nav__item">
				{/* {inEnglish ? "Theme: " : "Tema: "} */}
				<span
					className={`nav__link ${theme === "light" && "nav__link--disabled"}`}
					onClick={() => setTheme("light")}
				>
					LIGHT
				</span>
				/
				<span
					className={`nav__link ${theme === "dark" && "nav__link--disabled"}`}
					onClick={() => setTheme("dark")}
				>
					DARK
				</span>
				/
				<span
					className={`nav__link ${theme === "neon" && "nav__link--disabled"}`}
					onClick={() => setTheme("neon")}
				>
					NEON
				</span>
			</li>
		</ul>
	);
};

export default PageLinks;
