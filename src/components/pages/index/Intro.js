import React, { useContext, useState, useEffect}from 'react';
import { LangContext } from '../../shared/LangContext'
import { ThemeContext } from "../../shared/ThemeContext";


const Intro = ({
				textHeroEn,
				textHeroEs,
				descriptionEn,
				descriptionEs,
        }) => {
      
   
	const { inEnglish }  = useContext(LangContext)
	console.log(textHeroEn, );
    
    return (
			<section>
				<div>
					 <p>{inEnglish ? textHeroEn : textHeroEs}</p>
				</div>
				<p>{inEnglish ? descriptionEn : descriptionEs}</p>
			</section>
		);
};

export default Intro;
