import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,

  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,

  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,

  SEARCH,
  FILTER,
} from '../actions/actions'


const initialUserState = {
  id:null,
  name: null,
  email: null,
  interests: null,
  pastExperience: null,
  location:null,
  profileImg:null,

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
        
    case LOGIN_USER_START:
        return {
          ...state,
          isLoading: false,
          isLoggingIn: false,
          email:action.payload,
          password:action.payload
        }
    case LOGIN_USER_SUCCESS:
          return { 
            ...state,
            loading:false,
            ...action.payload,
            msg: action.payload
          }
    
    case LOGIN_USER_FAILURE:
      return {
              ...state,
              loading: false,
              error: true,
              msg: action.payload
            }
            case LOAD_USER_START:
                return { 
                  ...state, loading: true
                 }
          
     case LOAD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          ...action.payload,
           msg: action.payload,
          }
          
    case LOAD_USER_FAILURE:
      return { ...state, loading: false, error: true, msg: action.payload }
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