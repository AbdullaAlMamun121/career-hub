import React from 'react';
import './HeaderBodyTwo.css';
const HeaderBodyTwo = ({children}) => {
    return (
        <div className='mb-5'>
            <h3 className='header-title'>{children}</h3>
        </div>
    );
};

export default HeaderBodyTwo;