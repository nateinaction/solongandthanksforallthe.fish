const helper = (state, action) => {
	const message = action.message || ''
	const posts = action.posts || []
	const fetching = (posts.length === 0 && message.length === 0)
	return Object.assign({}, state, {
		[action.subreddit]: {
			fetching,
			posts,
			message
		}
	})
}

const subreddits = (state = {}, action) => {
	switch (action.type) {
		case 'FETCHING':
		case 'SET_MESSAGE':
		case 'SET_SUBREDDIT':
			return helper(state, action)
		default:
			return state
	}
}

export default subreddits
