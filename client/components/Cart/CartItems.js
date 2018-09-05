import React from 'react';
import Button from '../UI/Button/Button';
import CartItem from './CartItem';

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
      </div>
    )
  }
}

export default CartItems;