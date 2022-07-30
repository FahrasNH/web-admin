/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMovie from '../../hooks/useMovies'
import IMAGES from '../../constants/images'
import moment from 'moment'

const DetailMovie = () => {
  const { getDetailMovie, managementMovieState } = useMovie()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getDetailMovie({ id: params.id })
  }, [getDetailMovie])

  const runtimeDuration = (runtime) => {
    let hourDuration = Math.floor(runtime / 60)
    let minDuration = runtime % 60

    return <em className="font-light">{`${hourDuration}h ${minDuration}m`}</em>
  }

  return (
    <div>
      <div
        className="mb-9 flex items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="font-bold ml-3">Back</span>
      </div>
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
            <div className="mt-5 flex">
              <div className="bg-slate-300 w-fit py-1 px-3 rounded-full">
                <p className="text-xs">
                  {managementMovieState?.detailMovie?.adult ? '18+' : '13+'}
                </p>
              </div>
              <div className="ml-3">
                <p className="text-gray-600 font-light">
                  {(
                    managementMovieState?.detailMovie?.genres || []
                  ).map((item, idx, arr) =>
                    arr.length - 1 !== idx ? `${item.name}, ` : item.name,
                  )}
                </p>
              </div>
              <div className="ml-3">
                <p className="font-light">
                  {runtimeDuration(managementMovieState?.detailMovie?.runtime)}
                </p>
              </div>
            </div>
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
