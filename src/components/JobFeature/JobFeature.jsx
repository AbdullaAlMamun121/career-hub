import React from 'react';
import './JobFeature.css';
import { FaLocationArrow,FaRegMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const JobFeature = ({ feature }) => {
    const {id, title, salary,city, location, employment_type, logo, company_name
    } = feature;
    return (
        <>
            <div className='featured-section'>
                <img src={logo} alt="logo"/>
                <h2 className='featured-header'>{title}</h2>
                <p className='company'>{company_name}</p>
                <div className='featured-job-type'>
                    <button>{location}</button>
                    <button>{employment_type}</button>
                </div>
                <div className='job-location'>
                    <p>
                        <span><FaLocationArrow /></span> 
                        <span>{city}</span> 
                    </p>
                    <p><FaRegMoneyBillAlt />{salary}</p>
                </div>
                <Link to={`/featured_details/${id}`} className='featured-details'>Details</Link>
            </div>
        </>
    );
};

export default JobFeature;