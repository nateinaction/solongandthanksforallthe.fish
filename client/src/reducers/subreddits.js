const subreddits = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SUBREDDIT':
			return Object.assign({}, state, {
				[action.subreddit]: action.posts
			})
		default:
			return state
	}
}

export default subreddits
