import { 
  FETCH_RESTAURANT_REQUEST,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAILURE,
	NEW_RESTAURANT,
	DELETE_RESTAURANT,
  EDIT_RESTAURANT,
  NEW_MENU_ITEM,
} from '../actions/restaurant/actions';

const initialState = {
	isLoading: false,
  data: {},
  error: {}
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
    case FETCH_RESTAURANT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_RESTAURANT_FAILURE:
      return {
        ...state,
        error: action.payload,
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
    case NEW_MENU_ITEM:
      return {
        ...state,
        data: {
          ...state.data,
          menuItems: [...state.data.menuItems, action.payload]
        }
      }
		default: 
			return state;
	}
}

export default reducer;