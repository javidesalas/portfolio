import React, {useContext} from 'react';

import { LangContext } from '../../shared/LangContext';
import useAbout from "../../shared/useAbout";


const About = () => {
    const content = useAbout()
    const { aboutEn, aboutEs, aboutPic } = content
    const { inEnglish } = useContext(LangContext)
    return (
			<div className="about">
				{content && (
					<>
						<div className="about__pic">
							<img srcSet={aboutPic.srcSet} alt={aboutPic.alt} />
						</div>
						<div className="about__background"></div>
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