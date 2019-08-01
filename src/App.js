<<<<<<< HEAD

import CompanyProfiles from './components/Jobs/CompanyCard/CompanyProfiles'
import React, { useState } from 'react'
import { useLocalStorage } from './auth/useLocalStorage'
import { Route, Link } from 'react-router-dom'
=======
import CompanyProfiles from "./components/Jobs/CompanyCard/CompanyProfile";
import React, { useState } from "react";
import { useLocalStorage } from "./auth/useLocalStorage";
import { Route, Link } from "react-router-dom";
>>>>>>> alan-perez/Development
// import PrivateRoute from './auth/PrivateRoute'
import LoginFormFormik from "./components/Login/LoginForm";
import Register from "./components/Register/Register";
import ProfilePage from "./components/Profile/ProfilePage";
import ProfileForm from "./components/Profile/ProfileForm";
import Navbar from "./components/Navbar/Navbar";
import NavWrapper from "./components/Navbar/NavWrapper";
import Jobs from "./components/Jobs/Jobs";

function App() {
  const [storedValue, setValue] = useLocalStorage("token");

  //*----Dummy Data----*
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "notanthony",
      email: "anthony@mail.com",
      interests: "lego arms dealer",
      pastExperience: "president",
      location: "mars"
    }
  ]);
  //*------Function addPerson adds person to People array----*
  const addPerson = person => {
    setPeople([...people, person]);
  };
  //*-------------Nav Links Here-----------------*
  const companyLinks = ["Login", "Register", "Profile", "Seekers", "Company"];
  const seekerLinks = ["Login", "Register", "Profile", "Jobs", "Company"];
  return (
    <div className="App">
      <div>
        <NavWrapper>
          <Navbar companyLinks={companyLinks} seekerLinks={seekerLinks} />
          {/*^^^^ NavLinks added above^^^^
          <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/update">Update Profile</Link>
        <Link to="/profile">Profile</Link>*/}
          <Link to="/jobs">Jobs</Link>
          <Link to="/company-card">Company Card</Link>
        </NavWrapper>
      </div>
      <Route
        exact
        path="/login"
        render={props => <LoginFormFormik {...props} setValue={setValue} />}
      />
      <Route exact path="/register" component={Register} />
      <Route
        exact
        path="/update"
        render={props => <ProfileForm {...props} submitPerson={addPerson} />}
      />
      <Route
        exact
        path="/profile"
        render={props => people.map(person => <ProfilePage person={person} />)}
      />
      <Route exact path="/jobs" component={Jobs} />
      {/* THIS IS GOES WITH JOBS. ITS A COMPANY CARD THAT DISPLAYS WHEN YOU SELECT A JOB */}
      <Route exact path="/companycard" component={CompanyProfiles} />
    </div>
  );
}

export default App;
