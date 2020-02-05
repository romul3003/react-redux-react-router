import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'

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
								<div>login</div>
							</Route>
							<Route path="/news">
								<div>news</div>
							</Route>
							<Route path="/profile">
								<div>profile</div>
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
