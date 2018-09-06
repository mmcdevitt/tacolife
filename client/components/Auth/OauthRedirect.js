import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {me} from '../../store'

class OauthRedirect extends React.Component {
  componentDidMount () {
    if (location.search && location.search.length > 0) {
      localStorage.setItem('token', queryString.parse(location.search).token)
    }
    this.props.me()
    this.props.history.push('/')
  }

  render () {
    const {email} = this.props

    return (
      <div>
        <h3>Welcome</h3>
      </div>
    )
  }
}

export default connect(null, {
  me
})(OauthRedirect)