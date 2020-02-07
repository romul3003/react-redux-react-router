import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={routeProps =>
				rest.isUser ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: routeProps.location },
						}}
					/>
				)
			}
		/>
	)
}

const mapStateToProps = state => {
	return {
		isUser: state.session.user,
	}
}

export default connect(mapStateToProps)(PrivateRoute)
