import React from 'react';
import { connect } from 'react-redux';
import { Column } from '../Grid';
import ModalLauncher from '../UI/Modal/ModalLauncher';
import { addToCart } from '../../store/cartReducer';
import AddToCart from '../UI/AddToCart/AddToCart';
import { formatPrice } from '../../helpers'

class MenuItem extends React.Component {
  customElement = (f) => {
    const { item } = this.props;

    return (
      <div className="menu-item flex flex-direction-col space-between" onClick={f}>
        <div>
          <h6>{item.name}</h6>
        </div>
        <div className="menu-item-price">
          <span>{formatPrice(item.price)}</span>
        </div>
      </div>
    )
  }

  render () {
    // toggleModal is being passed from ModalLauncher using React.Children for this.props.children
    const { item, toggleModal } = this.props;

    return (
      <Column className="menu-item-container" width={6}>
        <ModalLauncher customElement={this.customElement}>
          {/* <h1>{item.name}</h1> */}
          <AddToCart menuItem={item} toggleModal={toggleModal} />
        </ModalLauncher>
      </Column>
    )
  }
}

export default connect(null, {
  addToCart
})(MenuItem);