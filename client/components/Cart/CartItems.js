import React from 'react';
import Button from '../UI/Button/Button';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

class CartItems extends React.Component {
  renderCartItems () {
    const {cartItems} = this.props;

    return cartItems.map(item => {
      return (
        <CartItem key={item.id} item={item} />
      )
    })
  }

  render () {
    return (
      <div className="cart-items">
        {this.renderCartItems()}
        <CartSummary />
      </div>
    )
  }
}

export default CartItems;