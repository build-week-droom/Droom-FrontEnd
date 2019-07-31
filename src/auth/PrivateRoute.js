import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import {decodeToken} from '../auth/Token'
import { getToken } from './localStorage';
import roles from './roles'
import routes from './routes'
const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
    {...rest}
    render={props => {
      const currentUser = getToken();
      const user = decodeToken(currentUser);
      // const {isCompany} = decodeToken()

      console.log('PRIVATE ROUTE DECODETOKEN:  ', decodeToken(currentUser))
      console.log('clg user.isco:  ', user.isCompany)
      if (!currentUser ) {
        return <Redirect to={routes.login} />;
      } if (user.role === roles.seeker) {
        return <Redirect to={routes.profile} />
      }
      else {
        if (user.role !== roles.company) {
          return <Redirect to={routes.home}/>;
        }
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute