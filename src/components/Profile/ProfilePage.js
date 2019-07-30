import React, { useState } from "react";
//This is a dummy component with no API functionality ***
const ProfilePage = props => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    interests: "",
    pastExperience: "",
    location: ""
  });

  //*----DummyData-------------*
  // const [people, setPeople] = useState([
  //   {
  //     id: 1,
  //     name: "anthony",
  //     email: "e@mail.com",
  //     interests: "sclupting batman figurines",
  //     pastExperience: "superhero",
  //     location: "brooklyn"
  //   },
  //   {
  //     id: 2,
  //     name: "notanthony",
  //     email: "anthony@mail.com",
  //     interests: "lego arms dealer",
  //     pastExperience: "president",
  //     location: "mars"
  //   }
  // ]);

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
