import React from 'react';
import MenuItemCard from './MenuItemCard';

class MenuItemsList extends React.Component {
  renderList () {
    const {category} = this.props;

    if (category.menuItems && !!category.menuItems.length) {
      return category.menuItems.map(item => {
        return <MenuItemCard item={item} />
      })
    }
  }
  render () {
    

    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    )
  }
}

export default MenuItemsList;