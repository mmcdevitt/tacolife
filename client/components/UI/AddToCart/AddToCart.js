import React from 'react'
import {connect} from 'react-redux'
import Button from '../Button/Button'

import {addToCart, addQuantity} from '../../../store/cartReducer'
// import {toggleModal} from '../../reducers/modalReducer'

class AddToCart extends React.Component {
  addOrEdit(id, cartId, userId) {
    const {
      cartItems,
      isCartLoading,
      menuItem,
      addQuantity,
      addToCart,
      toggleModal
    } = this.props

    if (isCartLoading) {
      return
    }

    const cartItem = cartItems.find(
      item => item.menuItemId === menuItem.id
    )
    if (cartItem) {
      addQuantity(cartItem.id, cartItem.quantity + 1, userId)
    } else {
      addToCart(id, cartId, userId, menuItem)
    }

    toggleModal()
  }

  render() {
    const {cartId, user, menuItem} = this.props

    return (
      <Button
        className="add-to-cart"
        primary
        onClick={() => this.addOrEdit(menuItem.id, cartId, user.id)}
      >
        Add to Cart
      </Button>
    )
  }
}

const mapStateToProps = state => {
  const {cartId, cartItems, isLoading} = state.Cart

  return {
    cartId,
    user: state.Auth.currentUser,
    cartItems,
    isCartLoading: isLoading
  }
}

export default connect(mapStateToProps, {
  addToCart,
  addQuantity,
})(AddToCart)