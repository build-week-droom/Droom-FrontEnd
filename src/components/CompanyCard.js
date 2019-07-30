import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Company = (props) => {

    const [company, setCompany] = useState();
    useEffect(() => {
      const id = props.match.params.id;

      const getCompany = id = {
        axios
          .get(`https://jobdroom.herokuapp.com/api/company/id`)
          .then(results => {
            setCompany(results.data);
          })
          .catch(error => {
            console.log("Check your work", error);
          });
      };
      getCompany(id);
    });

    if (!company) {
      return <div>Looking for Companies...</div>;
    }
};

export default Company;