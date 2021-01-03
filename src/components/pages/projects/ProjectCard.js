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
		<article>
			<h4>{projectName}</h4>
			<p>
				{stack.map((tech) => (
					<span>{tech}</span>
				))}
			</p>
			<img srcSet={projectPic.srcSet} alt={projectPic.alt} />
			<p>{inEnglish ? descriptionEn : descriptionEs}</p>
			<a href={githubLink}>Github</a>
			<a href={projectLink}> {inEnglish ? 'Project' : 'Proyecto'} </a>
		</article>
	);
	
	}
	

export default ProjectCard;


