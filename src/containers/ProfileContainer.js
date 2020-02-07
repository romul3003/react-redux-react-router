import React, { Component } from 'react'
import Profile from '../components/Profile'
import { connect } from 'react-redux'

class ProfileContainer extends Component {
	render() {
		const { user } = this.props
		return <Profile user={user} />
	}
}

const mapStateToProps = state => ({
	user: state.session.user,
})

export default connect(mapStateToProps)(ProfileContainer)
