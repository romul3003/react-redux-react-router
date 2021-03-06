import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'
import LoginContainer from './containers/LoginContainer'
import ProfileContainer from './containers/ProfileContainer'
import NotFound from './components/NotFound'
import PrivateRoute from './containers/PrivateRoute'
import NewsContainer from './containers/NewsContainer'

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={LoginContainer} />
						<Route path="/news" component={NewsContainer} />
						<PrivateRoute path="/profile" component={ProfileContainer} />
						<Route component={NotFound} />
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
