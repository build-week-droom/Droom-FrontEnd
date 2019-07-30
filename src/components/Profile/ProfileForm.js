import React, { useState, useEffect } from "react";
import axios from "axios";
//This is a dummy component with no API functionality ***
export const UserProfile = props => {
  const { handleSubmit } = props;
  const [person, setPerson] = useState({
    name: "",
    email: "",
    interests: "",
    pastExperience: "",
    location: ""
  });

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     submitPerson(person);
  //     setPerson({name: "", email: "", interests: "", pastExperience: "", location: ""});

  //   };

  const handleChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  //   useEffect(() => {
  //     axios.get(`https://jobdroom.herokuapp.com/`).then(res => console.log(res));
  //   }, []);

  return (
    <div className="main-wrapper">
      <div className="profile-container">
        <h1>Create Your Profile Here!</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={person.name}
            placeholder="Enter Your Full Name"
          />

          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={person.email}
            placeholder="Enter Your Email"
          />

          <input
            type="text"
            name="interests"
            onChange={handleChange}
            value={person.interests}
            placeholder="Enter Your Interests"
          />

          <input
            type="text"
            name="pastExperience"
            onChange={handleChange}
            value={person.pastExperience}
            placeholder="Enter Your Past Experience"
          />
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={person.location}
            placeholder="Enter Your Location"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
