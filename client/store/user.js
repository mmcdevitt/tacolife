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
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    console.log(res)
    dispatch(getUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res;
  localStorage.setItem('token', 'adsf')
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
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
