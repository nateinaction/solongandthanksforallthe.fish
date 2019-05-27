const setMessage = (subreddit, message) => ({
	type: 'SET_MESSAGE',
	subreddit,
	message
})

export default setMessage;
