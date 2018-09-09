import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Grid, Column, Nested } from '../Grid';
import { Navbar } from '../index';
import Login from '../Auth/Login';
import { urlHelper, fetchSubdomain } from '../../helpers';
import OauthRedirect from '../Auth/OauthRedirect';
import {fetchRestaurantBySlug, requestRestaurant} from '../../actions/restaurant/actions';
import Aside from '../UI/Aside/Aside';
import RestaurantAdmin from '../RestaurantAdmin/RestaurantAdmin'
import AuthenticateUser from '../../hoc/AuthenticateUser'
import RestaurantAdminRoutes from '../RestaurantAdmin/RestaurantAdminRoutes';

const Test = () => {
  return <div>Test</div>
}

class RestaurantLayout extends React.Component {
  componentDidMount () {
    this.props.requestRestaurant()
    this.props.fetchRestaurantBySlug(fetchSubdomain())
  }

  render404 () {
    const { restaurantNames } = this.props;
    if (!restaurantNames.includes(fetchSubdomain())) {
      return 'This restaurant does not exist'
    }
  }

  render () {
    const { currentUser, auth } = this.props;

    if (auth) {
      if (!currentUser.restaurants.map(r => r.slug).includes(fetchSubdomain())) {
        return 'This restaurant does not exist'
      }
    }

    return (
      <React.Fragment>
        <Navbar />
        <Grid gap={0}>
          <Switch>
            <Route exact path="/" component={Test} />
            <Route path="/login" component={Login} />
            <Route path="/oauthredirect" component={OauthRedirect} />
            <Route path="/admin" component={RestaurantAdminRoutes} />
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
  } = state.restaurants

  // const { currentUser } = state.auth

  return {
    restaurants,
    isLoading,
    currentUser: state.auth.currentUser,
    auth: !!state.auth.currentUser.id,
    restaurantNames: restaurants.map(r => r.slug)
  }
}

export default withRouter(
  connect(mapStateToProps, {
    fetchRestaurantBySlug,
    requestRestaurant
  })(RestaurantLayout))