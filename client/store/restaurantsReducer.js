import { 
  FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
} from '../actions/restaurants/actions';

const initialState = {
	restaurants: [],
	isLoading: false,
  error: {}
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case FETCH_RESTAURANTS_SUCCESS:
			return {
				...state,
				restaurants: action.payload,
				isLoading: false,
      }
    case FETCH_RESTAURANTS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
		default: 
			return state;
	}
}

export default reducer;