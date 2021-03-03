import React, { useContext } from "react";

import Fader from "../../shared/Fader";
import { LangContext } from "../../shared/LangContext";

const ProjectCard = ({
	projectName,
	stack,
	projectLink,
	githubLink,
	descriptionEs,
	descriptionEn,
	projectPic,
	index,
}) => {
	const { inEnglish } = useContext(LangContext);
	console.log(projectPic);
	return (
		<Fader
			customClasses="project"
			direction={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
		>
			<div className="project__pic">
				<img srcSet={projectPic.srcSet} alt={projectPic.alt} />
			</div>
			<Fader customClasses="project__text" direction="fadeInUp">
				<h3 className="project__text__title">{projectName}</h3>
				<p className="project__text__stack">
					{stack.map((tech) => (
						<span className="project__text__stack__item" key={tech}>
							{tech}
						</span>
					))}
				</p>
				<article
					className="project__text__description"
					dangerouslySetInnerHTML={{
						__html: inEnglish ? descriptionEn : descriptionEs,
					}}
				></article>
				<a href={githubLink} className="project__text__link">
					Github
				</a>
				<a href={projectLink} className="project__text__link">
					{" "}
					{inEnglish ? "Project" : "Proyecto"}{" "}
				</a>
			</Fader>
		</Fader>
	);
};

export default ProjectCard;
