import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGenreAction } from '../actions/genreActions'

const useGenre = () => {
  const dispatch = useDispatch()
  const managementGenreState = useSelector((state) => state.genre)

  const handleGetAllGenre = useCallback(
    (callback) => {
      dispatch(getAllGenreAction(dispatch, callback))
    },
    [dispatch],
  )

  return {
    managementGenreState,
    getAllGenre: handleGetAllGenre,
  }
}

export default useGenre
