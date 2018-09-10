import axios from 'axios'

const tacos = '@@tacos/'

export const FETCH_RESTAURANT_REQUEST  = 'FETCH_RESTAURANT_REQUEST';
export const FETCH_RESTAURANT_SUCCESS  = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_FAILURE  = 'FETCH_RESTAURANT_FAILURE';

export const RESET_RESTAURANT    = 'RESET_RESTAURANT';
export const NEW_RESTAURANT      = 'NEW_RESTAURANT';
export const DELETE_RESTAURANT   = 'DELETE_RESTAURANT';
export const EDIT_RESTAURANT     = 'EDIT_RESTAURANT';

export const NEW_MENU_ITEM = 'NEW_MENU_ITEM'


export const requestRestaurant = () => {
  return dispatch => {
    dispatch({
      type: FETCH_RESTAURANT_REQUEST,
    })
  }
}
  
export const fetchRestaurant = (id, slug) => {
  let url = slug ? 'restaurants/slug' : 'restaurants'
  return dispatch => {
    axios
      .get(`/api/${url}/${id}`)
      .then(res => {
        dispatch({
          type: FETCH_RESTAURANT_SUCCESS,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_RESTAURANT_FAILURE,
          payload: err
        })
      })
  }
}

export const fetchRestaurantBySlug = (slug) => {
  return fetchRestaurant(slug, true)
}

export const resetRestaurant = () => {
  return dispatch => {
    dispatch({
      type: RESET_RESTAURANT,
    })
  }
}

export const editRestaurant = (data, id, history) => {
  return dispatch => {
    axios
      .put(`/api/campuses/${id}`, data)
      .then(res => {
        dispatch({
          type: EDIT_RESTAURANT,
          payload: res.data.campus
        })
        history.push(`/campuses/${id}`)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const newRestaurant = (data, history) => {
  return dispatch => {
    axios
      .post('/api/campuses', data)
      .then(res => {
        dispatch({
          type: NEW_RESTAURANT,
          payload: res.data,
        })
        history.push(`/campuses/${res.data.id}`)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const deleteRestaurant = (id) => {
  return dispatch => {
    axios
      .delete(`/api/campuses/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_RESTAURANT,
          payload: id,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const newMenuItem = (data) => {
  console.log('actions', data)
  return dispatch => {
    axios
      .post('/api/menu_items', data, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({
          type: NEW_MENU_ITEM,
          payload: res.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}