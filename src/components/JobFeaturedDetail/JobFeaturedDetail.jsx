import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    return (
        <div>
            <h3>Featured Job Details</h3>
            {isLoading ? (
                <p>Loading job details...</p>
            ) : jobToDisplay ? (
                <div>
                    <h4>{jobToDisplay.title}</h4>
                    <p>{jobToDisplay.description}</p>
                </div>
            ) : (
                <p>No job found with ID {id}</p>
            )}
        </div>
    );
};

export default JobFeaturedDetail;
