import React from 'react';
import './HeaderBodyOne.css'
const HeaderBodyOne = () => {
    return (
        <div>
            <header className="header-body">
                <div className="header-section text-section">
                    <h1>One Step Closer To Your <span className='dream-text'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='get-start'>Get started</button>
                </div>
                <div className="header-section image-section">
                    <img src="https://as2.ftcdn.net/v2/jpg/04/23/15/69/1000_F_423156976_nrYxW2nD8KoQSIdRtyg0fbLmD6q4pNTT.jpg" alt="banner" />
                </div>
            </header>
        </div>
    );
};

export default HeaderBodyOne;