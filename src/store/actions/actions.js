import { axiosInstance } from '../../auth/helpers'

export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS  = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILURE  = 'ADD_USER_FAILURE'


export const addUser = (newUser) => dispatch => {
  dispatch({ type: ADD_USER_START })
    return axiosInstance
      .post('/api/auth/register', newUser)
      .then( res => {
        dispatch({ type: ADD_USER_SUCCESS, payload:res.data})
      })
      .catch(err => {
        dispatch({
          type: ADD_USER_FAILURE,
          payload: err.message,
        })
      })
}
