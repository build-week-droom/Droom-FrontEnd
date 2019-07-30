import {
  ADD_SEEKER_START,
  ADD_SEEKER_SUCCESS,
  ADD_SEEKER_FAILURE
} from '../actions/actions'


const initialSeekerState = {
  name: null,
  email: null,
  isCompany: false,
  loading: false,
  error: null,
  msg: null,
}

  export const reducers = (state = initialSeekerState, action) => {
  switch (action.type) {
    case ADD_SEEKER_START:
      return { ...state, loading:true }
    
    case ADD_SEEKER_SUCCESS:
      return { 
        ...state,
        loading:false,
        ...action.payload,
        msg: action.payload
      }

    case ADD_SEEKER_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
          msg: action.payload
        }
    default:
      return state
    }
}