// Higher Order Component

import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class AuthenticateUser extends React.Component {
    componentDidMount () {
      const { 
        authenticated, 
      } = this.props; 
      
      if (!authenticated) {
        this.props.history.push('/')
      } 
    }

    componentDidUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    const {
      currentUser,
    } = state.auth;

    return { 
        authenticated: state.auth.authenticated
    }
  }

  return connect(mapStateToProps)(AuthenticateUser)
}