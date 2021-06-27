/*
subreddits: {
	science: {
		fetching: false,
		posts: [article, article]
	}
}
*/

declare var subreddit: {
	posts: typeof post[];
	fetching: boolean;
};

declare var post: {
	title: string;
	thumbnail: string;
	url: string;
	permalink: string;
	num_comments: number;
};

declare var action_type: {
	type: string;
	posts: typeof post[];
	subredditName: string;
}

const helper = (state: {}, action: typeof action_type) => {
	const posts = action.posts || []
	const fetching = (posts.length === 0)
	return Object.assign({}, state, {
		[action.subredditName]: {
			fetching,
			posts,
		}
	})
}

const subreddits = (state = {}, action: typeof action_type) => {
	switch (action.type) {
		case 'SET_FETCHING_SUBREDDIT':
		case 'SET_SUBREDDIT_NAME':
			return helper(state, action)
		default:
			return state
	}
}

export default subreddits
