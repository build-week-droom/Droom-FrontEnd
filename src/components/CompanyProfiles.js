import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from './CompanyCard';



// GET /api/company/id Returns a Company Profile (id + jobs available).
// We have an id #, name, email, about, location, profileImg available for rendering

export default function CompanyProfiles(props) {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        const getCompanies = () => {
            //.get axios get request here 
            axios.get(`https://jobdroom.herokuapp.com/api/company`, {
                headers: {        
                    Authorization: 
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0cmFjaWVAZW1haWwuY29tIiwiaXNDb21wYW55IjpmYWxzZSwiaWF0IjoxNTY0NTIwNjAxLCJleHAiOjE1NjQ2MDcwMDF9.ClC2Lihj_1VP5O0Af-HQeIqwkLEGi-U8xZahILInXEc"
                    }
                })
                .then(results => {
                    setCompanies(results.data);
                })
                .catch(error => {
                    console.log("Check your work", error);
                });
        }
    }, []);

    console.log('Companies Available: ', companies);

    useEffect(() => {
        axios.get(`https://jobdroom.herokuapp.com/api/company/id`, {
            headers: {
                Authorization: 
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0cmFjaWVAZW1haWwuY29tIiwiaXNDb21wYW55IjpmYWxzZSwiaWF0IjoxNTY0NTIwNjAxLCJleHAiOjE1NjQ2MDcwMDF9.ClC2Lihj_1VP5O0Af-HQeIqwkLEGi-U8xZahILInXEc"
                }
            })
            .then(results => {
                setCompanies(results.data)
            })
            .catch(error => {
                console.log("Check your work", error);
            })
    }, [])

    console.log('More information on our companies ', companies)

    return (
        <div className="company-list">
        {companies.map(company => (
            <CompanyCard key={company.name} about={company.about} />
        ))}
        </div>
    )
}