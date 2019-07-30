import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePage from "./ProfilePage";
//This is a dummy component with no API functionality ***
export const UserProfile = props => {
  const { submitPerson } = props;
  //*----DummyData-------------*
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "anthony",
      email: "e@mail.com",
      interests: "sclupting batman figurines",
      pastExperience: "superhero",
      location: "brooklyn"
    },
    {
      id: 2,
      name: "notanthony",
      email: "anthony@mail.com",
      interests: "lego arms dealer",
      pastExperience: "president",
      location: "mars"
    }
  ]);

  const [person, setPerson] = useState({
    name: "",
    email: "",
    interests: "",
    pastExperience: "",
    location: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    //Adds a new person to the end of people array on submit
    setPeople(people => [...people, person]);
    submitPerson(person);
    setPerson({
      name: "",
      email: "",
      interests: "",
      pastExperience: "",
      location: ""
    });
  };

  const handleChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  // useEffect(() => {
  //   axios.get(`https://jobdroom.herokuapp.com/api/seekers`, {
  //     headers: {
  //       Authorization:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiakBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE1NjQ1MDE0OTUsImV4cCI6MTU2NDU4Nzg5NX0.DzD1pDP9CJcTbrU2VbkOqCm6gnwoiBdb8UAb0PmUIsQ"
  //     }
  //   })
  //   .then(res => console.log(res.data));
  // }, []);

  return (
    <div className="main-wrapper">
      <div className="profile-container">
        <h1>Update Your Profile!</h1>

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
