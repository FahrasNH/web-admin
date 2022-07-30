import { combineReducers } from 'redux'
import genre from './genreReducers'
import movie from './movieReducers'

export default combineReducers({
  genre,
  movie,
})
