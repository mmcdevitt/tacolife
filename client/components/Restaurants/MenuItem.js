import React from 'react';
import { Column } from '../Grid';
import ModalLanucher from '../UI/Modal/ModalLauncher';

class MenuItem extends React.Component {
  element = (f) => {
    const { item } = this.props;

    return (
      <div className="menu-item" onClick={f}>
        <div>
          <h6>{item.name}</h6>
        </div>
        <div className="menu-item-price">
          <span>${item.price}.00</span>
        </div>
      </div>
    )
  }

  render () {
    const { item } = this.props;

    return (
      <Column flex className="menu-item-container flex-direction-col space-between" width={6}>
        <ModalLanucher customElement={this.element}>
          {item.name}
        </ModalLanucher>
      </Column>
    )
  }
}

export default MenuItem;