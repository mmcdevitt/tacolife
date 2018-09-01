import React from "react";
import { Grid, Column, Nested } from "../Grid";

import './restaurant.css';
import RestaurantDetails from "./RestaurantDetails";

class RestaurantCard extends React.Component {
  render() {
    const { name, id } = this.props; 

    return (
      <div className="taco">
        <Nested>
          <Column width={6}>
            <RestaurantDetails id={id} name={name} />
          </Column>
          <Column className="flex flex-direction-col space-between" width={6}>
            <div className="taco-basic-info flex space-between">
              <div className="taco-rating">
                <span className="text-muted text-small">1234 Ratings</span>
              </div>
              <div className="taco-minimum-pricing text-right">
                <h6 className="margin-none">
                  $10
                </h6> 
                <span className="text-muted text-small">
                  minimum
                </span>
              </div>
            </div>
            <div className="taco-stats text-right align-self-end">
              <span className="text-muted text-small">0.50 mi - 30-40 min</span>
            </div>
          </Column>
        </Nested>
      </div>
    );
  }
}

export default RestaurantCard;
