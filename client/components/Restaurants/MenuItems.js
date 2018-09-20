import React from 'react';
import { Nested, Column } from '../Grid';

import './MenuItems.css'
import MenuItem from './MenuItem';

class MenuItems extends React.Component {
  renderMenuItem () {
    const { menuItems, categories } = this.props;

    if (categories) {
    return categories.map(cat => {
      return (
        <React.Fragment>
          <div className="twelve-cols">
            <h6>{cat.name}</h6>
          </div>
          {
            cat.menuItems.map(item => {
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
        </React.Fragment>
      )
    })
  }
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