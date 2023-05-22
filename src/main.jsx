import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import AllToys from './Pages/AllToys/AllToys';
import MyToys from './Pages/MyToys/MyToys';
import AddToy from './Pages/AddToy/AddToy';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blog from './Pages/Blog/Blog';
import SingleToy from './Pages/SingleToy/SingleToy';
import ToyCategories from './Pages/Home/ToyCategories';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toys-zone-server.vercel.app/toy"),
      },
      {
        path: "/myToys/:email", 
        element: <MyToys></MyToys>,
      },
      {
        path: "/toy/subcategory/:subCategory",
        element: <ToyCategories></ToyCategories>,
        loader: () => fetch("https://toys-zone-server.vercel.app/toy"),
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/toy/:id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) => fetch(`https://toys-zone-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/myBlog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
