import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './components/Home/Home'
import LoginContainer from './containers/LoginContainer'

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={LoginContainer} />
						<Route path="/news">
							<div>news</div>
						</Route>
						<Route path="/profile" component={Profile} />
					</Switch>
				</main>
				<footer className="footer py-3 text-center bg-primary">
					Very informative footer
				</footer>
			</div>
		)
	}
}

export default App
