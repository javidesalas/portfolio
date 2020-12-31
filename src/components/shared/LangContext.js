import React, { createContext, useState } from 'react';

export const LangContext = createContext(null)


const LangProvider = ({ children }) => {
    
    const [inEnglish, setInEnglish] = useState(false)

    const toggleLang = () => setInEnglish(!inEnglish)
    

    return (
        <LangContext.Provider value={{ inEnglish, toggleLang }}>
            { children }
        </LangContext.Provider>
    )
};
    
export default LangProvider

