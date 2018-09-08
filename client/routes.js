import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {UserHome} from './components'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './containers/Home';
import RestaurantRoutes from './components/Restaurants/routes';
import HomeCom from './components/user-home'
import OauthRedirect from './components/Auth/OauthRedirect'
import Admin from './components/admin'
import AuthenticateAdmin from './hoc/AuthenticateAdmin'
import AuthenticateUser from './hoc/AuthenticateUser'

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
        <Route path="/admin" component={AuthenticateUser(AuthenticateAdmin(Admin))} />
        {/* {
          this.props.authenticated && (
            <Switch>
              <Route path="/admin" component={AuthenticateAdmin(Admin)} />
            </Switch>
          ) 
        }
        <Route component={Home} /> */}
      </Switch>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentUser: state.auth.currentUser,
    authenticated: state.auth.authenticated
  }
}

export default withRouter(connect(mapStateToProps)(Routes))
