import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovieAction, getDetailMovieAction } from '../actions/movieAction'

const useMovie = () => {
  const dispatch = useDispatch()
  const managementMovieState = useSelector((state) => state.movie)

  const handleGetAllMovie = useCallback(
    (params, callback) => {
      dispatch(getAllMovieAction(params, dispatch, callback))
    },
    [dispatch],
  )

  const handleGetDetailMovie = useCallback(
    (params, callback) => {
      dispatch(getDetailMovieAction(params, dispatch, callback))
    },
    [dispatch],
  )

  return {
    managementMovieState,
    getAllMovie: handleGetAllMovie,
    getDetailMovie: handleGetDetailMovie,
  }
}

export default useMovie
