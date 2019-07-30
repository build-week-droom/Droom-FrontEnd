import React from 'react'
import { useLocalStorage } from './auth/useLocalStorage'
import { Route, Link } from 'react-router-dom'
// import PrivateRoute from './auth/PrivateRoute'
import LoginFormFormik from './components/Login/LoginForm'
import Register from './components/Register/Register'
import JobsList from './components/jobs/JobsList'
function App() {
  const [storedValue, setValue] = useLocalStorage('token')

  return (
    <div className="App">
      {/* <LoginForm /> */}

      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/JobsList">Jobs</Link>
      </div>

      {/* <JobsList /> */}

      <Route
        exact
        path="/login"
        render={props => <LoginFormFormik {...props} setValue={setValue} />}
      />
      <Route exact path="/register" component={Register} />
    </div>
  )
}

export default App
