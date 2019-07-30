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

  const [storedValue, setValue] = useLocalStorage('token')

  return (
    <div className="App">
      {/* <LoginForm /> */}

      <div>
      <Link to="/">Login</Link>
      <Link to='/register'>Register</Link>
      </div>

      <Route exact path='/' component={Register} />
      {/* <Route path='/register' render={(props) => <LoginFormFormik {...props} setValue={setValue} />} /> */}
    </div>
  );
}

export default App;
