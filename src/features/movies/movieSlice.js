/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//constants
import movieApi from "../../common/api/MovieApi";
import { APIKey } from "../../common/api/MovieApiKey";

const initialState = {
  movies: {},
  shows: {},
  movieShowDetails: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncShowsDetails = createAsyncThunk(
  "movies/fetchAsyncShowsDetails",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.movieShowDetails = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Fetched Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Success");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetched Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Success");
      return { ...state, shows: payload };
    },
    [fetchAsyncShowsDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Success");
      return { ...state, movieShowDetails: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllSelectedMovieOrShow = (state) =>
  state.movies.movieShowDetails;

export default movieSlice.reducer;
