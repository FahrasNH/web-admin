import React, { useEffect } from 'react'
import Table from '../../components/organisms/Table'
import useGenre from '../../hooks/useGenres'

const ListGenre = () => {
  const { getAllGenre, managementGenreState } = useGenre()

  useEffect(() => {
    getAllGenre()
  }, [getAllGenre])

  return (
    <div>
      <div className="mb-9">
        <h1 className="font-semibold text-xl mb-2">List of Movie Genres</h1>
        <p className="font-light text-base">
          This is a page that contains a collection of movie genres.
        </p>
      </div>
      <div>
        <Table data={managementGenreState} />
      </div>
    </div>
  )
}

export default ListGenre
