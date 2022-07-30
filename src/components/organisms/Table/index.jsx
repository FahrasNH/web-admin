import React from 'react'
import IMAGES from '../../../constants/images'
import Spinner from '../../atoms/Spinner'

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-2">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 w-6">
              No.
            </th>
            <th scope="col" className="py-3 px-6">
              Genre Id
            </th>
            <th scope="col" className="py-3 px-6">
              Genre Name
            </th>
          </tr>
        </thead>
        <tbody>
          {!data?.isFetching ? (
            data?.dataGenre?.length > 0 ? (
              (data?.dataGenre || []).map((genre, idx) => (
                <tr
                  key={genre.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="py-4 px-6">{idx + 1}</td>
                  <td className="py-4 px-6">{genre.id}</td>
                  <td className="py-4 px-6">{genre.name}</td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td colSpan={3}>
                  <img
                    src={IMAGES.illEmpty}
                    alt="illEmpty"
                    className="mx-auto"
                  />
                </td>
              </tr>
            )
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td colSpan={3} className="p-6 text-center">
                <Spinner />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
