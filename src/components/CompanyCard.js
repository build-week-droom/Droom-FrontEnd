import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const Company = (props) => {

//     const [company, setCompany] = useState();
//     useEffect(() => {
//       const id = props.match.params.id;

//       const getCompany = id = {
//         axios.get(`https://jobdroom.herokuapp.com/api/company/id`                
//           headers: {        
//             Authorization: 
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0cmFjaWVAZW1haWwuY29tIiwiaXNDb21wYW55IjpmYWxzZSwiaWF0IjoxNTY0NTIwNjAxLCJleHAiOjE1NjQ2MDcwMDF9.ClC2Lihj_1VP5O0Af-HQeIqwkLEGi-U8xZahILInXEc"
//           })
//           .then(results => {
//             setCompany(results.data);
//           })
//           .catch(error => {
//             console.log("Check your work", error);
//           })
//       };
//       getCompany(id);
//     });

//     if (!company) {
//       return <div>Looking for Companies...</div>;
//     }
// };

// export default Company;