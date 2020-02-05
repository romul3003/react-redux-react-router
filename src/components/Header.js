import React, { Component } from 'react'
import Navigation from './Navigation/Navigation'

class Header extends Component {
	state = {
		isMenuShown: false,
	}

	toggleMenu = () => {
		this.setState(state => ({
			isMenuShown: !state.isMenuShown,
		}))
	}

	render() {
		return (
			<header>
				<nav className="navbar navbar-dark navbar-expand-md bg-primary">
					<div className="navbar-brand">Note app</div>

					<button
						className="navbar-toggler"
						type="button"
						onClick={this.toggleMenu}
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className={`collapse navbar-collapse ${
							this.state.isMenuShown ? 'show' : ''
						}`}
					>
						<Navigation />
					</div>
				</nav>
			</header>
		)
	}
}

export default Header
