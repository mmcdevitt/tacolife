import React from 'react';

class CartItem extends React.Component {
  render () {
    const {item} = this.props;

    return (
      <div className="cart-item flex space-between">
        <div className="cart-item-details">
          <div className="cart-item-name">
            {item.menuItem.name}
          </div>
          <span className="text-muted text-small">
            Soft shells, Tabasco
          </span>
        </div>
        <div className="cart-item-price">
          ${item.menuItem.price}
        </div>
      </div>
    )
  }
}

export default CartItem;