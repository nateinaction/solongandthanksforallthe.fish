import { combineReducers } from 'redux'

import message from './message'
import fetching from './fetching'
import subreddits from './subreddits'

/*
weather: {
	message: 'Could not access your location.'
	display: {scale: 'F'},
	fetching: {coords: false, weather: false},
	weather: {
		location: 'Austin, TX',
		temp: {F: 45, C: 7},
		condition: 'cloudy',
		icon: 'cloudy'
	}
}
*/

const reducers = combineReducers({
	message,
	fetching,
	subreddits
})

export default reducers
