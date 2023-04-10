import React, { useState } from 'react';
import HeaderBodyOne from '../HeaderBodyOne/HeaderBodyOne';
import { useLoaderData } from 'react-router-dom';
import './ContentInfo.css';
import JobCategory from '../JobCategories/JobCategory';
import JobFeature from '../JobFeature/JobFeature';

const ContentInfo = () => {
    const jobInfo = useLoaderData();
    const jobCategories = jobInfo.job_category;
    const featuredJob = jobInfo.featured_job;
    const [featured,setFeatured] = useState(featuredJob);
    const [showAllFeature, setShowAllFeature] = useState(false);
    
    const featureToPass = showAllFeature ? featured : featured.slice(0,4);

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
            <div className='category-section'>
                <h2 className="category-header">Featured Jobs</h2>
                <p className='category-pera'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='featured'>
                   {
                    featureToPass.map(feature =><JobFeature
                    key={feature.id}
                    feature={feature}
                    ></JobFeature>)
                   }
                </div>
            </div>
            {
              !showAllFeature && (
                <button className='button btn-all' onClick={() => setShowAllFeature(true)}>Show All Items</button>
              ) 
            }
        </div>
    );
};

export default ContentInfo;

