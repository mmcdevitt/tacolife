import React from 'react';

class MenuItemCard extends React.Component {
  render () {
    const {item} = this.props;
    
    return (
      <div>
        {item.name}
      </div>
    )
  }
}

export default MenuItemCard;