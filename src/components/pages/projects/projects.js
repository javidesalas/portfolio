import React, { useContext } from "react";
import { LangContext } from "../../shared/LangContext";

import ProjectCard from './ProjectCard'

const Projects = ({ projects}) => {
    const { inEnglish } = useContext(LangContext);
	
	return (
		<section className="projects">
			<h2 className="projects__title">
				{inEnglish ? "Projects" : "Proyectos"}
			</h2>
			<div className="projects__container">
				{projects.map((project,index) => (
					<ProjectCard {...project} key={project.projectName} index={index}/>
				))}
			</div>
		</section>
	);
};

export default Projects;
