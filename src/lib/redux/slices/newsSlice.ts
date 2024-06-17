// slices/newsSlice.ts
import { NewsCategoryEnum } from "@/enums";
import { News, NewsData } from "@/types";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category: NewsCategoryEnum): Promise<News> => {
    const response = await fetch(`/api/top-headlines?category=${category}`);
    const data: NewsData = await response.json();
    return data.data.articles;
  }
);

type InitialState = {
  news: News;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  news: [],
  loading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'newsStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    })
    .addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
  selectors: {
    selectNews: (state: InitialState) => state.news,
    selectLoading: (state: InitialState) => state.loading,
    selectError: (state: InitialState) => state.error,
  }
});


export const { selectError, selectLoading, selectNews } = newsSlice.selectors;
