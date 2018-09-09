import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import { Grid, Column, Nested } from '../Grid';
import { Navbar } from '../index'
import Login from '../Auth/Login'

class RestaurantLayout extends React.Component {
  componentDidMount () {
    const { restaurants } = this.props;

    const subdomain = window.location.host.split('.')[0]
    const restaurantNames = restaurants.map(res => res.slug)

    if (!restaurantNames.includes(subdomain)) {
      console.log('restaurant does not exist')
    } else {
      console.log('restuarant exist')
    }
  }

  render () {
    return (
      <React.Fragment>
        <Grid gap={0}>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </Grid>
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

export default connect(mapStateToProps)(RestaurantLayout)