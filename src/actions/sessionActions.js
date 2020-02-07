import { isCredentialsValid } from '../helpers/session'
import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../constants'

export const login = (params, cb) => dispatch => {
	if (isCredentialsValid(params)) {
		dispatch({
			type: LOG_IN,
			payload: {
				name: params.username,
			},
		})
		cb()
	} else {
		dispatch({
			type: LOG_IN_FAILURE,
			payload: {
				errorMessage: 'Invalid login or password',
			},
			error: true,
		})
	}
}

export const logout = () => {
	return {
		type: LOG_OUT,
	}
}
