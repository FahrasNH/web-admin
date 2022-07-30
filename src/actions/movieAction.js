import { apiConfig } from '../constants/config'
import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  MOVIE_DETAIL_SUCCESS,
} from '../constants/actionTypes'

// ----- MOVIE ----- //
export const movieSuccess = (data) => ({
  type: MOVIE_SUCCESS,
  data,
})

export const movieFailure = (errorMessage, errorObject) => ({
  type: MOVIE_FAILURE,
  errorMessage,
  errorObject,
})

export const moviePending = (data) => ({
  type: MOVIE_REQUEST,
  data,
})

export const movieDetailSuccess = (data) => ({
  type: MOVIE_DETAIL_SUCCESS,
  data,
})

export const getAllMovieAction = (params, dispatch, callback) => {
  const { page } = params

  return async () => {
    dispatch(moviePending())
    try {
      const result = await fetch(
        `${apiConfig.apiUrl}3/movie/upcoming?api_key=${apiConfig.apiKey}&page=${page}`,
      )
      const response = await result.json()

      if (result.ok) {
        dispatch(movieSuccess(response))
        callback?.(response)
      }
    } catch (e) {
      dispatch(movieFailure(e?.response?.statusText, e?.response))
    }
  }
}

export const getDetailMovieAction = (params, dispatch, callback) => {
  const { id } = params

  return async () => {
    dispatch(moviePending())
    try {
      const result = await fetch(
        `${apiConfig.apiUrl}3/movie/${id}?api_key=${apiConfig.apiKey}`,
      )
      const response = await result.json()

      if (result.ok) {
        dispatch(movieDetailSuccess(response))
        callback?.(response)
      }
    } catch (e) {
      dispatch(movieFailure(e?.response?.statusText, e?.response))
    }
  }
}

// ----- END OF MOVIE ----- //
