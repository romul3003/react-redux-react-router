import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
	return (
		<div className="container">
			<h1 className="text-center mt-3">This is {user.name}'s profile</h1>
		</div>
	)
}

Profile.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}).isRequired,
}

export default Profile
