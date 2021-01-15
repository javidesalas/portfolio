import React, {useContext }from 'react';


import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";

const ProjectCard = ({
	projectName,
	stack,
	projectLink,
	githubLink,
	descriptionEs,
	descriptionEn,
	projectPic,
}) => {
	const { inEnglish } = useContext(LangContext);
	console.log(projectPic)
	return (
		
			<article className="project">
				<img
					className="project__pic"
					srcSet={projectPic.srcSet}
					alt={projectPic.alt}
				/>
				<div className="project__text">
				<h3 className="project__text__title">{projectName}</h3>
				<p className="project__text__stack">
					{stack.map((tech) => (
						<span className="project__text__stack__item" key={tech}>
							{tech}
						</span>
					))}
				</p>
				<p className="project__text__description">{inEnglish ? descriptionEn : descriptionEs}</p>
				<a href={githubLink} className="project__text__link">
					Github
				</a>
				<a href={projectLink} className="project__text__link">
					{" "}
					{inEnglish ? "Project" : "Proyecto"}{" "}
			</a>
			</div>
			</article>
		
	);

	
	}
	

export default ProjectCard;


