import { reducer as reduxForm } from 'redux-form';
import restaurant from './restaurantReducer';
import auth from './user';
import cart from './cartReducer';

export default {
  form: reduxForm,
  restaurant,
  auth,
  cart,
}