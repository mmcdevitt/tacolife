// Higher Order Component

import React from 'react';
import { connect } from 'react-redux';
import AuthenticateUser from './AuthenticateUser'

export default function (ComposedComponent) {
  class AuthenticateAdmin extends React.Component {
    componentDidMount () {
      const { 
        currentUser, 
        history 
      } = this.props; 

      if (!currentUser.superAdmin) {
        this.props.history.push('/')
      } 
    }

    componentDidUpdate (nextProps) {
      if (!nextProps.currentUser.superAdmin) {
        this.props.history.push('/')
      }
    }

    render () {
      if (!this.props.currentUser.superAdmin) return ''
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    const {
      currentUser,
    } = state.auth;

    return { 
        currentUser,
    }
  }

  return connect(mapStateToProps)(AuthenticateUser(AuthenticateAdmin))
}