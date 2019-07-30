import React from 'react';
import {useLocalStorage} from './auth/useLocalStorage'
import {
  Route,
  Link
} from "react-router-dom";
// import PrivateRoute from './auth/PrivateRoute'
import LoginFormFormik from './components/Login/LoginForm'
import ProfileForm from './components/Profile/ProfileForm'

import Register from './components/Register/Register'
function App() {

  const [storedValue, setValue] = useLocalStorage('token')

  return (
    <div className="App">
      {/* <LoginForm /> */}

      <div>
      <Link to="/login">Login</Link>
      <Link to='/register'>Register</Link>
      </div>

      <Route exact path='/login' render={(props) => <LoginFormFormik {...props} setValue={setValue} />} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={ProfileForm} />
    </div>
  );
}

export default App;
