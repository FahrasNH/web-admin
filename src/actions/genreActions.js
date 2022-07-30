import { apiConfig } from '../constants/config'
import {
  GENRE_REQUEST,
  GENRE_SUCCESS,
  GENRE_FAILURE,
} from '../constants/actionTypes'

// ----- GENRE ----- //
export const genreSuccess = (data) => ({
  type: GENRE_SUCCESS,
  data,
})

export const genreFailure = (errorMessage, errorObject) => ({
  type: GENRE_FAILURE,
  errorMessage,
  errorObject,
})

export const genrePending = (data) => ({
  type: GENRE_REQUEST,
  data,
})

export const getAllGenreAction = (dispatch, callback) => {
  return async () => {
    dispatch(genrePending())
    try {
      const result = await fetch(
        `${apiConfig.apiUrl}3/genre/movie/list?api_key=${apiConfig.apiKey}`,
      )
      const response = await result.json()

      if (result.ok) {
        dispatch(genreSuccess(response?.genres))
        callback?.(response?.genres)
      }
    } catch (e) {
      dispatch(genreFailure(e?.response?.statusText, e?.response))
    }
  }
}

// ----- END OF GENRE ----- //
