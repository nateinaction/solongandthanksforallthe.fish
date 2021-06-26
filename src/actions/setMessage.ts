const setMessage = (subreddit: string, message: string) => ({
	type: 'SET_MESSAGE',
	subreddit,
	message
})

export default setMessage;
