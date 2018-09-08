import React, {Component} from 'react'
import { connect } from 'react-redux'
 
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>restaurants</h1>
        {
          this.props.restaurants.map(restaurant => {
            return (
              <div key={restaurant.id}>{restaurant.name}</div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { restaurants } = state.restaurant;

  return {
    restaurants
  }
}

export default connect(mapStateToProps)(Dashboard)
