export function isCredentialsValid(params) {
	return !(
		params.username.toLowerCase() !== 'admin' || params.password !== '12345'
	)
}
