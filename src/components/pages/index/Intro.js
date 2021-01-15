import React, { useContext, useState, useEffect } from "react";
import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";

import { themer } from "../../shared/helpers";

import { ReactComponent as HeroJavi } from "./hero-javi.svg";
import { ReactComponent as HeroDe } from "./hero-de.svg";
import { ReactComponent as HeroSalas } from "./hero-salas.svg";

const Intro = ({ textHeroEn, textHeroEs, descriptionEn, descriptionEs }) => {
	const { inEnglish } = useContext(LangContext);
	const { theme } = useContext(ThemeContext)

	return (
		<section className="intro">
			<div className="intro__hero">
				<HeroJavi
					className={themer(
						"intro__hero__item intro__hero__item--javi",
						"intro__hero__item",
						theme
					)}
				/>
				<HeroDe
					className={themer(
						"intro__hero__item intro__hero__item--de",
						"intro__hero__item",
						theme
					)}
				/>
				<HeroSalas
					className={themer(
						"intro__hero__item intro__hero__item--salas",
						"intro__hero__item",
						theme
					)}
				/>
				<p className={themer("intro__hero__text", "intro__hero__text", theme)}>
					{inEnglish ? textHeroEn : textHeroEs}
				</p>
			</div>
			<div className="intro__description">
				<article className="intro__description__text">
					{inEnglish ? descriptionEn : descriptionEs}
				</article>
				<div className="intro__description__background"></div>
			</div>
		</section>
	);
};

export default Intro;
