import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDb';
import HeaderBodyTwo from '../HeaderBodyTwo/HeaderBodyTwo';
import { Button, Card } from 'react-bootstrap';
import { FaLocationArrow, FaRegMoneyBillAlt } from 'react-icons/fa';

const AppliedJob = () => {
    const jobInfo = useLoaderData();
    const featuredJob = jobInfo.featured_job;
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        const appliedJob = getShoppingCart();
        let savedAppliedJob = [];
        for (const id in appliedJob) {
            const addedAppliedJob = featuredJob.find(job => job.id === parseInt(id));
            if (addedAppliedJob) {
                savedAppliedJob.push(addedAppliedJob);
            }
        }
        setFeatured(savedAppliedJob);
    }, [featuredJob]);

    return (
        <div>
            <HeaderBodyTwo>Applied Job</HeaderBodyTwo>
            {
                featured.map((featuredJob) => <Card style={{ width: '80rem', margin: '0 auto',marginBottom:'20px'}}>
                    <Card.Body >
                        <div className="row g-0">
                            <div className="col-md-2">
                                <Card.Img variant="top" src={featuredJob.logo} />
                            </div>
                            <div className="col-md-8">
                                <Card.Text>
                                    <h2 className='featured-header'>{featuredJob.title}</h2>
                                    <p className='company'>{featuredJob.company_name}</p>
                                    <div className='featured-job-type'>
                                        <button>{featuredJob.location}</button>
                                        <button>{featuredJob.employment_type}</button>
                                    </div>
                                    <div className='job-location'>
                                        <p>
                                            <span><FaLocationArrow /></span>
                                            <span>{featuredJob.city}</span>
                                        </p>
                                        <p><FaRegMoneyBillAlt />{featuredJob.salary}</p>
                                    </div>
                                </Card.Text>
                            </div>
                            <div className="col-md-2 mt-5">
                                <Link to={`/featured_details/${featuredJob.id}`}><Button variant="primary">See Details</Button></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>)

            }

        </div>
    );
};

export default AppliedJob;