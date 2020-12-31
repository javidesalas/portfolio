import React, { createContext, useState } from "react";
import { useQuery } from "graphql-hooks";
import { LangContext } from "./LangContext";
import useHomepage from "./useHomepage";

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

export const HomeContext = createContext(null);

const HomeProvider = ({ children }) => {
    const { loading, error, data } = useQuery(homeQuery);
    const [homeContent, setHomeContent] = useState(null)
    
    if (data) {
        const homepageContent = {
            textHeroEn: data.home.textHeroEn,
            textHeroEs: data.home.textHeroEs,
            descriptionEs: data.home.descriptionEs,
            descriptionEn: data.home.descriptionEn,
            devEn: data.home.devEn,
            devEs: data.home.devEs,
            designEn: data.home.designEn,
            designEs: data.home.designEs,
            marketingEn: data.home.marketingEn,
            marketingEs: data.home.marketingEs,
            github: data.home.github,
            twitter: data.home.twitter,
            phone: data.home.phone,
            mailto: data.home.mailto,
            linkedin: data.home.linkedin,
        }
        setHomeContent(homepageContent);
    }

    return (
        data
        ?
		<HomeContext.Provider value={homeContent}>{children}</HomeContext.Provider>
            :
            <>{ children }</>   
        );
        
    };
    export default HomeProvider;
    