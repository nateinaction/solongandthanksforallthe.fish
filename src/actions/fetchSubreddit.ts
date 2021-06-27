import axios from 'axios';

import setFetching from './setFetchingSubreddit'
import setSubreddit from './setSubredditName'

const fetchSubreddit = (subreddit: string) => (
  (dispatch: any) => {
    dispatch(setFetching(subreddit))

    const url = `https://www.reddit.com/r/${subreddit}/hot.json`
    const config = {
      params: {
        sort: 'hot'
      }
    }
    return axios(url, config)
      .then(res => (
        dispatch(setSubreddit(subreddit, res.data.data.children.filter((post: { data: { stickied: boolean; }; }) => (
          (!post.data.stickied)
        )).slice(0, 5)))
      ))
      .catch(err => {
        if (err) console.log(err)
      });
  }
)

export default fetchSubreddit
