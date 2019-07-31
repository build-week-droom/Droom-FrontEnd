import { axiosInstance } from '../../auth/helpers'

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
  export const CHECK_USER_START = 'CHECK_USER_START'
  export const CHECK_USER_SUCCESS  = 'CHECK_USER_SUCCESS'
  export const CHECK_USER_FAILURE  = 'CHECK_USER_FAILURE'

  export const userCheck = (isCompany) => dispatch => {
    dispatch({type: CHECK_USER_START, payload: isCompany})

  }


export const LOAD_USER_START = 'LOAD_USER_START'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

// export const loadUserInfo = () => dispatch => {
//   dispatch({ type: LOAD_USER_START })
//   return axiosInstance
//     .get(`/api/seekers/${id}`)
//     .then(res => {
//       // console.log(res.data)
//       type: LOAD_USER_SUCCESS,
//       payload: res.data
//     })
//     .catch(() =>
//       dispatch({
//         type: LOAD_USER_FAILURE,
//         payload: 'Problem fetching user',
//       })
//     )
// }

export const loadUserInfo = id => dispatch => {
  // const token = localStorage.getItem("token");
  dispatch({ type: LOAD_USER_START });
  return axiosInstance
    .get(`/api/seekers/${id}`)
    .then(res => {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: LOAD_USER_FAILURE,
        payload: err.message
      });
    });
};

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