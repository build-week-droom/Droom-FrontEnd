import React from "react";

export const UserProfile = props => {
  return (
    <div className="main-wrapper">
      <div className="profile-container">
        <h1>Set-up Your Profile Here!</h1>

        <form>
          <input
            type="text"
            name="name"
            inputChange={inputChange}
            value={name}
            labelText="Enter Your Full Name"
          />

          <input
            type="text"
            name="email"
            inputChange={inputChange}
            value={email}
            labelText="Enter Your Email"
          />

          <input
            type="text"
            name="interests"
            inputChange={inputChange}
            value={interests}
            labelText="Enter Your Interests"
          />

          <input
            type="text"
            name="pastExperience"
            inputChange={inputChange}
            value={pastExperience}
            labelText="Enter Your Past Experience"
          />
          <input
            type="text"
            name="location"
            inputChange={inputChange}
            value={location}
            labelText="Enter Your Location"
          />
        </form>
      </div>
    </div>
  );
};
