import React from 'react';
import './HeaderBodyOne.css'
const HeaderBodyOne = () => {
    return (
        <div>
            <header className="header-body ">
                <div className="header-section text-section mt-5">
                    <h1>One Step Closer To Your <span className='dream-text'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='get-start'>Get started</button>
                </div>
                <div className="header-section image-section">
                    <img src="All-Images/P3OLGJ1 copy 1.png" alt="banner" />
                </div>
            </header>
        </div>
    );
};

export default HeaderBodyOne;