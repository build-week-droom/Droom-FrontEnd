import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,

  CHECK_USER_START,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,

  SEARCH,FILTER
} from '../actions/actions'


const initialUserState = {
  name: null,
  email: null,
  isCompany: true,
  loading: false,
  error: null,
  msg: null,
}

  export const reducers = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER_START:
      return { ...state, loading:true }
    
    case ADD_USER_SUCCESS:
      return { 
        ...state,
        loading:false,
        ...action.payload,
        msg: action.payload
      }

    case ADD_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
          msg: action.payload
        }
        
    case CHECK_USER_START:
        return {
          ...state,
          isCompany:action.payload
        }

    case SEARCH:
          return {
            ...state,
            search: action.payload
          };
    case FILTER:
          return {
            ...state,
            filter: action.payload
          };

    default:
      return state
    }
}