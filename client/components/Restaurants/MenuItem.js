import React from 'react';
import { Column } from '../Grid';

class MenuItem extends React.Component {
  render () {
    const { item } = this.props;

    return (
      <Column flex className="menu-item flex-direction-col space-between" width={6}>
        <div>
          <h6>{item.name}</h6>
        </div>
        <div className="menu-item-price">
          <span>${item.price}.00</span>
        </div>
      </Column>
    )
  }
}

export default MenuItem;