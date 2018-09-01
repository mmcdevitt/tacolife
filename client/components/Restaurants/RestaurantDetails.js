import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetails = (props) => {
  return (
    <div className="taco-details flex">
      <div className="taco-image">
        
      </div>
      <div className="taco-primary-info">
        <h6 className="taco-name">
          <Link to={`/restaurants/${props.id}`}>
            {props.name}
          </Link>
        </h6>
      </div>
    </div>
  )
}

export default RestaurantDetails;