import React, { useContext } from "react";
import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";

import ProjectCard from './ProjectCard'

const Projects = ({ projects, keyPrefix }) => {
    const { inEnglish } = useContext(LangContext);
	const prefix = keyPrefix? keyPrefix : ''
	return (
		<section className="projects">
			<h2 className="projects__title">
				{inEnglish ? "Projects" : "Proyectos"}
			</h2>
			<div>
				{projects.map((project) => (
					<ProjectCard {...project} key={project.projectName} />
				))}
			</div>
		</section>
	);
};

export default Projects;
