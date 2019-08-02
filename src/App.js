import CompanyProfiles from './components/Cards/CompanyCard/CompanyProfiles'
import React, { useState } from 'react'
import { useLocalStorage } from './auth/useLocalStorage'
import { Route, Link } from 'react-router-dom'
// import PrivateRoute from './auth/PrivateRoute'
import LoginFormFormik from './components/Login/LoginForm'
import Register from './components/Register/Register'
import ProfilePage from './components/Profile/ProfilePage'
import ProfileForm from './components/Profile/ProfileForm'
import Navbar from './components/Navbar/Navbar'
import NavWrapper from './components/Navbar/NavWrapper'
import Jobs from './components/Cards/Jobs/Jobs'
import Company from './components/Cards/CompanyCard/Company'
import HomePage from "./components/HomePage";

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
  const companyLinks = [
    "Home",
    "Login",
    "Register",
    "Profile",
    "Seekers",
    "Company"
  ];
  const seekerLinks = [
    "Home",
    "Login",
    "Register",
    "Profile",
    "Jobs",
    "Company"
  ];
  return (
    <div className="App">
      <div>
        <NavWrapper>
          <Navbar companyLinks={companyLinks} seekerLinks={seekerLinks} />
          {/*^^^^ NavLinks added above^^^^*/}
        </NavWrapper>
      </div>
      <Route exact path="/home" component={HomePage} />
      <Route
        exact
        path="/login"
        render={props => <LoginFormFormik {...props} setValue={setValue} />}
      />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/update" component={ProfileForm} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/company" component={CompanyProfiles} />
      <Route
        path="/company/:id"
        render={props => {
          return <Company {...props} />;
        }}
      />
    </div>
  );
}

export default App;
