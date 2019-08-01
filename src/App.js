import CompanyProfiles from './components/Jobs/CompanyCard/CompanyProfiles'
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
import Jobs from './components/Jobs/Jobs'
import Company from './components/Jobs/CompanyCard/Company'

function App() {
  const [storedValue, setValue] = useLocalStorage('token')

  //*----Dummy Data----*
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'notanthony',
      email: 'anthony@mail.com',
      interests: 'lego arms dealer',
      pastExperience: 'president',
      location: 'mars'
    }
  ])
  //*------Function addPerson adds person to People array----*
  const addPerson = person => {
    setPeople([...people, person])
  }
  //*-------------Nav Links Here-----------------*
  const companyLinks = ['Login', 'Register', 'Profile', 'Seekers', 'Company']
  const seekerLinks = ['Login', 'Register', 'Profile', 'Jobs', 'Company']
  return (
    <div className="App">
      <div>
        <NavWrapper>
          <Navbar companyLinks={companyLinks} seekerLinks={seekerLinks} />
          {/*^^^^ NavLinks added above^^^^
          <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/update">Update Profile</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/company-card ">Company Card</Link>
        <Link to="/profile">Profile</Link>*/}
          {/* <Link to="/jobs">Jobs</Link>
          <Link to="/company">Company Card</Link> */}
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
        path="/profile"
        component={ProfilePage}
      />
      <Route
        exact
        path="/update"
        component={ProfileForm}
      />
      <Route exact path="/jobs" component={Jobs} />
      {/* THIS IS GOES WITH JOBS. ITS A COMPANY CARD THAT DISPLAYS WHEN YOU SELECT A JOB */}
      <Route exact path="/company" component={CompanyProfiles} />
      <Route
        path="/company/:id"
        render={props => {
          return <Company {...props} />
        }}
      />
    </div>
  )
}

export default App
