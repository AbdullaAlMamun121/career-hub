import React from 'react';
import './JobCategory.css';
import { FaBeer } from 'react-icons/fa';

const JobCategory = ({jobCategory}) => {
    const {icon,name,available_jobs} = jobCategory;
    return (
        <div className='category'>
            <img src={icon}/>
            <h3>{name}</h3>
            <p>{available_jobs} Jobs Available</p>
        </div>
    );
};

export default JobCategory;