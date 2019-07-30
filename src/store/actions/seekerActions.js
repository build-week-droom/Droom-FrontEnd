import { axiosInstance } from '../../auth/helpers'

export const LOAD_SEEKER_START = 'LOAD_SEEKER_START'
export const LOAD_SEEKER_SUCCESS  = 'LOAD_SEEKER_SUCCESS'
export const LOAD_SEEKER_FAILURE  = 'LOAD_SEEKER_FAILURE'


export const loadSeekerInfo = (seeker) => dispatch => {
  dispatch({ type: LOAD_SEEKER_START })
    return axiosInstance
      .post('/api/auth/register', seeker)
      .then( res => {
        dispatch({ type: LOAD_SEEKER_SUCCESS, payload:res.data})
      })
      .catch(err => {
        dispatch({
          type: LOAD_SEEKER_FAILURE,
          payload: err.message,
        })
      })

}