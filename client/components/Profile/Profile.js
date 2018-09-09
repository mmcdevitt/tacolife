import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { urlHelper } from '../../helpers';
import { selectRestaurant } from '../../store/restaurantsReducer'

class Profile extends React.Component {
  render () {
    const { currentUser } = this.props;
    
    return (
      <div>
        Profile
        <div>
          {
            currentUser.restaurants.map(restaurant => {
              return (
                <div key={restaurant.id}>
                  <a href={urlHelper(restaurant.slug)}>{restaurant.name}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { currentUser } = state.auth;
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {selectRestaurant})(Profile)