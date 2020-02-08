import { SHOW_LOADER, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../constants'

const initialState = {
	data: null,
	isLoading: false,
	errorMsg: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return {
				...state,
				isLoading: action.payload.isLoading,
				errorMsg: '',
			}

		case GET_NEWS_SUCCESS:
			return {
				...state,
				data: action.payload.data,
				errorMsg: '',
			}

		case GET_NEWS_FAILURE:
			return {
				...state,
				data: null,
				errorMsg: action.payload.errorMsg,
			}

		default:
			return state
	}
}
