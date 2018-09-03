import React from 'react';
import { connect } from 'react-redux';
import Aside from '../UI/Aside/Aside';

import './SidebarCart.css';
import Button from '../UI/Button/Button';
import CartItems from './CartItems';
import { setCart } from '../../store/cartReducer'


class SidebarCart extends React.Component {
  render () {
    const {cartItems} = this.props;

    return (
      <Aside border="left" className="flex flex-direction-col">
        <div className="cart-header">
          <h6>Your Cart</h6>
        </div>
        <CartItems cartItems={cartItems} />
        <div className="cart-footer">
          <Button primary block>Continue to Checkout</Button>
        </div>
      </Aside>
    )
  }
}

function mapStateToProps (state) {
  const { cartItems } = state.Cart;
  return {
    cartItems,
  }
}

export default connect(mapStateToProps)(SidebarCart);