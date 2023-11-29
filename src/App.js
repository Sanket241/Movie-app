import React from 'react'
import Home from './Component/Home'
import Single from './Component/Single'
import Error from './Component/Error'
import Search from './Component/Search'
import Movie from './Component/Movie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (

<>
<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>} />
<Route path="/movie" element={<Movie/>} />
<Route path="movie/:id" element={<Single />} />
<Route path="/search" element={<Search/>} />
<Route path="/*" element={<Error/>} />


</Routes>
</BrowserRouter>


</>


    )
}

export default App