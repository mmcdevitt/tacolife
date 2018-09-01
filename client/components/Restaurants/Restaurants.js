import React from "react";
import { Column, Nested } from "../Grid";
import Restaurant from './Restaurant';

import './restaurant.css';

class Restaurants extends React.Component {
  renderTacos () {
    const { restaurants } = this.props;

    return restaurants.map(restaurant => {
      return (
        <Restaurant 
          key={restaurant.id} 
          name={restaurant.name}
          id={restaurant.id}
        />
      )
    })
  }

  render() {
    return (
      <Column className="tacos" width={12}>
        {this.renderTacos()}
      </Column>
    );
  }
}

export default Restaurants;
