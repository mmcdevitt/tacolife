import React from 'react';
import Button from '../UI/Button/Button';

class CheckoutButton extends React.Component {
  render () {
    const price = parseFloat(this.props.totalPrice).toFixed(2)

    return (
      <div className="cart-footer">
        <Button primary block>
          Continue to Checkout: ${price}
        </Button>
      </div>
    )
  }
}

export default CheckoutButton;