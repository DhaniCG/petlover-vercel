import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root from './routes/root';
import ErrorPage from './error-page';
import Home from './routes/home';
import Animals, { loader as animalsLoader } from './routes/category';
import PetInfo from './routes/petInfo';
import Foods, { loader as foodsLoader } from './routes/foods';
import FoodInfo from './routes/foodInfo';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/'
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route
        index
        element={<Home />}
      />

      <Route
        path='category/:contentId'
        element={<Animals />}
        loader={animalsLoader}
      />

      <Route
        path='category/:contentId/:id'
        element={<PetInfo />}
        />

      <Route
        path='foods/:contentId'
        element={<Foods />}
        loader={foodsLoader}
        />

      <Route
        path='foods/:contentId/:id'
        element={<FoodInfo />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
