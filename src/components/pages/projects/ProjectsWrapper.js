import React from "react";
import useProjects from "../../shared/useProjects";

import Projects from "../projects/Projects";

const ProjectsWrapper = () => {
	const projects = useProjects();
	console.log(projects);
	console.log(typeof projects);
	return (
		<>
			{projects && (
				<>
					<Projects projects={projects} keyPrefix={'feat'}/>
				</>
			)}
		</>
	);
};

export default ProjectsWrapper;
