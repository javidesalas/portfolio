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
				<Link
					key="home"
					href=""
					className={themer("nav__link", "nav__link", theme)}
				>
					{inEnglish ? "Home" : "Inicio"}
				</Link>
			</li>
			<li className="nav__item">
				<Link
					key="about"
					href=""
					className={themer("nav__link", "nav__link", theme)}
				>
					{inEnglish ? "About Me" : "Sobre Mí"}
				</Link>
			</li>
			<li className="nav__item">
				<Link
					key="projects"
					href=""
					className={themer("nav__link", "nav__link", theme)}
				>
					{inEnglish ? "Projects" : "Proyectos"}
				</Link>
			</li>

			<li className="nav__item">
				{/* {inEnglish ? "Language: " : "Idioma: "} */}
				<span
					className={`${themer("nav__link", "nav__link", theme)} ${
						inEnglish && "nav__link--disabled"
					}`}
					onClick={!inEnglish && toggleLang}
				>
					EN
				</span>
				/
				<span
					className={`${themer("nav__link", "nav__link", theme)} ${
						!inEnglish && "nav__link--disabled"
					}`}
					onClick={inEnglish && toggleLang}
				>
					ES
				</span>
			</li>

			<li className="nav__item">
				{/* {inEnglish ? "Theme: " : "Tema: "} */}
				<span
					className={`${themer("nav__link", "nav__link", theme)} ${
						theme === "light" && "nav__link--disabled"
					}`}
					onClick={() => setTheme("light")}
				>
					LIGHT
				</span>
				/
				<span
					className={`${themer("nav__link", "nav__link", theme)} ${
						theme === "dark" && "nav__link--disabled"
					}`}
					onClick={() => setTheme("dark")}
				>
					DARK
				</span>
				/
				<span
					className={`${themer("nav__link", "nav__link", theme)} ${
						theme === "neon" && "nav__link--disabled"
					}`}
					onClick={() => setTheme("neon")}
				>
					NEON
				</span>
			</li>
		</ul>
	);
};

export default PageLinks;
