import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'

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