import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class MenuItems extends React.Component {
  render () {
    const { data } = this.props;

    return (
      <div>
        <Link to="/admin/products/new">New</Link>
        {
          data.menuItems.map(item => {
            return (
              <div key={item.id}>
                {item.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { data } = state.restaurant;

  return {
    data,
  }
}

export default connect(mapStateToProps)(MenuItems)