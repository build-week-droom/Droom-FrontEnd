import React, { useState } from "react";
import { useLocalStorage } from "./auth/useLocalStorage";
import { Route, Link } from "react-router-dom";
// import PrivateRoute from './auth/PrivateRoute'
import LoginFormFormik from './components/Login/LoginForm';
import Register from './components/Register/Register';
import ProfilePage from './components/Profile/ProfilePage';
import ProfileForm from './components/Profile/ProfileForm';

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

  return (
    <div className="App">
      {/* <LoginForm /> */}

      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/update">Update Profile</Link>
        <Link to="/profile">Profile</Link>
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
    </div>
  )
}

export default App
