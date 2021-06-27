const setSubredditName = (subredditName: string, posts: any) => ({
  type: 'SET_SUBREDDIT_NAME',
  subredditName,
  posts
})

export default setSubredditName;
