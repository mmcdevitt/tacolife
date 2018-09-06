import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {UserHome} from './components'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './containers/Home';
import RestaurantRoutes from './components/Restaurants/routes';
import HomeCom from './components/user-home'
import OauthRedirect from './components/Auth/OauthRedirect'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/oauthredirect" component={OauthRedirect} />
        <Route path="/register" component={Register} />
        <Route path="/restaurants" component={RestaurantRoutes} />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
