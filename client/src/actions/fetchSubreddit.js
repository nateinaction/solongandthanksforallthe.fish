import axios from 'axios';

import setFetching from './setFetching'
import setSubreddit from './setSubreddit'
import setMessage from './setMessage'

const fetchSubreddit = (subreddit) => (
  (dispatch) => {
    dispatch(setFetching(subreddit))

    const url = `https://www.reddit.com/r/${subreddit}/new.json`
    const config = {
      params: {
        sort: 'hot'
      }
    }
    return axios(url, config)
			.then(res => (
				dispatch(setSubreddit(subreddit, res.data.children))
			))
		  .catch(err => {
				if (err) console.log(err)
		  	return dispatch(setMessage(subreddit, 'Unable to connect to Reddit. Please check your internet connection.'))
		  });
  }
)

export default fetchSubreddit
