import React from 'react';
import {connect} from 'react-redux'
import { deleteItem, addQuantity } from '../../store/cartReducer'

class CartItem extends React.Component {
  render () {
    const {
      item,
      deleteItem,
    } = this.props;

    return (
      <div className="cart-item flex space-between">
        <div className="cart-item-details">
          <div className="cart-item-name">
            {item.quantity} {item.menuItem.name}
          </div>
          <span className="text-muted text-small">
            Soft shells, Tabasco
          </span>
        </div>
        <div className="flex">
          <div className="cart-item-price">
            ${item.menuItem.price}
          </div>
          <div className="remove-cart-item" onClick={() => deleteItem(item.id, null)}>
            <i className="fa fa-close"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  deleteItem,
  addQuantity
})(CartItem)