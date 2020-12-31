import React from 'react';

import Navbar from './navbar'
import Footer from './footer'

const layout = props => {
    return (
        <>
            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />
        </>
    ); 
};

export default layout;