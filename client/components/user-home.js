import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {me} from '../store'


/**
 * COMPONENT
 */
class UserHome extends React.Component {
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

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: null
  }
}

export default connect(mapState, {me})(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
