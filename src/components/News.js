import React from 'react'
import PropTypes from 'prop-types'
import { errors } from '../constants'
import NewsContent from './NewsContent'
import './News.scss'

const News = ({ data, isLoading, errorMsg }) => {
	return (
		<div className="container mt-3">
			<h1>News</h1>
			{data && <NewsContent data={data} />}

			{isLoading && <p>Загрузка...</p>}

			{errorMsg && <p>{errors[errorMsg] || errors.other}</p>}
		</div>
	)
}

News.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
	isLoading: PropTypes.bool.isRequired,
	errorMsg: PropTypes.string.isRequired,
}

News.defaultProps = {
	data: null,
}

export default News
