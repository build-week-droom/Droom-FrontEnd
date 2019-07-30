import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Company from './CompanyCard';
import { Card } from 'semantic-ui-react';


// GET /api/company/id Returns a Company Profile (id + jobs available).
// We have an id #, name, email, about, location, profileImg available for rendering


const CompanyProfiles = props => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        const getCompanies = () => {
            //.get axios get request here 
            axios.get(`https://jobdroom.herokuapp.com/api/company`, {
                headers: {        
                    Authorization: 
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0cmFjaWVAZW1haWwuY29tIiwiaXNDb21wYW55IjpmYWxzZSwiaWF0IjoxNTY0NTIwNjAxLCJleHAiOjE1NjQ2MDcwMDF9.ClC2Lihj_1VP5O0Af-HQeIqwkLEGi-U8xZahILInXEc"
                }})
                .then(results => {
                    setCompanies(results.data);
                    console.log(results.data)
                })
                .catch(error => {
                    console.log("Check your work", error);
                });
        }
    getCompanies();
}, []);

return (
    <div className="company-list">
        {companies.map(company => (
            <CompanyDetails key={company.name} about={company.about} />
        ))}
    </div>
    );
}

function CompanyDetails({ company }) {
    const { name, email, about, location } = company;
    return (
        <div>
            <Card name={name} email={email} about ={about} location={location} />
        </div>
    );
}

export default CompanyProfiles;