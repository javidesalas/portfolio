import React from 'react';
import { useQuery } from 'graphql-hooks'

const aboutQuery = `query projectsQuery {
    aboutMe {
    aboutEn
    aboutEs
    photo {
      responsiveImage {
        srcSet
        alt
      }
    }
  }
}

`;

const useAbout = () => {
    
    const { loading, error, data } = useQuery(aboutQuery)
    
    if (loading) return false
    if (error) return false
    
  const aboutContent = {

		aboutEn: data.aboutMe.aboutEn,
		aboutEs: data.aboutMe.aboutEs,
		aboutPic: data.aboutMe.photo.responsiveImage
	};
 
    return aboutContent;
};

export default useAbout;