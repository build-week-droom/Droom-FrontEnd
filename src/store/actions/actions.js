import { axiosInstance } from '../../auth/helpers'

export const ADD_SEEKER_START = 'ADD_SEEKER_START'
export const ADD_SEEKER_SUCCESS  = 'ADD_SEEKER_SUCCESS'
export const ADD_SEEKER_FAILURE  = 'ADD_SEEKER_FAILURE'


export const addSeeker = (newSeeker) => dispatch => {
  dispatch({ type: ADD_SEEKER_START })
    return axiosInstance
      .post('/api/auth/register', newSeeker)
      .then( res => {
        dispatch({ type: ADD_SEEKER_SUCCESS, payload:res.data})
      })
      .catch(err => {
        dispatch({
          type: ADD_SEEKER_FAILURE,
          payload: err.message,
        })
      })
}

export const ADD_COMPANY_START = 'ADD_COMPANY_START'
export const ADD_COMPANY_SUCCESS  = 'ADD_COMPANY_SUCCESS'
export const ADD_COMPANY_FAILURE  = 'ADD_COMPANY_FAILURE'

export const addCompany = (newCompany) => dispatch => {
  dispatch({type: ADD_COMPANY_START })
    return axiosInstance
      .post('/api/auth/register', newCompany)
        .then(res => {
          dispatch({ type: ADD_COMPANY_SUCCESS, payload:res.data})
        }) 
        .catch(err => {
          dispatch({
            type:ADD_COMPANY_FAILURE,
            payload: err.message})
        })
}