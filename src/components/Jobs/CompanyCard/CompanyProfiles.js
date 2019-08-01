import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from './CompanyCard';


// GET /api/company/id Returns a Company Profile (id + jobs available).
// We have an id #, name, email, about, location, profileImg available for rendering

export default function CompanyProfiles(props) {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
            //.get axios get request here 
            axios.get(`https://jobdroom.herokuapp.com/api/company/`, {
                headers: {
                    Authorization:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0cmFjaWVAZW1haWwuY29tIiwiaXNDb21wYW55IjpmYWxzZSwiaWF0IjoxNTY0NjcxODgzLCJleHAiOjE1NjUyNzY2ODN9.YhvkaBj2RnZVoqzder_enyuw2D7tsTZd0wqO08VbpH8'
                  }
            })
                .then(results => {
                    setCompanies(results.data);
                })
                .catch(error => {
                    console.log("Check your work", error);
                });
    }, [])

    console.log('Companies Available: ', companies);

    // useEffect(() => {
    //     axios.get(`https://jobdroom.herokuapp.com/api/company/id`)
    //         .then(results => {
    //             setCompanies(results.data)
    //         })
    //         .catch(error => {
    //             console.log("Check your work", error);
    //         })
    // }, [])

    // console.log('More information on our companies ', companies)

    return (
        <div className="company-list">
        {companies.map(company => (
            <CompanyCard key={company.name} company={company} />
        ))}
        </div>
    )
}