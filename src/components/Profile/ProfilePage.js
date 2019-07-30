import React from "react";

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
      </div>
    </div>
  );
};

export default ProfilePage;
