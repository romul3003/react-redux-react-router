import { LOG_IN, LOG_IN_FAILURE, LOG_OUT } from '../constants'

const initialState = {
	user: null,
	errorMsg: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				user: {
					name: action.payload.name,
				},
				errorMsg: '',
			}

		case LOG_OUT:
			return {
				...state,
				user: null,
				errorMsg: '',
			}

		case LOG_IN_FAILURE:
			return {
				...state,
				user: null,
				errorMsg: action.payload.errorMessage,
			}

		default:
			return state
	}
}
