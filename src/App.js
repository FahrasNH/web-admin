import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/templates/Layout'
import DetailMovie from './pages/DetailMovie'
import ListGenre from './pages/ListGenre'
import ListMovie from './pages/ListMovie'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<ListGenre />} />
        <Route path="/list-movie" exact element={<ListMovie />} />
        <Route path="/list-movie/:id" element={<DetailMovie />} />
      </Routes>
    </Layout>
  )
}

export default App
