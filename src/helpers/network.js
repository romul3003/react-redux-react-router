const API_ROOT = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

export const httpGet = async () => {
	const response = await fetch(`${API_ROOT}`)
	if (response.ok) {
		return await response.json()
	} else {
		throw new Error(response.status)
	}
}

/* eslint-disable */
// without async/await
export const httpGetWithoutAsyncAwait = endPoint => {
	return fetch(`${API_ROOT}/${endPoint}`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error(response.status)
			}
		})
		.then(json => json)
		.catch(err => console.warn('httpGetWithoutAsyncAwait error ', err))
}
/* eslint-enable */
