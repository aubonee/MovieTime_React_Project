import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AllMovies from './components/AllMovies';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
  {
    path: "/exploreMovie",
    element: <AllMovies></AllMovies>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
