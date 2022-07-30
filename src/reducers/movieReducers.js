import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  MOVIE_DETAIL_SUCCESS,
} from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  dataMovie: [],
  detailMovie: null,
}

export default function genre(state = initialState, action) {
  switch (action.type) {
    case MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataMovie: action?.data?.results,
      }
    case MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        detailMovie: action?.data,
      }
    case MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action?.errorMessage,
        errorObject: action?.errorObject,
      }
    default:
      return state
  }
}
