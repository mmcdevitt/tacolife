import React from 'react';
import {connect} from 'react-redux'
import { deleteItem, addQuantity } from '../../store/cartReducer'
import { formatPrice } from '../../helpers'

class CartItem extends React.Component {
  render () {
    const {
      item,
      deleteItem,
      currentUser
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
            {formatPrice(item.menuItem.price)}
          </div>
          <div className="remove-cart-item" onClick={() => deleteItem(item.id, currentUser.id)}>
            <i className="fa fa-close"></i>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { currentUser } = state.Auth;

  return {
    currentUser
  }
}

export default connect(mapStateToProps, {
  deleteItem,
  addQuantity
})(CartItem)