import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';

import './MenuItems.css'

class Menu extends React.Component {
  render () {
    const { restaurant } = this.props;
    
    return <Categories restaurant={restaurant} />
  }
}

function mapStateToProps (state) {
  return {
    restaurant: state.restaurant.data
  }
}

export default connect(mapStateToProps)(Menu);