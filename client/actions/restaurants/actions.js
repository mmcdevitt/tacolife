import axios from 'axios'

const tacos = '@@tacos/'

export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

export const requestRestaurants = () => {
  return dispatch => {
    dispatch({
      type: FETCH_RESTAURANTS_REQUEST,
    })
  }
}
  
export const fetchRestaurants = () => {
  return dispatch => {
    axios
      .get('/api/restaurants')
      .then(res => {
        dispatch({
          type: FETCH_RESTAURANTS_SUCCESS,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_RESTAURANTS_FAILURE,
          payload: err
        })
      })
  }
}