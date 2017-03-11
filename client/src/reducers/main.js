import { combineReducers } from 'redux'

import subreddits from './subreddits'

/*
subreddits: {
	science: {
		fetching: false,
		posts: [article, article],
		message: ''
	}
}
*/

const reducers = combineReducers({
	subreddits
})

export default reducers
