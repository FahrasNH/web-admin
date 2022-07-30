import moment from 'moment'
import React from 'react'
import IMAGES from '../../../constants/images'

const MovieCard = ({ data, onClick }) => {
  return (
    <div className="rounded-lg cursor-pointer">
      <div
        onClick={() => onClick(data?.id)}
        className="flex flex-col align-center"
      >
        <img
          alt="imgThumb"
          className={`${
            !data?.poster_path && 'px-8'
          } rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1.5 w-[200px] h-[300px]`}
          src={`${
            data?.poster_path
              ? `https://image.tmdb.org/t/p/w440_and_h660_face/${data?.poster_path}`
              : IMAGES.illEmpty
          }`}
        />
        <p className="mt-3 font-light">
          {moment(data?.release_date).format('ll')}
        </p>
        <p className="mt-3 font-semibold w-[200px]">{data?.title}</p>
      </div>
    </div>
  )
}

export default MovieCard
