import React from 'react'
import CardMovie from '../../molecules/MovieCard'
import IMAGES from '../../../constants/images'
import Spinner from '../../atoms/Spinner'

const MovieList = ({ data, isLoading, noData, onClick }) => {
  return (
    <div>
      <div className="mb-12 flex flex-wrap mx-auto justify-center">
        {data?.results?.length > 0
          ? (data?.results || []).map((dataUser, idx) => (
              <div key={idx} className=" px-4 sm:px-6 lg:px-4 py-12 ">
                <CardMovie data={dataUser} onClick={onClick} />
              </div>
            ))
          : !isLoading && (
              <div className="mx-auto">
                <img src={IMAGES.illEmpty} alt="illEmpty" />
              </div>
            )}
      </div>

      {isLoading && (
        <div className="m-4 text-center">
          <Spinner />
        </div>
      )}

      {noData && <div className="m-4 text-center">No data anymore ...</div>}
    </div>
  )
}

export default MovieList
