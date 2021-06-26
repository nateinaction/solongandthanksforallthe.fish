const setSubreddit = (subreddit: string, posts: any) => ({
	type: 'SET_SUBREDDIT',
  subreddit,
  posts
})

export default setSubreddit;
