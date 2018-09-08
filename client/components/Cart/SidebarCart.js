import React from 'react';
import { connect } from 'react-redux';
import Aside from '../UI/Aside/Aside';

import './SidebarCart.css';
import Button from '../UI/Button/Button';
import CartItems from './CartItems';
import { setCart } from '../../store/cartReducer'
import CartSummary from './CartSummary';
import CheckoutButton from './CheckoutButton';


class SidebarCart extends React.Component {
  renderCartItems () {
    const {cartItems, totalPrice} = this.props;

    if (cartItems.length) {
      return (
        <React.Fragment>
          <CartItems cartItems={cartItems} />
          <CartSummary />
          <CheckoutButton totalPrice={totalPrice} />
        </React.Fragment>
      )
    } else {
      return 'Your Cart is Empty'
    }
  }

  render () {
    const {cartItems} = this.props;

    return (
      <Aside cart border="left" className="flex flex-direction-col">
        <div className="cart-header">
          <h6>Your Cart</h6>
        </div>
        {this.renderCartItems()}
      </Aside>
    )
  }
}

function mapStateToProps (state) {
  const { 
    cartItems,
    totalPrice,
  } = state.cart;

  return {
    cartItems,
    totalPrice,
  }
}

export default connect(mapStateToProps)(SidebarCart);