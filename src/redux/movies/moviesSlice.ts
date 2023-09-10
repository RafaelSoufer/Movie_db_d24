/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  Get,
  IMovieData,
  IMovieDetail,
  IMovieSearchResult,
} from '../../api/moviesRequests';
import {getApiErrorMessage, IGeneralState, REQUEST_STATUS} from '../general';
import {EMPTY_MOVIE_DETAIL} from '../../utils';
import {toast} from 'react-toastify';

const ACTION_TYPE = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIE_DETAIL: 'GET_MOVIE_DETAIL',
  GET_SEARCH_BY_TITLE: 'GET_SEARCH_BY_TITLE',
};

type IActionType = keyof typeof ACTION_TYPE;

export interface IMoviesState extends IGeneralState<typeof ACTION_TYPE> {
  movies: IMovieData;
  movie_detail: IMovieDetail;
  search_result: IMovieSearchResult;
}

const initialState: IMoviesState = {
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  movie_detail: EMPTY_MOVIE_DETAIL,
  search_result: {} as IMovieSearchResult,
  requests: {
    GET_MOVIES: REQUEST_STATUS.IDLE,
    GET_MOVIE_DETAIL: REQUEST_STATUS.IDLE,
    GET_SEARCH_BY_TITLE: REQUEST_STATUS.IDLE,
  },
};

// ACTIONS
export const getMoviesAction = createAsyncThunk<IMovieData, void>(
  ACTION_TYPE.GET_MOVIES,
  async () => {
    const apiResponse = await Get.getMovies()
      .then(resp => {
        return resp;
      })
      .catch(err => {
        return err;
      });
    if (apiResponse.status === 200) {
      return apiResponse.data as IMovieData;
    }
    throw Error(getApiErrorMessage(apiResponse, 'Failed getting Movies.'));
  },
);

export const getMovieDatail = createAsyncThunk<IMovieDetail, {id: number}>(
  ACTION_TYPE.GET_MOVIE_DETAIL,
  async ({id}) => {
    const apiResponse = await Get.getMovieDetails(id)
      .then(resp => {
        return resp;
      })
      .catch(err => {
        return err;
      });
    if (apiResponse.status === 200) {
      return apiResponse.data as IMovieDetail;
    }
    throw Error(getApiErrorMessage(apiResponse, 'Failed getting Detail.'));
  },
);

export const getSearchMovieByTitle = createAsyncThunk<
  IMovieSearchResult,
  {query: string}
>(ACTION_TYPE.GET_SEARCH_BY_TITLE, async ({query}) => {
  const apiResponse = await Get.getSearchMovieByTitle(query)
    .then(resp => {
      return resp;
    })
    .catch(err => {
      return err;
    });
  if (apiResponse.status === 200) {
    return apiResponse.data as IMovieSearchResult;
  }
  throw Error(getApiErrorMessage(apiResponse, 'Failed getting Detail.'));
});

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    resetRequestStatus(state, {payload}: PayloadAction<IActionType>) {
      state.requests[payload] = REQUEST_STATUS.IDLE;
    },
    resetSearch(state) {
      state.search_result = {} as IMovieSearchResult;
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
        state.movies = {} as IMovieData;
      })
      .addCase(getMovieDatail.fulfilled, (state, {payload}) => {
        state.movie_detail = payload;
      })
      .addCase(getMovieDatail.rejected, state => {
        state.movie_detail = {} as IMovieDetail;
      })
      .addCase(getSearchMovieByTitle.fulfilled, (state, {payload}) => {
        state.search_result = payload;
      })
      .addCase(getSearchMovieByTitle.rejected, state => {
        state.search_result = {} as IMovieSearchResult;
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
          toast.error(action.error.message);
        }
      });
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
