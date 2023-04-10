import React from 'react';
import HeaderBodyOne from '../HeaderBodyOne/HeaderBodyOne';
import { useLoaderData } from 'react-router-dom';
import './ContentInfo.css';
import JobCategory from '../JobCategories/JobCategory';

const ContentInfo = () => {
    const jobInfo = useLoaderData();
    const jobCategories = jobInfo.job_category;
    // console.log(jobInfo.job_category);
    return (
        <div>
            <HeaderBodyOne></HeaderBodyOne>
            <div className='category-section'>
                <h2 className="category-header">Job Category List</h2>
                <p className='category-pera'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='categories'>
                    {
                        jobCategories.map(jobCategory => <JobCategory
                            key={jobCategory.id}
                            jobCategory={jobCategory}
                        >
                        </JobCategory>)
                    }
                </div>
            </div>
            <div>
                <h2>Featured Jobs</h2>
            </div>
        </div>
    );
};

export default ContentInfo;