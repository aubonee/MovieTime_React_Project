import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AllMovies from './components/AllMovies';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
  {
    path :"/movie/:id",
    element : <MovieDetail></MovieDetail>,
    loader : ()=> fetch('/movies.json'),
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode className="bg-black p-0">
    <RouterProvider  router={router} />
  </React.StrictMode>
)
