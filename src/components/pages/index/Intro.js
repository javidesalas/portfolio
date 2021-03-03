import React, { useContext,  useEffect } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";

import { themer } from "../../shared/helpers";

import { ReactComponent as HeroJavi } from "./hero-javi.svg";
import { ReactComponent as HeroDe } from "./hero-de.svg";
import { ReactComponent as HeroSalas } from "./hero-salas.svg";

const Intro = ({ textHeroEn, textHeroEs, descriptionEn, descriptionEs }) => {
	const { inEnglish } = useContext(LangContext);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		const heroes = document.querySelectorAll(".reveal");
		heroes.forEach((hero) => hero.classList.add("visible"));
	},);

	return (
		<section className="intro">
			<div className="intro__hero">
				<HeroJavi
					className={themer(
						"intro__hero__item intro__hero__item--javi reveal fadeInRight",
						"intro__hero__item",
						theme
					)}
				/>
				<HeroDe
					className={themer(
						"intro__hero__item intro__hero__item--de reveal fadeIn",
						"intro__hero__item",
						theme
					)}
				/>
				<HeroSalas
					className={themer(
						"intro__hero__item intro__hero__item--salas reveal fadeInLeft",
						"intro__hero__item",
						theme
					)}
				/>
				<article className="intro__hero__text reveal fadeInRight">
					{inEnglish ? textHeroEn : textHeroEs}
				</article>
			</div>
			<div className="intro__description reveal fadeInLeft">
				<article className="intro__description__text">
					<div
						dangerouslySetInnerHTML={{
							__html: inEnglish ? descriptionEn : descriptionEs,
						}}
					></div>
					<p>
						<Link to="/about" className="intro__description__link">
							{inEnglish ? "A little more about me..." : "Algo más sobre mí"}
						</Link>
					</p>
				</article>
				<div className="intro__description__background"></div>
			</div>
		</section>
	);
};

export default Intro;
