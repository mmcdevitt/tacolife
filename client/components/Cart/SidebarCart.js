import React from 'react';
import Aside from '../UI/Aside/Aside';

import './SidebarCart.css';
import Button from '../UI/Button/Button';

class SidebarCart extends React.Component {
  render () {
    const {cartItems} = this.props;

    return (
      <Aside border="left" className="flex flex-direction-col">
        <div className="cart-header">
          <h6>Your Cart</h6>
        </div>
        <div className="cart-items">
          <div className="cart-item flex space-between">
            <div className="cart-item-details">
              <div className="cart-item-name">Spicy Chicken Tacos</div>
              <span className="text-muted text-small">
                Soft shells, Tabasco
              </span>
            </div>
            <div className="cart-item-price">
              $12.00
            </div>
          </div>
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
          {/* {cartItems.map(item => {
            return (
              <div key={item.id} className="cart-item">
                {item.menuItem.name}
              </div>
            )
          })}    */}
        </div>
        <div className="cart-footer">
          <Button primary block>Continue to Checkout</Button>
        </div>
      </Aside>
    )
  }
}

export default SidebarCart;