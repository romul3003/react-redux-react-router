import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger')
	middlewares.push(logger)
}

const enhancer = composeEnhancers(
	applyMiddleware(...middlewares)
	// other store enhancers if any
)

export const store = createStore(reducer, enhancer)
