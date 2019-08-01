import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from './CompanyCard';



export default function CompanyProfile() {
useEffect(() => {
    axios.get(`https://jobdroom.herokuapp.com/api/company`, {
        headers: {
        Authorization: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiakBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ1MDE0OTUsImV4cCI6MTU2NDU4Nzg5NX0.DzD1pDP9CJcTbrU2VbkOqCm6gnwoiBdb8UAb0PmUIsQ"
    }})
    .then(results => console.log(results.data));
    })
}
