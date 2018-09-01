import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SingleRestaurant from './SingleRestaurant'

class RestaurantRoutes extends React.Component {
	render () {
		const { path } = this.props.match

		return (
			<Switch>
				<Route path={`${path}/:id`} component={SingleRestaurant} />
			</Switch>
		)
	}
}

export default RestaurantRoutes;




















