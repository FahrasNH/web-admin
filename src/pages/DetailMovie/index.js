/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useMovie from '../../hooks/useMovies'
import IMAGES from '../../constants/images'
import moment from 'moment'

const DetailMovie = () => {
  const { getDetailMovie, managementMovieState } = useMovie()
  const params = useParams()

  useEffect(() => {
    getDetailMovie({ id: params.id })
  }, [getDetailMovie])

  const runtimeDuration = (runtime) => {
    let hourDuration = Math.floor(runtime / 60)
    let minDuration = runtime % 60

    return <em className="font-light">{`${hourDuration}h ${minDuration}m`}</em>
  }

  return (
    <div className="mt-12">
      <div className="flex mr-12">
        <div className="mr-12">
          <img
            src={`${
              managementMovieState?.detailMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w440_and_h660_face/${managementMovieState?.detailMovie?.poster_path}`
                : IMAGES.illEmpty
            }`}
            className="rounded-lg shadow-lg"
            alt="poster"
          />
        </div>
        <div className="w-[80%]">
          <div className="mb-9">
            <h1 className="font-semibold text-xl mb-2">
              {managementMovieState?.detailMovie?.original_title}{' '}
              <em className="font-normal">
                (
                {moment(managementMovieState?.detailMovie?.release_date).format(
                  'YYYY',
                )}
                )
              </em>
            </h1>
            <p className="font-light text-base">
              <em>{managementMovieState?.detailMovie?.tagline}</em>
            </p>

            <ul className="list-disc">
              <li className="inline-block text-gray-600 font-light">
                {(
                  managementMovieState?.detailMovie?.genres || []
                ).map((item, idx, arr) =>
                  arr.length - 1 !== idx ? `${item.name}, ` : item.name,
                )}
              </li>
              <li className="inline-block font-light">
                {runtimeDuration(managementMovieState?.detailMovie?.runtime)}
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <h2 className="font-semibold text-lg mb-3">Overview</h2>
            <p className="text-gray-600 font-light">
              {managementMovieState?.detailMovie?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMovie
