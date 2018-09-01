import actions from '../actions/restaurant/actions';

const { 
	FETCH_RESTAURANTS,
	REQUEST_RESTAURANTS,
	NEW_RESTAURANT,
	DELETE_RESTAURANT,
	EDIT_RESTAURANT,
} = actions

const initialState = {
	restaurants: [],
	isLoading: false
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case REQUEST_RESTAURANTS:
			return {
				...state,
				isLoading: true,
			}
		case FETCH_RESTAURANTS:
			return {
				...state,
				restaurants: action.payload,
				isLoading: false,
			}
		case NEW_RESTAURANT:
			return {
				...state,
				restaurants: [ ...state.restaurants, action.payload ]
			}
		case DELETE_RESTAURANT:
			return {
				...state,
				restaurants: state.restaurants.filter(restaurant => {
					return restaurant.id !== action.payload
				})
			}
		case EDIT_RESTAURANT:
			return {
				...state,
				restaurants: state.restaurants.map((restaurant, index) => {
					if (restaurant.id === action.payload.id) {
						return action.payload
					}
					return restaurant
				})
			}
		default: 
			return state;
	}
}

export default reducer;