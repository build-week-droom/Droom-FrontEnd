import React from "react";
//This is a dummy component with no API functionality ***
export const UserProfile = props => {
  const { handleSubmit, handleChange } = props;

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     submitPerson(person);
  //     setPerson({name: "", email: "", interests: "", pastExperience: "", location: ""});

  //   };

  // const handleChange = event => {
  //     setPerson({...person, [event.target.name]: event.target.value});
  //   };

  return (
    <div className="main-wrapper">
      <div className="profile-container">
        <h1>Create Your Profile Here!</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            labelText="Enter Your Full Name"
          />

          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            labelText="Enter Your Email"
          />

          <input
            type="text"
            name="interests"
            onChange={handleChange}
            value={interests}
            labelText="Enter Your Interests"
          />

          <input
            type="text"
            name="pastExperience"
            onChange={handleChange}
            value={pastExperience}
            labelText="Enter Your Past Experience"
          />
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={location}
            labelText="Enter Your Location"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
