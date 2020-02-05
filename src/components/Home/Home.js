import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
	render() {
		return (
			<div className="home__jumbotron jumbotron">
				<div className="container">
					<h1 className="display-4">Home page</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Consectetur cum delectus deleniti dolores eligendi fuga laudantium
						quibusdam quis, suscipit voluptatem?
					</p>
				</div>
			</div>
		)
	}
}

export default Home
