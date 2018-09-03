import React from 'react';

class CartSummary extends React.Component {
  render () {
    const {cartItems} = this.props;

    return (
      <div className="cart-summary">
        <div className="cart-summary-item flex space-between">
          <div>Subtotal</div>
          <div>$12.00</div>
        </div>
        <div className="cart-summary-item flex space-between">
          <div>Tax</div>
          <div>$1.32</div>
        </div>
        <div className="cart-summary-item flex space-between">
          <div>Tip</div>
          <div>$4.32</div>
        </div>
        <div className="cart-summary-item total flex space-between">
          <div>Total</div>
          <div>$24.32</div>
        </div>
      </div>
    )
  }
}

export default CartSummary;