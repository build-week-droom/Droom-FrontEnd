import { axiosInstance } from '../../auth/helpers'
import {axiosAuth} from '../../auth/axiosAuth'

export const ADD_USER_START = 'ADD_USER_START'
export const ADD_USER_SUCCESS  = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILURE  = 'ADD_USER_FAILURE'


// USED IN REGISTER FORM
export const addUser = (newUser) => dispatch => {
  dispatch({ type: ADD_USER_START })
  return axiosInstance
      .post('/api/auth/register', newUser)
      .then( res => {
        console.log('CLG RES.DATA IN ACTIONS FOR ADD USER', res.data)
        localStorage.setItem('isCompany', res.data.isCompany)
        dispatch({ type: ADD_USER_SUCCESS, payload:res.data})
      })
      .catch(err => {
        dispatch({
          type: ADD_USER_FAILURE,
          payload: err.message,
        })
      })
    }

    // USED IN LOGIN FORM
  export const LOGIN_USER_START = 'LOGIN_USER_START'
  export const LOGIN_USER_SUCCESS  = 'LOGIN_USER_SUCCESS'
  export const LOGIN_USER_FAILURE  = 'LOGIN_USER_FAILURE'

  export const userLogin = (cred) => dispatch => {
    dispatch({type: LOGIN_USER_START})
      return axiosAuth()
        .post('/api/auth/login', cred)
          .then(res => {
            console.log('clg login res from acitons: ',res)
            localStorage.setItem('token', res.data.token)
            dispatch({type: LOGIN_USER_SUCCESS, payload: res.data.body})
          })
          .catch(err => {
            console.log(err)
            dispatch({type: LOGIN_USER_FAILURE, payload: err.msg})
          })
  }


export const LOAD_USER_START = 'LOAD_USER_START'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const loadUserInfo = (id) => dispatch => {
  dispatch({ type: LOAD_USER_START })
  return axiosAuth()
    .get(`/api/seekers/${id}`)
    .then(res => {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data
      })
    })
    .catch(() =>
      dispatch({
        type: LOAD_USER_FAILURE,
        payload: 'Problem fetching user',
      })
    )
}

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const updateUserInfo = info => dispatch => {
  dispatch({ type: UPDATE_USER_START })

  return axiosInstance
    .put('/profile', info)
    .then(({ data: { user } }) => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: user[0],
        msg: 'Success',
      })
    })
    .catch(err =>
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: err.message,
      })
    )
}


//SEARCH and FILTER
export const SEARCH = "SEARCH";
export const FILTER = "FILTER"

// SEARCH
export const search = searchTerm => {
  return {
    type: SEARCH,
    payload: searchTerm
  };
};

// FILTER
export const filter = filterTerm => {
  return {
    type: FILTER,
    payload: filterTerm
  }
}