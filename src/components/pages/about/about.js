import React, {useContext} from 'react';

import { LangContext } from '../../shared/LangContext';
import useAbout from "../../shared/useAbout";


const About = () => {
    const content = useAbout()
    const { aboutEn, aboutEs, aboutPic } = content
    const { inEnglish } = useContext(LangContext)
    return (
			<div>
				{content && (
					<>
						<img srcSet={aboutPic.srcSet} alt={aboutPic.alt} />
						<article
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