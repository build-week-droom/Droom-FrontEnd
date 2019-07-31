import React from "react";
import { Link } from "react-router-dom";
//This is a dummy component with no API functionality ***
const ProfilePage = props => {
  const { person } = props;

  return (
    <div className="main-wrapper">
      <div className="profile-page">
        <div>{person.name}</div>
        <div>{person.email}</div>
        <div>{person.interests}</div>
        <div>{person.pastExperience}</div>
        <div>{person.location}</div>
        <Link to={`/edit/${person.id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
