import React from 'react';
import { connect } from 'react-redux';
import { Grid, Column, Nested } from "../components/Grid";
import axios from 'axios';
import actions from '../actions/restaurant/actions'
import Restaurants from '../components/Restaurants/Restaurants';
import Aside from '../components/UI/Aside/Aside';
import { Navbar } from '../components'

const { fetchRestaurants, requestRestaurants } = actions;

class Home extends React.Component {
  componentDidMount () {
    this.props.requestRestaurants()
    this.props.fetchRestaurants()
  }

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
  } = state.restaurant

  return {
    restaurants,
    isLoading,
  }
}

export default connect(mapStateToProps, {
  fetchRestaurants,
  requestRestaurants,
})(Home);