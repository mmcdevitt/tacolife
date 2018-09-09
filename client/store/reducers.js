import { reducer as reduxForm } from 'redux-form';
import restaurants from './restaurantsReducer';
import restaurant from './restaurantReducer';
import auth from './user';
import cart from './cartReducer';

export default {
  form: reduxForm,
  restaurants,
  restaurant,
  auth,
  cart,
}