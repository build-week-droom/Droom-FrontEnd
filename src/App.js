import React from 'react';
import {useLocalStorage} from './auth/useLocalStorage'
import {
  Route,
  Link
} from "react-router-dom";
// import PrivateRoute from './auth/PrivateRoute'
import LoginFormFormik from './components/Login/LoginForm'
import Register from './components/Register/Register'
function App() {

  const [storedToken, setToken] = useLocalStorage('token')

  return (
    <div className="App">
      {/* <LoginForm /> */}

      <div>
      <Link to="/">Login</Link>
      <Link to='/register'>Register</Link>
      </div>

      <Route exact path='/' component={LoginFormFormik} />
      <Route path='/register' render={(props) => <LoginFormFormik {...props} setToken={setToken} />} />
    </div>
  );
}

export default App;
