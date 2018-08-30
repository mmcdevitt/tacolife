import React from "react";

import './restaurant.css';

class Restaurant extends React.Component {
  render() {
    return (
      <div className="taco">
        {this.props.name}
      </div>
    );
  }
}

export default Restaurant;
