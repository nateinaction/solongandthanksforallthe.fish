import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface newsState {
	[index: string]: section;
}

interface section {
	title: string;
	isFetching: boolean;
	articles: article[];
};

interface articleData {
	title: string;
	thumbnail: string;
	url: string;
	permalink: string;
	num_comments: number;
}

interface article {
  data: articleData;
};

const initialState: newsState = {
	science: {
		title: 'Science',
		isFetching: true,
		articles: [],
	},
	space: {
		title: 'Space',
		isFetching: true,
		articles: [],
	},
	technology: {
		title: 'Tech',
		isFetching: true,
		articles: [],
	},
	environment: {
		title: 'Environment',
		isFetching: true,
		articles: [],
	},
	askscience: {
		title: 'Ask Science',
		isFetching: true,
		articles: [],
	},
	earthporn: {
		title: 'Earth Photography',
		isFetching: true,
		articles: [],
	},
	funny: {
		title: 'Humor',
		isFetching: true,
		articles: [],
	},
};

interface setArticlesPayload {
	subredditName: string,
	articles: article[],
}

// fetchArticles Fetches the 5 most recent hot posts from a subreddit and dispatch an action
export const fetchArticles = createAsyncThunk(
	'fetchArticles',
	async (subredditName: string) => {
		const response = await fetch(`https://www.reddit.com/r/${subredditName}/hot.json?sort=hot`);
		const data = await response.json();
		return {subredditName, data}
	}
)

export const news = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchArticles.fulfilled, (state, action) => {
			state[action.payload.subredditName].isFetching = false
			state[action.payload.subredditName].articles = action.payload.data.data.children.filter((post: { data: { stickied: boolean; }; }) => (
				(!post.data.stickied)
			)).slice(0, 5);
		})
	}
})

export type { newsState, section, article, articleData }

export default news.reducer