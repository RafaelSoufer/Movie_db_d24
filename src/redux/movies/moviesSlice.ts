/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import {Get, IMovieData, IMovieDetail} from '../../api/moviesRequests';
import {getApiErrorMessage, IGeneralState, REQUEST_STATUS} from '../general';

const ACTION_TYPE = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIE_DETAIL: 'GET_MOVIE_DETAIL',
};

type IActionType = keyof typeof ACTION_TYPE;

export interface IMoviesState extends IGeneralState<typeof ACTION_TYPE> {
  movies: IMovieData;
  movie_detail: {};
}

const initialState: IMoviesState = {
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  movie_detail: {},
  requests: {
    GET_MOVIES: REQUEST_STATUS.IDLE,
    GET_MOVIE_DETAIL: REQUEST_STATUS.IDLE,
  },
};

// ACTIONS
export const getMoviesAction = createAsyncThunk<IMovieData, void>(
  ACTION_TYPE.GET_MOVIES,
  async () => {
    const apiResponse = await Get.getMovies();
    if (apiResponse.status === 200) {
      return apiResponse.data as IMovieData;
    }
    throw Error(getApiErrorMessage(apiResponse, 'Failed getting Movies.'));
  },
);

export const getMovieDatail = createAsyncThunk<IMovieDetail, {id: number}>(
  ACTION_TYPE.GET_MOVIE_DETAIL,
  async ({id}) => {
    const apiResponse = await Get.getMovieDetails(id);
    if (apiResponse.status === 200) {
      return apiResponse.data as IMovieDetail;
    }
    throw Error(getApiErrorMessage(apiResponse, 'Failed getting Detail.'));
  },
);

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    resetRequestStatus(state, {payload}: PayloadAction<IActionType>) {
      state.requests[payload] = REQUEST_STATUS.IDLE;
    },
    resetSlice() {
      return {...initialState};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMoviesAction.fulfilled, (state, {payload}) => {
        state.movies = payload;
      })
      .addCase(getMoviesAction.rejected, state => {
        state.movies = {
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0,
        };
      })
      .addCase(getMovieDatail.fulfilled, (state, {payload}) => {
        state.movie_detail = payload;
      })
      .addCase(getMovieDatail.rejected, state => {
        state.movie_detail = {};
      })
      .addMatcher(isPending, (state, action) => {
        const request = action.type.split('/')[0] as IActionType;
        if (state.requests?.[request]) {
          state.requests[request] = REQUEST_STATUS.PENDING;
        }
      })
      .addMatcher(isFulfilled, (state, action) => {
        const request = action.type.split('/')[0] as IActionType;
        if (state.requests?.[request]) {
          state.requests[request] = REQUEST_STATUS.SUCCESS;
        }
      })
      .addMatcher(isRejected, (state, action) => {
        const request = action.type.split('/')[0] as IActionType;
        if (state.requests?.[request]) {
          state.requests[request] = REQUEST_STATUS.FAILED;
        }
      });
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
