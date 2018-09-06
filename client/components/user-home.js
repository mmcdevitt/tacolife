import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import queryString from 'query-string'

// if (location.string) {
  localStorage.setItem('token', queryString.parse(location.search).token)
// }


/**
 * COMPONENT
 */
class UserHome extends React.Component {
  componentDidMount () {
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
