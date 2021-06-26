const helper = (state: {}, action: { type: any; posts: never[]; subreddit: any }) => {
	const posts = action.posts || []
	const fetching = (posts.length === 0)
	return Object.assign({}, state, {
		[action.subreddit]: {
			fetching,
			posts,
		}
	})
}

const subreddits = (state = {}, action: { type: any; posts: never[]; subreddit: any }) => {
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
