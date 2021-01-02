import React, { useContext } from "react";
import { LangContext } from "../../shared/LangContext";
import { ThemeContext } from "../../shared/ThemeContext";

import ProjectCard from './ProjectCard'

const Projects = ({ projects }) => {
    const { inEnglish } = useContext(LangContext);

	return (
		<section>
			<h2>{inEnglish ? "Projects" : "Proyectos"}</h2>
			{projects.map((project) => (
				<ProjectCard {...project} />
			))}
		</section>
	);
};

export default Projects;
