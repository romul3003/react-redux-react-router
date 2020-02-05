import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<ul className="navbar-nav">
			<li className="nav-item text-center">
				<NavLink className="nav-link" to="/" exact>
					Home
				</NavLink>
			</li>
			<li className="nav-item text-center">
				<NavLink className="nav-link" to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item text-center">
				<NavLink className="nav-link" to="/news">
					News
				</NavLink>
			</li>
			<li className="nav-item text-center">
				<NavLink className="nav-link" to="/profile">
					Profile
				</NavLink>
			</li>
		</ul>
	)
}

export default Navigation
