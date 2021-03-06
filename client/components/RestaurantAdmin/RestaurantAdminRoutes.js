import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Test from '../Auth/Test';
import OauthRedirect from '../Auth/OauthRedirect';
import Aside from '../UI/Aside/Aside';
import MenuItems from './MenuItems';
import NewMenuItem from './NewMenuItem'
import AuthenticateUser from '../../hoc/AuthenticateUser';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return <div>Test</div>
}

class RestaurantAdminRoutes extends React.Component {
  render () {
    const {path} = this.props.match

    return (
      <React.Fragment>
        <Sidebar path={path} />
        <Switch>
          <Route exact path={`${path}`} component={Dashboard} />
          <Route path={`${path}/products/new`} component={NewMenuItem} />
          <Route path={`${path}/products`} component={MenuItems} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default AuthenticateUser(RestaurantAdminRoutes)