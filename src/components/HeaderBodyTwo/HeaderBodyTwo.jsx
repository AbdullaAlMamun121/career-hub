import React from 'react';
import './HeaderBodyTwo.css';
const HeaderBodyTwo = ({children}) => {
    return (
        <div>
            <h3 className='header-title'>{children}</h3>
        </div>
    );
};

export default HeaderBodyTwo;