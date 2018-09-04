import React from 'react';
import { Nested, Column } from '../Grid';

import './MenuItems.css'
import MenuItem from './MenuItem';

class MenuItems extends React.Component {
  renderMenuItem () {
    const { menuItems } = this.props;

    return menuItems.map(item => {
      return (
        <MenuItem 
          key={item.id} 
          item={item}
          click={this.props.click}
          id={item.id}
        />
      )
    })
  }

  render () {
    return (
      <Nested className="menu">
        {this.renderMenuItem()}
      </Nested>
    )
  }
}

export default MenuItems;