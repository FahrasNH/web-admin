/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import MovieList from '../../components/organisms/MovieList'
import useMovie from '../../hooks/useMovies'
import { useNavigate } from 'react-router-dom'

const ListMovie = () => {
  const { getAllMovie } = useMovie()
  const [dataMovies, setDataMovies] = useState({
    results: [],
  })
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const [noData, setNoData] = useState(false)
  const [originalTitle, setOriginalTitle] = useState('')
  const navigate = useNavigate()

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) loadMovies(page)
    }
  }

  useEffect(() => {
    loadMovies(page)
  }, [])

  useEffect(() => {
    const newResults = dataMovies.results.filter((item) =>
      item.title.toLowerCase().includes(originalTitle),
    )

    if (!originalTitle) {
      getAllMovie({ page: 1 }, (res) => {
        setDataMovies(res)
        setLoading(false)
      })
    } else {
      setDataMovies({
        ...dataMovies,
        results: newResults,
      })
    }
  }, [originalTitle])

  const handleSearch = (evt) => {
    setOriginalTitle(evt.target.value)
  }

  const loadMovies = (page) => {
    setLoading(true)

    setTimeout(() => {
      getAllMovie({ page }, (res) => {
        setDataMovies((oldDataMovie) =>
          oldDataMovie?.results.length > 0
            ? {
                ...oldDataMovie,
                results: [...oldDataMovie?.results, ...res.results],
              }
            : res,
        )

        setPage((prevPage) => prevPage + 1)

        if (res?.results.length < 1) {
          setLoading(false)
          setNoData(true)
        }
      })
    }, 1500)
  }

  const handleToDetail = (id) => {
    navigate(`/list-movie/${id}`)
  }

  return (
    <div>
      <div className="mb-9 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl mb-2">List of Movies</h1>
          <p className="font-light text-base">
            This is a page that contains a collection of the best movies.
          </p>
        </div>
        <div>
          <input
            type="text"
            value={originalTitle}
            onChange={handleSearch}
            placeholder="Search by Title"
            className="block mx-4 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>
      </div>

      <div>
        <MovieList
          data={dataMovies}
          isLoading={isLoading}
          noData={noData}
          onClick={handleToDetail}
        />
      </div>
    </div>
  )
}

export default ListMovie
