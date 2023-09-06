/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import {Get, IMovieData} from '../../api/moviesRequests';
import {getApiErrorMessage, IGeneralState, REQUEST_STATUS} from '../general';

const ACTION_TYPE = {
  GET_MOVIES: 'GET_MOVIES',
};

type IActionType = keyof typeof ACTION_TYPE;

export interface IMoviesState extends IGeneralState<typeof ACTION_TYPE> {
  movies: IMovieData;
}

const initialState: IMoviesState = {
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  requests: {
    GET_MOVIES: REQUEST_STATUS.IDLE,
  },
};

// ACTIONS
export const getMoviesAction = createAsyncThunk<IMovieData, void>(
  ACTION_TYPE.GET_MOVIES,
  async () => {
    const apiResponse = await Get.getMovies();
    if (apiResponse.status === 200) {
      return apiResponse.data as any;
    }
    throw Error(getApiErrorMessage(apiResponse, 'Failed getting Movies.'));
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

export const firmwaresActions = moviesSlice.actions;

export default moviesSlice.reducer;
