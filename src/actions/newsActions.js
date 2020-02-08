import { httpGet } from '../helpers/network'
import { GET_NEWS_FAILURE, GET_NEWS_SUCCESS, SHOW_LOADER } from '../constants'

export function getNewsLoading(bool) {
	return {
		type: SHOW_LOADER,
		payload: {
			isLoading: bool,
		},
	}
}

export function getNewsSuccess(data) {
	return {
		type: GET_NEWS_SUCCESS,
		payload: {
			data,
		},
	}
}

export function getNewsErrored(message) {
	return {
		type: GET_NEWS_FAILURE,
		payload: {
			errorMsg: message,
		},
		error: true,
	}
}

export function getNews() {
	return dispatch => {
		dispatch(getNewsLoading(true))

		httpGet()
			.then(response => {
				dispatch(getNewsLoading(false))
				dispatch(getNewsSuccess(response))
				return response
			})
			.catch(error => {
				dispatch(getNewsLoading(false))
				dispatch(getNewsErrored(error.message))
			})
	}
}

// 	fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news', {
// 		method: 'GET',
// 	})
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw Error(response.statusText);
// 			}
//
// 			dispatch(getNewsLoading(false));
//
// 			return response;
// 		})
// 		.then(response => response.json())
// 		.then((json) => {
// 			if (json.status === 'ok') {
// 				dispatch(getNewsSuccess(json.data));
// 			} else if (json.status === 'err') {
// 				dispatch(getNewsErrored(json.message));
// 			}
// 		})
// 		.catch((error) => {
// 			dispatch(getNewsLoading(false));
// 			dispatch(getNewsErrored(error.message));
// 		});
// };
// }
