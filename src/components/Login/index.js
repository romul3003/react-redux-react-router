import React, { Component } from 'react'

class Login extends Component {
	render() {
		return (
			<div className="container">
				<form className="mt-3">
					<div className="form-group">
						<label htmlFor="login">Email address</label>
						<input type="text" className="form-control" id="login" />
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your data with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="password" />
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default Login
