import React from 'react'
import PropTypes from 'prop-types'

const NewsContent = ({ data }) => {
	if (data.length) {
		return (
			<ul className="list-group">
				{data.map(article => (
					<li key={article.id} className="list-group-item">
						<article>
							<h3 className="capitalize-first-letter">{article.title}</h3>
							<p className="capitalize-first-letter">{article.body}</p>
						</article>
					</li>
				))}
				<div className="my-3">News total: {data.length}</div>
			</ul>
		)
	}

	return <p>There are no news yet</p>
}

NewsContent.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NewsContent
