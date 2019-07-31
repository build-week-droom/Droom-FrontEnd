import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import {decodeToken} from '../auth/Token'
import { getToken } from './localStorage';
import roles from './roles'
import routes from './routes'
// const PrivateRoute = ({ component: Component, ...rest }) => (
// <Route
//     {...rest}
//     render={props => {
//       const currentUser = getToken();
//       const user = decodeToken(currentUser);
     
//       if (!currentUser ) {
//         console.log('CLG ROUTES.LOGIN IN PRVTRT: ',routes.login)
//         return <Redirect to='/login' />;
//       } else if(user.isCompany === roles.isCompany) {
//         return <Redirect to='/profile' />
//       }
//       // if (user.role !== roles.company) {
//       //     return <Redirect to={routes.home}/>;
//       //   }
      

//       // return <Component {...props} />;
//     }}
//   />
// );

// 


function PrivateRoute({ component: Component, ...rest }) {
  const currentUser = getToken();
  const user = decodeToken(currentUser);
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute