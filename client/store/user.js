import axios from 'axios'
import history from '../history'
import {createLocalCart} from '../helpers'

/**
 * ACTION TYPES
 */
const FETCH_USER = 'FETCH_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
  currentUser: {},
  authenticated: false,
  errorMessage: '',
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: FETCH_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => {
  return dispatch => {
    axios
      .get('/auth/me', {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch(getUser(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const auth = (email, password, method) => {
  return dispatch => {
    axios.post(`/auth/${method}`, {
      email, password
    })
    .then(res => {
      dispatch(getUser(res.data.user))

      localStorage.setItem('token', res.data.token);
      history.push('/home')
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
    case FETCH_USER:
      return {
        ...state,
        currentUser: action.user,
        authenticated: true,
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
