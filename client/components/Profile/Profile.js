import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  render () {
    const { currentUser } = this.props;
    const hostname = window.location.hostname.split('.').slice(1).join('.')

    return (
      <div>
        Profile
        <div>
          {
            currentUser.restaurants.map(restaurant => {
              return (
                <div key={restaurant.id}>
                  <a href={`http://${restaurant.slug}.${hostname}:8080`}>{restaurant.name}</a>
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

export default connect(mapStateToProps)(Profile)