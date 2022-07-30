import React from 'react'
import { Link } from 'react-router-dom'
import { listSidebar } from '../../../constants/listSidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            {listSidebar.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.url}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="overflow-x-hidden m-6 w-full">{children}</main>
    </div>
  )
}

export default Layout
