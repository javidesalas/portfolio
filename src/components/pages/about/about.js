import React, {useContext, useEffect} from 'react';

import { LangContext } from '../../shared/LangContext';
import useAbout from "../../shared/useAbout";
import Fader from "../../shared/Fader";


const About = () => {
    const content = useAbout()
    const { aboutEn, aboutEs, aboutPic } = content
	const { inEnglish } = useContext(LangContext)
	
		useEffect(() => {
			const heroes = document.querySelectorAll(".reveal");
			heroes.forEach((hero) => hero.classList.add("visible"));
		});
	
    return (
			<div className="about">
				{content && (
					<>
						<Fader customClasses="about__pic" direction="fadeInLeft">
							<img srcSet={aboutPic.srcSet} alt={aboutPic.alt} />
						</Fader>
						<Fader
							customClasses="about__background"
							direction="fadeInLeft--AboutBg"
						></Fader>
						<Fader
							customClasses="about__title__container"
							direction="fadeInRight"
						>
							<h2 className="about__title">
								{inEnglish ? (
									<>
										<span className="about__title__span about__title__span--dmd">
											Developer. Marketer. Designer.
										</span>
										<span> This is me.</span>
									</>
								) : (
									<>
										<span className="about__title__span about__title__span--dmd">
											Desarrollador. Marketer. Diseñador.
										</span>
										<span> Quién soy.</span>
									</>
								)}
							</h2>
						</Fader>
						<article
							className="about__text"
							dangerouslySetInnerHTML={{
								__html: inEnglish ? aboutEn : aboutEs,
							}}
						></article>
					</>
				)}
			</div>
		);
};

export default About;