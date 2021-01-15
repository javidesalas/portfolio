import React from 'react';
import { Link } from 'react-router-dom'
import useHomepage from '../../shared/useHomepage';
import useProjects from "../../shared/useProjects";

import Intro from './Intro'
import Experience from './Experience'
import Projects from '../projects/Projects'

const Index = () => {
	const content = useHomepage()
	const projects = useProjects();
	let featuredProjects =[]
	if (Array.isArray(projects)) {
		featuredProjects = projects.filter((elm => elm.featured === true))
	}
	console.log(featuredProjects)
    return (
			<div>
				{content && (
					<>
						<Intro {...content} />
						<Experience {...content} />
					</>
				)}
				{featuredProjects && (
					<>
					<Projects projects={featuredProjects} keyPrefix={'feat'}/>
					</>
				)}
			</div>
		);
};

export default Index;