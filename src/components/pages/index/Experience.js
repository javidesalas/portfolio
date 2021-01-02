import React, { useContext } from "react";
import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";




const Experience = ({
                    devEn,
                    devEs,
                    designEn,
                    designEs,
                    marketingEn,
                    marketingEs,
        }) => {
    const { inEnglish } = useContext(LangContext);
    
    return (
			<section>
				<div>
					<span>{inEnglish ? "Development" : "Desarrollo"}</span>
					<span>Marketing</span>
					<span>{inEnglish ? "Design" : "Diseño"}</span>
				</div>
				<div>
					<article>{inEnglish ? devEn : devEs}</article>
					<article>{inEnglish ? marketingEs : marketingEn}</article>
					<article>{inEnglish ? designEn : designEs}</article>
				</div>
			</section>
		);

	
};

export default Experience;
