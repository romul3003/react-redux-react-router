import React from 'react'

const Profile = ({ user = { name: 'Roman' } }) => {
	return (
		<div className="container">
			<h1 className="text-center mt-3">This is {user.name}'s profile</h1>
		</div>
	)
}

export default Profile
