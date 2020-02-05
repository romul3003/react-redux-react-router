import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './components/Home/Home'
import Login from './components/Login'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Header />
					<main>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/login">
								<Login />
							</Route>
							<Route path="/news">
								<div>news</div>
							</Route>
							<Route path="/profile">
								<Profile />
							</Route>
						</Switch>
					</main>
					<footer className="footer py-3 text-center bg-primary">
						Very informative footer
					</footer>
				</div>
			</Router>
		)
	}
}

export default App
