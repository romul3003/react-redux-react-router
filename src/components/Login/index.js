import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends Component {
	state = {
		redirectToPreviousRoute: false,
		username: '',
		password: '',
	}

	handleSubmit = e => {
		e.preventDefault()
		const { username, password } = this.state

		this.props.login(
			{
				username,
				password,
			},
			() => {
				this.setState({ redirectToPreviousRoute: true })
			}
		)

		this.setState({
			username: '',
			password: '',
		})
	}

	handleChange = e => {
		const value = e.currentTarget.value
		const fieldName = e.currentTarget.dataset.fieldName

		this.setState(prev => ({
			...prev,
			[fieldName]: value,
		}))
	}

	render() {
		const { location, errorMsg } = this.props
		const { from } = location.state || { from: { pathname: '/' } }
		const { username, password, redirectToPreviousRoute } = this.state

		if (redirectToPreviousRoute) {
			return <Redirect to={from} />
		}

		return (
			<div className="container">
				<form className="mt-3" onSubmit={this.handleSubmit}>
					<div className="form-group">
						{errorMsg && <p className="text-danger">{errorMsg}</p>}
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							data-field-name={'username'}
							onChange={this.handleChange}
							value={username}
						/>
						<small id="nameHelp" className="form-text text-muted">
							We'll never share your data with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							data-field-name={'password'}
							onChange={this.handleChange}
							value={password}
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		)
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	errorMsg: PropTypes.string,
}

export default Login
