import {
  GENRE_REQUEST,
  GENRE_SUCCESS,
  GENRE_FAILURE,
} from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  dataGenre: [],
}

export default function genre(state = initialState, action) {
  switch (action.type) {
    case GENRE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case GENRE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataGenre: action?.data,
      }
    case GENRE_FAILURE:
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
