import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'

const layout = props => {
    return (
        <>
            <Navbar />
            <div className='content'>
                {props.children}
            </div>
            <Footer />
        </>
    ); 
};

export default layout;