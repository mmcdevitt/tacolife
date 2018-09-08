import axios from 'axios'
import history from '../history'
import {createLocalCart} from '../helpers'

/**
 * ACTION TYPES
 */
const REQUEST_USER = 'REQUEST_USER'
export const FETCH_USER = 'FETCH_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
  isLoading: false,
  currentUser: {},
  authenticated: false,
  errorMessage: '',
  token: ''
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: FETCH_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const requestUser = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_USER
    })
  }
}

export const me = () => {
  return dispatch => {
    axios
      .get('/auth/me', {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        if (res.data.roles.map(role => role.name).includes('super admin')) {
          res.data.superAdmin = true
        }

        dispatch({
          type: FETCH_USER,
          payload: {
            user: res.data,
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const signinUser = (formProps, method) => {
  return dispatch => {
    axios.post(`/auth/${method}`, formProps)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      console.log(res.data)
      dispatch({
        type: FETCH_USER,
        payload: {
          user: res.data.user,
          token: res.data.token
        }
      })
      history.push('/oauthredirect')
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
    createLocalCart()
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state=initialState, action) {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload.user,
        authenticated: true,
        token: action.payload.token
      }
    case REMOVE_USER:
      return {
        ...state,
        currentUser: {},
        authenticated: false,
      }
    default:
      return state
  }
}
