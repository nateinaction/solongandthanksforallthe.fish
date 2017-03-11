const fetching = (state = false, action) => {
	switch (action.type) {
		case 'FETCHING':
			return true
		case 'SET_SUBREDDIT':
		case 'SET_MESSAGE':
			return false
		default:
			return state
	}
}

export default fetching
