import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {me} from '../../store'
import {fetchSubdomain} from '../../helpers'

class OauthRedirect extends React.Component {
  componentDidMount () {
    if (location.search && location.search.length > 0) {
      localStorage.setItem('token', queryString.parse(location.search).token)
    }

    this.props.me()

    if (fetchSubdomain() && fetchSubdomain() !== 'www') {
      this.props.history.push('/admin')
    } else {
      this.props.history.push('/')
    }
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