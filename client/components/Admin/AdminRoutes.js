import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from './Dashboard'

class AdminRoutes extends Component {
  render() {
    const {path} = this.props.match

    return (
      <Switch>
        <Route exact path={`${path}`} component={Dashboard} />
        {/* <Route exact path={`${path}/orders`} component={Orders} />
        <Route path={`${path}/orders/:id`} component={SingleOrder} /> */}
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

export default connect(mapStateToProps)(AdminRoutes)
