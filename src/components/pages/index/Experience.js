import React, { useContext, useState } from "react";
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
	const [courtain, setCourtain] = useState(false)

	const handleViewer = e => {
		const headers = Array.of(...document.querySelectorAll(".experience__header__item"));
		const container = document.querySelector(".experience__viewer__container")
			const viewers = Array.of(...document.querySelectorAll(".experience__viewer__container__item"))
		

		headers.forEach((elm) => elm.classList.remove("experience__header__item--active"));
		e.currentTarget.classList.add("experience__header__item--active");
		
		const transformation = `translateX(${parseInt(e.currentTarget.id) * -100}vw)`
		container.style.setProperty("transform", transformation);

		setCourtain(1)
		
		// viewers.forEach((elm) =>
		// elm.classList.add("experience__viewer__container__item--move")
		// );
		// viewers.forEach((elm) =>
		// 	elm.classList.remove("experience__viewer__container__item--move")
		// );
	}

	return (
		<section className="experience">
			<h2 className="experience__title">
				{inEnglish ? "Experience" : "Experiencia"}
			</h2>
			<div className="experience__lg-container">
				<div className="experience__header">
					<h3
						key="1"
						id="0"
						className="experience__header__item experience__header__item--dev"
						onClick={handleViewer}
					>
						{inEnglish ? "Development" : "Desarrollo"}
					</h3>
					<h3
						key="2"
						id="1"
						className="experience__header__item experience__header__item--marketing"
						onClick={handleViewer}
					>
						Marketing
					</h3>
					<h3
						key="3"
						id="2"
						className="experience__header__item experience__header__item--design"
						onClick={handleViewer}
					>
						{inEnglish ? "Design" : "Diseño"}
					</h3>
				</div>
				<div
					className="experience__viewer"
					courtain={courtain}
					onAnimationEnd={() => setCourtain(0)}
				>
					<div className="experience__viewer__container">
						<article className="experience__viewer__container__item">
							{inEnglish ? devEn : devEs}
						</article>
						<article className="experience__viewer__container__item">
							{inEnglish ? marketingEs : marketingEn}
						</article>
						<article className="experience__viewer__container__item">
							{inEnglish ? designEn : designEs}
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
