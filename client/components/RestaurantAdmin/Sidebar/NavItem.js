import React from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends React.Component {
	render () {
		return (
      <li>
        <NavLink to={this.props.path}>
          { this.props.name }
        </NavLink>
      </li>
		)
	}
}

export default NavItem