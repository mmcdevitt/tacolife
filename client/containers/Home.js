import React from 'react';
import { connect } from 'react-redux';
import { Grid, Column, Nested } from "../components/Grid";
import axios from 'axios';
import actions from '../actions/restaurant/actions'
import Restaurants from '../components/Restaurants/Restaurants';
import Aside from '../components/UI/Aside/Aside';

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
      <Grid gap={0}>
        <header className="header twelve-cols">test</header>
        <Aside />
        <Column width={9}>
          <Nested>
            {this.renderRestaurants()}
          </Nested>
        </Column>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  const { 
    restaurants, 
    isLoading 
  } = state.Restaurant

  return {
    restaurants,
    isLoading,
  }
}

export default connect(mapStateToProps, {
  fetchRestaurants,
  requestRestaurants,
})(Home);