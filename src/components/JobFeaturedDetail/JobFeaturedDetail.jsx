import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobFeaturedDetail.css';
import HeaderBodyOne from '../HeaderBodyOne/HeaderBodyOne';
import { addToDb } from '../../utilities/fakeDb';

const JobFeaturedDetail = () => {
    const { id } = useParams();
    const [featuredData, setFeaturedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedData = async () => {
            try {
                const response = await fetch('../../public/job-info.json');
                const data = await response.json();
                setFeaturedData(data.featured_job);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchFeaturedData();
    }, []);

    const jobToDisplay = featuredData.find(job => job.id === parseInt(id));
    const handleApplyJob = id =>{
        addToDb(id);  
    }
    return (
        <div>
            <HeaderBodyOne></HeaderBodyOne>
            {isLoading ? (
                <p>Loading job details...</p>
            ) : jobToDisplay ? (
                <div className='job-details'>
                    <div>
                        <p><strong>Job Description:</strong>{jobToDisplay.description}</p>
                        <p><strong>Job Responsibilities:</strong>{jobToDisplay.responsibilities}</p>
                        <p><strong>Education Requirements:</strong>{jobToDisplay.education_requirements}</p>
                        <p><strong>Education Requirements:</strong>{jobToDisplay.experience_requirements}</p>
                    </div>
                    <div>
                        <h3>Job Details</h3>
                        <p><strong>Salary:</strong>{jobToDisplay.salary}</p>
                        <p><strong>Job Title:</strong>{jobToDisplay.title}</p>
                        <h3>Contact Info</h3>
                        <p><strong>Phone:</strong>{jobToDisplay.phone}</p>
                        <p><strong>Email:</strong>{jobToDisplay.email}</p>
                        <p><strong>Address:</strong>{jobToDisplay.city}</p>
                        <button onClick={()=>handleApplyJob(id)} className='button'>Apply job</button>
                    </div>
                </div>
            ) : (
                <p>No job found with ID {id}</p>
            )}
        </div>
    );
};

export default JobFeaturedDetail;
