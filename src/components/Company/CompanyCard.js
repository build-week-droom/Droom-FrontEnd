import React from 'react';

const CompanyCard = (props) => {

    const { name, location, email, about } = props;

    return (
      <div className = "company-card">
        <h1>{name}</h1>
        <div>
          Location: {location}
        </div>
        <div>
          Email: {email}
        </div>
        <div>
          About Us: {about}
        </div>
      </div>
    )
};

export default CompanyCard;