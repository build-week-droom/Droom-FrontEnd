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
            labelText="Your full name"
          />

          <input
            type="text"
            name="email"
            inputChange={inputChange}
            value={email}
            labelText="Email"
          />
        </form>
      </div>
    </div>
  );
};
