import axios from 'axios';

export const FETCH_BREW_START = 'FETCH_BREW_START';
export const FETCH_BREW_SUCCESS = 'FETCH_BREW_SUCCESS';
export const FETCH_BREW_FAILURE = 'FETCH_BREW_FAILURE';

export const getBeer = () => dispatch => {
  dispatch({ type: FETCH_BREW_START })
  axios
    .get('https://api.openbrewerydb.org/breweries?by_state=california')
    .then(res => {
      console.log("AXIOS", res);
      dispatch({ type: FETCH_BREW_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_BREW_FAILURE, payload: err.response })
    })
}