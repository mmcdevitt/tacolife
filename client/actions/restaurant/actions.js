import axios from 'axios'

const actions = {
	FETCH_RESTAURANTS:   'FETCH_RESTAURANTS',
	REQUEST_RESTAURANTS: 'REQUEST_RESTAURANTS',
	NEW_RESTAURANT: 'NEW_RESTAURANT',
	DELETE_RESTAURANT: 'DELETE_RESTAURANT',
	EDIT_RESTAURANT: 'EDIT_RESTAURANT',
	FETCH_RESTAURANT: 'FETCH_RESTAURANT',
	REQUEST_RESTAURANT: 'REQUEST_RESTAURANT',
  RESET_RESTAURANT: 'RESET_RESTAURANT',
  
  fetchRestaurants: () => {
		return dispatch => {
			axios
				.get('/api/restaurants')
				.then(res => {
					dispatch({
						type: actions.FETCH_RESTAURANTS,
						payload: res.data,
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
  },
  
  fetchRestaurant: (id) => {
		return dispatch => {
			axios
				.get(`/api/restaurants/${id}`)
				.then(res => {
					dispatch({
						type: actions.FETCH_RESTAURANT,
						payload: res.data,
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	resetRestaurant: () => {
		return dispatch => {
			dispatch({
				type: actions.RESET_RESTAURANT,
			})
		}
	},

	editRestaurant: (data, id, history) => {
		return dispatch => {
			axios
				.put(`/api/campuses/${id}`, data)
				.then(res => {
					dispatch({
						type: actions.EDIT_RESTAURANT,
						payload: res.data.campus
					})
					history.push(`/campuses/${id}`)
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	newRestaurant: (data, history) => {
		return dispatch => {
			axios
				.post('/api/campuses', data)
				.then(res => {
					dispatch({
						type: actions.NEW_RESTAURANT,
						payload: res.data,
					})
					history.push(`/campuses/${res.data.id}`)
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	deleteRestaurant: (id) => {
		return dispatch => {
			axios
				.delete(`/api/campuses/${id}`)
				.then(res => {
					dispatch({
						type: actions.DELETE_RESTAURANT,
						payload: id,
					})
				})
				.catch(err => {
					console.log(err)
				})
		}
	},

	requestRestaurants: () => {
		return dispatch => {
			dispatch({
				type: actions.REQUEST_RESTAURANTS,
			})
		}
	},

	requestRestaurant: () => {
		return dispatch => {
			dispatch({
				type: actions.REQUEST_RESTAURANT,
			})
		}
	}
}

export default actions