// Higher Order Component

import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class AuthenticateAdmin extends React.Component {
    // static contextTypes = {
    //   router: React.PropTypes.object    
    // }

    componentWillMount () {
      if (!this.props.currentUser.superAdmin) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.currentUser.superAdmin) {
        this.props.history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    const {authenticated} = state.Auth;

    return { 
        currentUser: state.auth.currentUser,
        authenticated,
    }
  }

  return connect(mapStateToProps)(AuthenticateAdmin)
}