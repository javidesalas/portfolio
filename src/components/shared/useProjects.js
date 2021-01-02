import React from 'react';
import { useQuery } from 'graphql-hooks'

const projectsQuery = `query projectsQuery {
  allProjects {
    projectName
    stack
    projectLink
    githubLink
    featured
    descriptionEs
    descriptionEn
    projectPic {
      responsiveImage {
        alt
        srcSet
      }
    }
  }
}

`;

const useProjects = () => {
    
    const { loading, error, data } = useQuery(projectsQuery)
    
    if (loading) return false
    if (error) return false
    
  const projectsContent = data.allProjects.map(elm => ({
    projectName: elm.projectName,
    stack: elm.stack,
    projectLink: elm.projectLink,
    githubLink: elm.githubLink,
    featured: elm.featured,
    descriptionEs: elm.descriptionEs,
    descriptionEn: elm.descriptionEn,
    projectPic: elm.projectPic

  }))
 
    return projectsContent;
};

export default useProjects;