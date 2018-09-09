import React from 'react';
import { connect } from 'react-redux';
import { Column, Nested } from "../components/Grid";
import axios from 'axios';
// import actions from '../actions/restaurant/actions'
import Restaurants from '../components/Restaurants/Restaurants';
import Aside from '../components/UI/Aside/Aside';

class Home extends React.Component {
  renderRestaurants () {
    if (this.props.isLoading) {
      return <div>Loading</div>
    } else {
      return <Restaurants restaurants={this.props.restaurants} />
    }
  }

  render () {
    return (
      <React.Fragment>
        <Aside />
        <Column className="content" width={9}>
          <Nested>
            {this.renderRestaurants()}
          </Nested>
        </Column>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  const { 
    restaurants, 
    isLoading 
  } = state.restaurants

  return {
    restaurants,
    isLoading,
  }
}

export default connect(mapStateToProps)(Home);