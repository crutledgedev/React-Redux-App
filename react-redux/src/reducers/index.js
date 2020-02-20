import { FETCH_BREW_START, FETCH_BREW_SUCCESS, FETCH_BREW_FAILURE } from '../actions';

const initialState = {
  state: [],
  isFetching: false,
  error: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BREW_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_BREW_SUCCESS:
      return {
        ...state, 
        state: action.payload,
        isFetching: false,
        error: ""
      }
    case FETCH_BREW_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer;