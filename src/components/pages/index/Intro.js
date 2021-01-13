import React, { useContext, useState, useEffect } from "react";
import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";

import { ReactComponent as HeroJavi } from "./hero-javi.svg";
import { ReactComponent as HeroDe } from "./hero-de.svg";
import { ReactComponent as HeroSalas } from "./hero-salas.svg";

const Intro = ({ textHeroEn, textHeroEs, descriptionEn, descriptionEs }) => {
	const { inEnglish } = useContext(LangContext);

	return (
		<section className="intro">
			<div className="intro__hero">
				<HeroJavi className="intro__hero__item intro__hero__item--javi" />
				<HeroDe className="intro__hero__item intro__hero__item--de" />
				<HeroSalas className="intro__hero__item intro__hero__item--salas" />
				<p className="intro__hero__text">
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
