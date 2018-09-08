import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../helpers'

class CartSummary extends React.Component {
  render () {
    const {
      totalPrice, 
      deliveryFee,
      tax,
      total,
    } = this.props;

    return (
      <div className="cart-summary">
        <div className="cart-summary-item flex space-between">
          <div>Subtotal</div>
          <div>{formatPrice(totalPrice)}</div>
        </div>
        <div className="cart-summary-item flex space-between">
          <div>Delivery Fee</div>
          <div>{formatPrice(deliveryFee)}</div>
        </div>
        <div className="cart-summary-item flex space-between">
          <div>Tax</div>
          <div>{formatPrice(tax)}</div>
        </div>
        <div className="cart-summary-item total flex space-between">
          <div>Total</div>
          <div>{formatPrice(total)}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { 
    totalPrice,
  } = state.cart;

  return {
    totalPrice,
    deliveryFee: 2.75,
    tax: 1.24,
    total: 35
  }
}

export default connect(mapStateToProps)(CartSummary);