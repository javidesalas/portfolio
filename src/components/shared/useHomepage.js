import React from 'react';
import { useQuery } from 'graphql-hooks'

const homeQuery = `query homeQuery {
  home {
    textHeroEn
    textHeroEs
    descriptionEs
    descriptionEn
    devEn
    devEs
    designEn
    designEs
    marketingEn
    marketingEs
    github
    twitter
    phone
    mailto
    linkedin
    logoNavbar {
      filename
      url
    }
  }
}`;

const useHomepage = () => {
    
    const { loading, error, data } = useQuery(homeQuery)
    
    if (loading) return false
    if (error) return false
    
  const homepageContent = {
    textHeroEn : data.home.textHeroEn,
    textHeroEs : data.home.textHeroEs,
    descriptionEs : data.home.descriptionEs,
    descriptionEn : data.home.descriptionEn,
    devEn : data.home.devEn,
    devEs : data.home.devEs,
    designEn : data.home.designEn,
    designEs : data.home.designEs,
    marketingEn : data.home.marketingEn,
    marketingEs : data.home.marketingEs,
    github : data.home.github,
    twitter : data.home.twitter,
    phone : data.home.phone,
    mailto : data.home.mailto,
    linkedin : data.home.linkedin,
  }
 
    return homepageContent
};

export default useHomepage;